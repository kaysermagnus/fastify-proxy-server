# Fastify proxy server

## Description
This is a simple proxy server that forwards requests to a target server. It is built using Fastify and TypeScript.

## Installation
1. Clone the repository
2. Run `npm install`
3. Run `npm run build`
4. Run `npm start`

## Usage
The server listens on port 3000 by default. You can change the port by setting the `PORT` environment variable.

The server forwards requests to the target server specified in the `TARGET` environment variable.

## Certificates
The server uses self-signed certificates for HTTPS. You can generate new certificates by running `pnpm run generate-certs`.

## .env file
You can create a `.env` file in the root directory to set the environment variables. The following variables are supported:
- `PORT`: The port the server listens on. Default is 443.
- `TARGET`: The target server to forward requests to. Default is `http://localhost:3001`.
- `CERT_PATH`: The path to the certificate file. Default is `./certs/cert.pem`.
- `KEY_PATH`: The path to the key file. Default is `./certs/key.pem`.
