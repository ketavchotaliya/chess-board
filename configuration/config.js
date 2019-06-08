/**
 * {@code convict} file provide the config service for different environment.
 * This library is dependent on convict version ^5.0.0
 * @summary All the configuration which will not in any envirounment
 * will place in config.js file and configiration which is variable
 * in every environment are places in config.js as well as
 * environment config file (like DB, Redis, AWS and other details)
 * @author Ketav Chotaliya
 * @since 1.0.0 RELEASE January 15, 2019
 */

const convict = require('convict');

let config = convict({
    env: {
        doc: 'The applicaton environment.',
        format: [ 'local', 'development', 'test', 'production' ],
        default: 'local',
        env: 'NODE_ENV',
        arg: 'env'
    },
    platform_name: {
        doc: 'Platform name',
        format: String,
        default: 'ChessBoard with Node.JS.'
    },
    server: {
        port: {
            doc: 'HTTP port to bind',
            format: Number,
            default: 8080,
            env: 'PORT'
        },
        host: {
            doc: 'HTTP port to bind',
            format: String,
            default: 'localhost',
            env: 'PORT'
        },
        bodyParser: {
            limit: {
                doc: 'maximum request body size',
                format: String,
                default: '100kb'
            }
        },
    },
    logger: {
        path: {
            doc: 'Default directory for logs',
            format: String,
            default: './logs/'
        },
        logFileSize: {
            doc: 'logs File Max File size',
            format: Number,
            default: 5242880 // Approx ~5.24288 MB
        }
  }
});

config.loadFile(`${__dirname}/config-${config.get('env')}.json`);

// validate
config.validate();

module.exports = config;
