const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware({
      target: "https://business.momo.vn/",
      changeOrigin: true,
    })
  );
};
