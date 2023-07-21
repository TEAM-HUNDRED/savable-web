const { createProxyMiddleware } = require("http-proxy-middleware");

const url = "http://13.209.177.55:8080";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: url,
      changeOrigin: true,
    })
  );
};
