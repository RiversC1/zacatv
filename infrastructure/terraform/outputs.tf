output "instance_id" {
  description = "EC2 instance ID"
  value       = aws_instance.web.id
}

output "public_ip" {
  description = "Static public IP (Elastic IP)"
  value       = aws_eip.web.public_ip
}

output "public_url" {
  description = "Website URL"
  value       = "http://${aws_eip.web.public_ip}"
}
