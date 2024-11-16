module.exports = {
    apps: [
        {
            script: './dist/bin/www.js',
            name: 'ecommerce-monolith-mvc-ssr-service',
            exec_mode: 'cluster',
            instances: 0,
        },
    ],
};
