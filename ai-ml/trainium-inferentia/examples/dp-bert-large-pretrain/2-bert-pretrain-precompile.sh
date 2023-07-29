#!/bin/bash

#--------------------------------------------------------------------------------
# Pre-requisites - Copy Training Wiki corpus dataset to FSx for Lustre
#--------------------------------------------------------------------------------
# export DOCKER_BUILDKIT=1
# ECR_REPO=$(aws ecr describe-repositories --repository-name eks_torchx_tutorial \
#     --query repositories[0].repositoryUri --output text)
# docker build ./docker -f docker/Dockerfile.cmd_shell -t $ECR_REPO:cmd_shell
# docker push $ECR_REPO:cmd_shell
# kubectl apply -f cmd_shell_pod.yaml
# kubectl exec -it cmd-shell -- /bin/bash
# cd /data
# aws s3 cp s3://neuron-s3/training_datasets/bert_pretrain_wikicorpus_tokenized_hdf5/bert_pretrain_wikicorpus_tokenized_hdf5_seqlen128.tar . --no-sign-request
# chmod 744 bert_pretrain_wikicorpus_tokenized_hdf5_seqlen128.tar
# yum install tar
# tar xvf bert_pretrain_wikicorpus_tokenized_hdf5_seqlen128.tar
#--------------------------------------------------------------------------------
# NOTE: This training dataset size is 30GB 


read -p "Did you configure kubeconfig (e.g., aws eks --region us-west-2 update-kubeconfig --name trainium-inferentia):  (y/n): " response
read -p "Confirm that you have the 'lib' folder with 'trn1_dist_ddp.py' in the same directory (y/n): " response
read -p "Enter the ECR REPO (e.g., <AccountId>.dkr.ecr.<region>.amazonaws.com/eks_torchx_test): " ECR_REPO_URI
read -p "Enter the ECR TAG (e.g., bert_pretrain): " IMAGE_TAG

#--------------------------------------------------------------------------------
# Install kubectl
# curl -o kubectl https://s3.us-west-2.amazonaws.com/amazon-eks/1.25.7/2023-03-17/bin/linux/amd64/kubectl
# chmod u+x kubectl
# sudo mv kubectl /usr/local/bin
#--------------------------------------------------------------------------------

#--------------------------------------------------------------------------------
# Install Docker using the following commands:
# sudo yum install -y docker jq
# sudo service docker start
# sudo usermod -aG docker ec2-user
#--------------------------------------------------------------------------------

#--------------------------------------------------------------------------------
# Install and configure docker-credential-ecr-login
# TorchX depends on the docker-credential-ecr-login helper to authenticate with your ECR repository in order to push/pull container images.
# Run the following commands to install and configure the credential helper:
mkdir -p ~/.docker
cat <<EOF > ~/.docker/config.json
{
    "credsStore": "ecr-login"
}
EOF

sudo yum install -y amazon-ecr-credential-helper
#--------------------------------------------------------------------------------

#--------------------------------------------------------------------------------
# Install Volcano and etcd by running the following commands on the jump host:
# The following tools are already installed by Terraform
# kubectl apply -f https://raw.githubusercontent.com/pytorch/torchx/main/resources/etcd.yaml
# kubectl apply -f https://raw.githubusercontent.com/volcano-sh/volcano/master/installer/volcano-development.yaml
#--------------------------------------------------------------------------------

#--------------------------------------------------------------------------------
# Use pip to install TorchX on the jump host:
pip3 install torchx[kubernetes]
#--------------------------------------------------------------------------------

INSTANCE_TYPE="trn1.32xlarge"

# Login to ECR
# aws ecr get-login-password --region "$region" | docker login --username AWS --password-stdin "$ECR_REPO_URI"

# Precompile the BERT graphs using neuron_parallel_compile
# PyTorch Neuron comes with a tool called neuron_parallel_compile which reduces graph compilation time by extracting model graphs and then compiling the graphs in parallel.
# The compiled graphs are stored on the shared storage volume where they can be accessed by the worker nodes during model training.
# To precompile the BERT graphs, run the following commands:

# Notice --steps_this_run 10 is used to run a small number of steps for testing purposes
torchx run \
    -s kubernetes --workspace="file:///$PWD/docker" \
    -cfg queue=test,image_repo=$ECR_REPO_URI lib/trn1_dist_ddp.py:generateAppDef \
    --name bertcompile \
    --script_args "--batch_size 16 --grad_accum_usteps 32 \
        --data_dir /data/bert_pretrain_wikicorpus_tokenized_hdf5_seqlen128 \
        --output_dir /data/output --steps_this_run 10" \
    --nnodes 2 \
    --nproc_per_node 32 \
    --image $ECR_REPO_URI:$IMAGE_TAG \
    --script dp_bert_large_hf_pretrain_hdf5.py \
    --bf16 True \
    --cacheset bert-large \
    --precompile True \
    --instance_type $INSTANCE_TYPE
