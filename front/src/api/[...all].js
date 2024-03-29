import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};

// Proxy configuration
const proxy = createProxyMiddleware({
    target: 'http://localhost:8888', // The target host
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/', // Rewrite paths to forward to the root of the target
    },
    // Additional options here if needed
});

export default (req, res) => proxy(req, res);
