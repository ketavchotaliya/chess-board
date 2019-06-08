/**
 * {@code swaggerApiDoc} file provide the swagger service for documentation
 * for the APIs.
 * This library is depends on express-swagger-generator version ^1.1.10
 * @author Ketav Chotaliya
 * @since 1.0.0 RELEASE February 05, 2019
 */
'use strict';

class SwaggerApiDoc {
  constructor(app) {
    this.app = app;
    this.expressSwagger = require('express-swagger-generator')(this.app);
    this.expressSwagger(this.getOptions())
  }

  getOptions() {
    return {
      swaggerDefinition: {
        info: {
          description: 'This API documentation is related to ChessBoard APIs',
          title: 'API Documentation for ChessBoard',
          version: '1.0.0'
        },
        host: config.get('server.host') + ':' + config.get('server.port'),
        basePath: '',
        produces: [
          'application/json'
        ],
        schemes: [ 'http', 'https' ],
        securityDefinitions: {
          JWT: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: 'Bearer token for authenticate the user'
          },
          verificationToken: {
            type: 'apiKey',
            in: 'header',
            name: 'verification-token',
            description: 'Bearer token for user verification'
          }
        }
      },
      basedir: __dirname + '/../', // app absolute path
      files: [
        './app/components/chessBoard/chessBoardController.js'
      ] // Path to the API handle folder
    };
  }
}

module.exports = SwaggerApiDoc;
