'use strict';

class Constants {
    static httpStatusCode() {
        return {
            // success
            SUCCESS: 200,
            // request could not be understood by the server
            BAD_REQUEST: 400,
            // user authentication required like Authorization header
            UNAUTHORIZED: 401,
            // The server understood the request but refuses to authorize it.
            FORBIDDEN: 403,
            // Resourse not found
            NOT_FOUND: 404,
            /**
             * The server did not receive a complete request message within the
             * time that it was prepared to wait.
             */
            REQUEST_TIMEOUT: 408,
            // the syntax of the request entity is correct
            UNPROCESSED: 422,
            // when user has sent too many requests in a given amount of time  ("rate limiting").
            TOO_MANY_REQUEST: 429,
            // Server related internal error
            INTERNAL_SERVER_ERROR: 500,
            /**
             * The server is currently unable to handle the request due to a
             * temporary overload or scheduled maintenance
             */
            SERVICE_UNAVAILABLE: 503,
            /**
             * The server, while acting as a gateway or proxy, did not receive a timely
             * response from an upstream server it needed to access in order to complete
             * the request.
             */
            GATEWAY_TIMEOUT: 504,
            // custom error code for microservice and other
            CUSTOM_ERROR_CODE: 601
        }
    }

    static getRowPosition() {
        return {
            A: 1,
            B: 2,
            C: 3,
            D: 4,
            E: 5,
            F: 6,
            G: 7,
            H: 8
        }
    }

    static validPiece() {
        return [ 'King', 'Queen', 'Bishop', 'Horse', 'Rook', 'Pawn' ];
    }

    static validRow() {
        return [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ];
    }

    static validColumn() {
        return [ 1, 2, 3, 4, 5, 6, 7, 8 ];
    }
}

// HTTP Status codes
module.exports = Constants;
