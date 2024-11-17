#!/bin/bash

# Update package list and install Certbot
sudo apt-get update
sudo apt-get install -y certbot

# Generate certificates using Certbot
# Replace example.com with your domain
sudo certbot certonly --standalone