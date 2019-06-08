'use strict';

class Helper {
    static createResponse(res, status, message, payload = {}, pager, header) {
        pager = typeof pager !== 'undefined' ? pager : {};
        header = typeof header !== 'undefined' ? header : {};

        return res.status(status).set(header).json({
            status: status,
            message: message,
            payload: payload,
            pager: pager
        })
    }

    static getObjectKeys(obj) {
        try {
            return Object.keys(obj)
        } catch (err) {
            console.error(__filename, 'getObjectKeys', '', 'Error in getObjectKeys', JSON.stringify(err.stack));
            throw err;
        }
    }

    static getObjectValues(obj) {
        try {
            return Object.values(obj)
        } catch (err) {
            console.error(__filename, 'getObjectValues', '', 'Error in getObjectValues', JSON.stringify(err.stack));
            throw err;
        }
    }

    static getRowNumbers(position) {
        const rowPosition = Constants.getRowPosition();
        try {
            return rowPosition[position]
        } catch (err) {
            console.error(__filename, 'getRowNumbers', err.stack);
            throw err;
        }
    }

    static getRowLetters(position) {
        const rowPosition = underscoreObj.invert(Constants.getRowPosition());
        try {
            return rowPosition[position]
        } catch (err) {
            console.error(__filename, 'getRowLetters', err.stack);
            throw err;
        }
    }
}

module.exports = Helper;
