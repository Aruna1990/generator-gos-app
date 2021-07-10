const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

// create api with your definition file or object

const app = express();
app.use(cors({ origin: "*" }));

// app.use(express.json());

[
  "core",
  "cameras",
  "enginev",
  "engine",
  "insight",
  "analyse",
  "files",
  "stereo",
  "websocket",
  "metrics",
  "employee",
  "aifactory",
].forEach((path) => {
  app.use(
    `/${path}`,
    createProxyMiddleware({
      // target指向你的测试服务器host
      // target: `http://dev-service`,
      changeOrigin: true,
      logLevel: "debug",
    })
  );
});

app.use(
  "/",
  createProxyMiddleware({
    target: "http://localhost:<%= devPort %>",
    changeOrigin: true,
  })
);

app.listen(<%= proxyPort %>);
