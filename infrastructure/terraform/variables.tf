variable "aws_region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t2.micro"
}

variable "key_pair_name" {
  description = "Name of the existing EC2 key pair for SSH access"
  type        = string
}

variable "ssh_cidr" {
  description = "CIDR allowed to SSH into the instance (restrict to your IP for security)"
  type        = string
  default     = "0.0.0.0/0"
}
