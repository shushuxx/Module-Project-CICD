const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            // target: 'http://nice_jackson:8080',
            // target: 'http://192.168.0.128:8080',
            // target: 'http://172.17.0.3:8080',
            // target: 'http://10.0.2.6:8080',
            changeOrigin: true,
        })
    );
};