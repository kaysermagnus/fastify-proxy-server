import fastify from "fastify";
import proxy from "@fastify/http-proxy";
import staticFolder from "@fastify/static";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config();

const CERT_PATH = String(process.env.CERT_PATH);
const KEY_PATH = String(process.env.KEY_PATH);
const TARGET = String(process.env.TARGET || "http://localhost:3001");
const PORT = Number(process.env.PORT || 443);

const startServer = async () => {
  // Create a Fastify instance
  const app = fastify({
    logger: true,
    https: {
      cert: fs.readFileSync(CERT_PATH),
      key: fs.readFileSync(KEY_PATH),
    },
  });

  // Register the proxy plugin
  app.register(proxy, {
    upstream: TARGET, // Replace with your HTTP server's IP and port http://<your-http-server-ip>:<port>
    rewritePrefix: "/", // Rewrite the incoming URL prefix (optional)
  });

  // Use public directory to serve static files from root folder
  app.register(staticFolder, {
    root: path.join(__dirname, "../public"),
  });

  // Start the server
  try {
    await app.listen({ port: PORT, host: "0.0.0.0" });
    console.log("Proxy server is running on https://0.0.0.0:443");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

// Start the server
startServer();
