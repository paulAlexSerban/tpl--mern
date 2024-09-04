export default ({ env }) => ({
    host: env('HOST', '0.0.0.0/cms'),
    port: env.int('PORT', 1337),
    app: {
        keys: env.array('APP_KEYS'),
    },
    webhooks: {
        populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
    proxy: env.bool('PROXY', true),
    url: env('URL', 'http://localhost:3000/cms'),
    // globalProxy: env('GLOBAL_PROXY','http://localhost:3000'),
});
