#!/bin/bash
set -o errexit
set -o pipefail

read -p "Enter domain name with wildcard and ensure ACM certificate is created for this domain name, e.g. *.example.com :" acm_certificate_domain
read -p "Enter sub-domain name for jupyterhub to be hosted,  e.g. eks.example.com : " jupyterhub_domain

targets=(
  "module.kubernetes_data_addons"
  "module.eks_blueprints_addons"
  "module.eks"
)

#-------------------------------------------
# Helpful to delete the stuck in "Terminating" namespaces
# Rerun the cleanup.sh script to detect and delete the stuck resources
#-------------------------------------------
terminating_namespaces=$(kubectl get namespaces --field-selector status.phase=Terminating -o json | jq -r '.items[].metadata.name')

# If there are no terminating namespaces, exit the script
if [[ -z $terminating_namespaces ]]; then
    echo "No terminating namespaces found"
fi

for ns in $terminating_namespaces; do
    echo "Terminating namespace: $ns"
    kubectl get namespace $ns -o json | sed 's/"kubernetes"//' | kubectl replace --raw "/api/v1/namespaces/$ns/finalize" -f -
done

#-------------------------------------------
# Terraform destroy per module target
#-------------------------------------------
for target in "${targets[@]}"
do
  destroy_output=$(terraform destroy -target="$target" -var="acm_certificate_domain=$acm_certificate_domain" -var="jupyterhub_domain=$jupyterhub_domain" -auto-approve | tee /dev/tty)
  if [[ ${PIPESTATUS[0]} -eq 0 && $destroy_output == *"Destroy complete!"* ]]; then
    echo "SUCCESS: Terraform destroy of $target completed successfully"
  else
    echo "FAILED: Terraform destroy of $target failed"
    exit 1
  fi
done

#-------------------------------------------
# Terraform destroy full
#-------------------------------------------
destroy_output=$(terraform destroy -target="$target" -var="acm_certificate_domain=$acm_certificate_domain" -var="jupyterhub_domain=$jupyterhub_domain" -auto-approve | tee /dev/tty)
if [[ ${PIPESTATUS[0]} -eq 0 && $destroy_output == *"Destroy complete!"* ]]; then
  echo "SUCCESS: Terraform destroy of all targets completed successfully"
else
  echo "FAILED: Terraform destroy of all targets failed"
  exit 1
fi