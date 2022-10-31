"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[4607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,m=c["".concat(i,".").concat(d)]||c[d]||k[d]||n;return r?o.createElement(m,l(l({ref:t},u),{},{components:r})):o.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={title:"Argo Workflows on EKS",sidebar_position:4},l="Argo Workflows on EKS",s={unversionedId:"job-schedulers-eks/argo-workflows-eks",id:"job-schedulers-eks/argo-workflows-eks",title:"Argo Workflows on EKS",description:"Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. It is implemented as a Kubernetes CRD (Custom Resource Definition). As a result, Argo workflows can be managed using kubectl and natively integrates with other Kubernetes services such as volumes, secrets, and RBAC.",source:"@site/docs/job-schedulers-eks/argo-workflows-eks.md",sourceDirName:"job-schedulers-eks",slug:"/job-schedulers-eks/argo-workflows-eks",permalink:"/data-on-eks/docs/job-schedulers-eks/argo-workflows-eks",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/job-schedulers-eks/argo-workflows-eks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Argo Workflows on EKS",sidebar_position:4},sidebar:"docs",previous:{title:"Airflow on EKS",permalink:"/data-on-eks/docs/job-schedulers-eks/self-managed-airflow"}},i={},p=[{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Validate",id:"validate",level:2},{value:"Run <code>update-kubeconfig</code> command:",id:"run-update-kubeconfig-command",level:3},{value:"List the nodes",id:"list-the-nodes",level:3},{value:"List the namespaces in EKS cluster",id:"list-the-namespaces-in-eks-cluster",level:3},{value:"Access Argo Workflow WebUI",id:"access-argo-workflow-webui",level:3},{value:"Submit Spark Job with Argo Workflow",id:"submit-spark-job-with-argo-workflow",level:3},{value:"Submit Spark Job with Spark Operator and Argo Workflow",id:"submit-spark-job-with-spark-operator-and-argo-workflow",level:3}],u={toc:p};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"argo-workflows-on-eks"},"Argo Workflows on EKS"),(0,a.kt)("p",null,"Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. It is implemented as a Kubernetes CRD (Custom Resource Definition). As a result, Argo workflows can be managed using kubectl and natively integrates with other Kubernetes services such as volumes, secrets, and RBAC."),(0,a.kt)("p",null,"The example demonstrates how to use ",(0,a.kt)("a",{parentName:"p",href:"https://argoproj.github.io/argo-workflows/"},"Argo Workflows")," to assign jobs to Amazon EKS."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use Argo Workflows to trigger and execute a Spark job using Spark Submit"),(0,a.kt)("li",{parentName:"ol"},"Use Argo Workflows to trigger and execute a Spark job using Spark Operator")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/data-on-eks/tree/main/schedulers/argo-workflow"},"Code repo")," for this example."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites:"),(0,a.kt)("p",null,"Ensure that you have the following tools installed locally:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/argoproj/argo-workflows/releases/latest"},"Argo WorkflowCLI"))),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"To provision this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n\ncd schedulers/argo-workflow\n\nterraform init\n\nterraform apply -var region=<aws_region> #defaults to us-west-2\n")),(0,a.kt)("p",null,"Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"yes")," at command prompt to apply"),(0,a.kt)("p",null,"The following components are provisioned in your environment:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A sample VPC, 3 Private Subnets and 3 Public Subnets"),(0,a.kt)("li",{parentName:"ul"},"Internet gateway for Public Subnets and NAT Gateway for Private Subnets"),(0,a.kt)("li",{parentName:"ul"},"EKS Cluster Control plane with one managed node group"),(0,a.kt)("li",{parentName:"ul"},"EKS Managed Add-ons: VPC_CNI, CoreDNS, Kube_Proxy, EBS_CSI_Driver"),(0,a.kt)("li",{parentName:"ul"},"K8S metrics server, cluster autoscaler, Spark Operator and yunikorn scheduler"),(0,a.kt)("li",{parentName:"ul"},"K8s roles and rolebindings for argo workflows")),(0,a.kt)("h2",{id:"validate"},"Validate"),(0,a.kt)("p",null,"The following command will update the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubeconfig")," on your local machine and allow you to interact with your EKS Cluster using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to validate the deployment."),(0,a.kt)("h3",{id:"run-update-kubeconfig-command"},"Run ",(0,a.kt)("inlineCode",{parentName:"h3"},"update-kubeconfig")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks --region <REGION> update-kubeconfig --name <CLUSTER_NAME>\n")),(0,a.kt)("h3",{id:"list-the-nodes"},"List the nodes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes\n\n# Output should look like below\nNAME                                        STATUS   ROLES    AGE   VERSION\nip-10-1-131-99.us-west-2.compute.internal   Ready    <none>   26h   v1.23.9-eks-ba74326\nip-10-1-16-117.us-west-2.compute.internal   Ready    <none>   26h   v1.23.9-eks-ba74326\nip-10-1-80-41.us-west-2.compute.internal    Ready    <none>   26h   v1.23.9-eks-ba74326\n")),(0,a.kt)("h3",{id:"list-the-namespaces-in-eks-cluster"},"List the namespaces in EKS cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns\n\n# Output should look like below\nNAME              STATUS   AGE\nargo-workflows    Active   28h\ndefault           Active   30h\nkube-node-lease   Active   30h\nkube-public       Active   30h\nkube-system       Active   30h\nspark-operator    Active   30h\nyunikorn          Active   30h\n")),(0,a.kt)("h3",{id:"access-argo-workflow-webui"},"Access Argo Workflow WebUI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n argo-workflows port-forward deployment.apps/argo-workflows-server 2746:2746\nargo auth token # get login token\n\n# result:\nBearer k8s-aws-v1.aHR0cHM6Ly9zdHMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vP0FjdGlvbj1HZXRDYWxsZXJJZGVudGl0eSZWZXJzaW9uPTIwMTEtMDYtMTUmWC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNWNFhDV1dLUjZGVTRGMiUyRjIwMjIxMDEzJTJGdXMtd2VzdC0yJTJGc3RzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMjEwMTNUMDIyODAyWiZYLUFtei1FeHBpcmVzPTYwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCUzQngtazhzLWF3cy1pZCZYLUFtei1TaWduYXR1cmU9NmZiNmMxYmQ0MDQyMWIwNTI3NjY4MzZhMGJiNmUzNjg1MTk1YmM0NDQzMjIyMTg5ZDNmZmE1YzJjZmRiMjc4OA\n")),(0,a.kt)("p",null,"Open browser and enter ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:2746/")," and paste the token"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"argo-workflow-login",src:r(7254).Z,width:"1568",height:"764"})),(0,a.kt)("h3",{id:"submit-spark-job-with-argo-workflow"},"Submit Spark Job with Argo Workflow"),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow-example/argo-spark.yaml")," with your eks api server url"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f workflow-example/argo-spark.yaml\n\nkubectl get wf -n argo-workflows\nNAME    STATUS    AGE   MESSAGE\nspark   Running   8s  \n")),(0,a.kt)("p",null,"You can also check the workflow status from Web UI"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"argo-wf-spark",src:r(4534).Z,width:"1904",height:"776"})),(0,a.kt)("h3",{id:"submit-spark-job-with-spark-operator-and-argo-workflow"},"Submit Spark Job with Spark Operator and Argo Workflow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f workflow-example/argo-spark-operator.yaml\n\nkubectl get wf -n argo-workflows\nNAME             STATUS      AGE     MESSAGE\nspark            Succeeded   3m58s  \nspark-operator   Running     5s  \n")),(0,a.kt)("p",null,"The workflow status from web UI"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"argo-wf-spark-operator",src:r(5754).Z,width:"1710",height:"790"})))}k.isMDXComponent=!0},5754:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/argo-wf-spark-operator-ff79e6e70984bda22112c899e501e0c5.png"},4534:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/argo-wf-spark-5b904b96ed2057519c456d8717f024a6.png"},7254:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/argo-workflow-login-684a2020b281eb65eaf4eb5a87dddc1a.png"}}]);