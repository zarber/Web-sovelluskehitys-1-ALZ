var express = require('express');
var app = express();
var swaggerUI = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
var swaggerOptions = {
    explorer: true,
};


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, swaggerOptions));

module.exports = app;