module.exports = {
    apps: [
        {
            script: './dist/bin/www.js',
            name: 'spot-share-api',
            exec_mode: 'cluster',
            instances: 0,
        },
    ],
};
