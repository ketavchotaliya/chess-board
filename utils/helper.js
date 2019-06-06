/* eslint-disable no-undef */
'use strict'
module.exports = {
    createResponse: (res, status, message, payload = {}, pager, header) => {
        pager = typeof pager !== 'undefined' ? pager : {}
        header = typeof header !== 'undefined' ? header : {}

        return res.status(status).set(header).json({
            status: status,
            message: message,
            payload: payload,
            pager: pager
        })
    },

    getObjectKeys: (obj) => {
        try {
            return Object.keys(obj)
        } catch (err) {
            console.error(__filename, 'getObjectKeys', '', 'Error in getObjectKeys', JSON.stringify(err.stack))
            throw err
        }
    },
    getObjectValues: (obj) => {
        try {
            return Object.values(obj)
        } catch (err) {
            console.error(__filename, 'getObjectValues', '', 'Error in getObjectValues', JSON.stringify(err.stack))
            throw err
        }
    },

    getRowNumbers: (position) => {
        const rowPosition = constants.getRowPosition;
        try {
            return rowPosition[position]
        } catch (err) {
            console.error(__filename, 'getRowNumbers', err.stack);
            throw err;
        }
    },

    getRowLetters: (position) => {
        const rowPosition = underscoreObj.invert(constants.getRowPosition);
        try {
            return rowPosition[position]
        } catch (err) {
            console.error(__filename, 'getRowLetters', err.stack);
            throw err;
        }
    }
}
