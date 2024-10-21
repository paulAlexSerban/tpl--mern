import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Devcamper API',
        version: '1.0.0',
        description: 'API to retrieve all bootcamps and courses',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Local development server',
        },
    ],
};

const options = {
    definition: swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
