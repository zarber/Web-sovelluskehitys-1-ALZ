const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});
const outputFile = "./swagger.json";
const endpointsFiles = ["./app.js"];
const config = {
    securityDefinitions: {
        bearer: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    }
};

swaggerAutogen(outputFile, endpointsFiles, config);