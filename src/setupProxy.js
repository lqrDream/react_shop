const { createProxyMiddleware } = require('http-proxy-middleware');
let {url} = require('./server/index')

module.exports = function(app) {

    app.use('/m5', createProxyMiddleware({
        target: 'http://152.136.185.210:7878/api',
        changeOrigin: true,
    }));

    app.use('/api2', createProxyMiddleware({
        target: 'http://vareyoung.top',
        changeOrigin: true,
        pathRewrite: { //路径替换
            '^/api2': '/api', // axios 访问/api2 == target + /api
        }
    }));

};