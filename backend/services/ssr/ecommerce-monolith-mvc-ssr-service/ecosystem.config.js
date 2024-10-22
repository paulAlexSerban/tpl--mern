module.exports = {
    apps: [
        {
            script: './dist/bin/www.js',
            name: 'api-ts-boilerplate',
            exec_mode: 'cluster',
            instances: 0,
        },
    ],
};
