variable "name" {
  description = "Name of the VPC and EKS Cluster"
  default     = "jupyterhub-on-eks"
  type        = string
}

variable "region" {
  description = "region"
  type        = string
  default     = "us-east-2"
}

variable "eks_cluster_version" {
  description = "EKS Cluster version"
  default     = "1.26"
  type        = string
}

# VPC with 2046 IPs
variable "vpc_cidr" {
  description = "VPC CIDR. This should be a valid private (RFC 1918) CIDR range"
  default     = "10.1.0.0/16"
  type        = string
}

# Routable Public subnets with NAT Gateway and Internet Gateway
variable "public_subnets" {
  description = "Public Subnets CIDRs. 62 IPs per Subnet/AZ"
  default     = ["10.1.0.0/26", "10.1.0.64/26"]
  type        = list(string)
}

# Routable Private subnets only for Private NAT Gateway -> Transit Gateway -> Second VPC for overlapping overlapping CIDRs
variable "private_subnets" {
  description = "Private Subnets CIDRs. 254 IPs per Subnet/AZ for Private NAT + NLB + Airflow + EC2 Jumphost etc."
  default     = ["10.1.1.0/24", "10.1.2.0/24"]
  type        = list(string)
}


# RFC6598 range 100.64.0.0/10
# Note you can only /16 range to VPC. You can add multiples of /16 if required
variable "secondary_cidr_blocks" {
  description = "Secondary CIDR blocks to be attached to VPC"
  default     = ["100.64.0.0/16"]
  type        = list(string)
}

# EKS Worker nodes and pods will be placed on these subnets. Each Private subnet can get 32766 IPs.
# RFC6598 range 100.64.0.0/10
variable "eks_data_plane_secondary_subnets" {
  description = "Secondary CIDR blocks. 32766 IPs per Subnet per Subnet/AZ for EKS Node and Pods"
  default     = ["100.64.0.0/17", "100.64.128.0/17"]
  type        = list(string)
}

variable "cognito_domain" {
  description = "URL of the jupyter notebook."
  type        = string
  default     = "cog-jupyterhub"
}

variable "acm_certificate_domain" {
  type        = string
  description = "An ACM Certificate in the account + region where you are deploying this example. A wildcard certificate is preferred, e.g. *.example.com"
  default     = ""
}
