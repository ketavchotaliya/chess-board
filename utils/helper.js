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
        const rowPosition = {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
            e: 5,
            f: 6,
            g: 7,
            h: 8
        };
        try {
            return rowPosition[position]
        } catch (err) {
            console.error(__filename, 'getRowNumbers', err.stack);
            throw err;
        }
    },

    getRowLetters: (position) => {
        const rowPosition = {
            1: 'A',
            2: 'B',
            3: 'C',
            4: 'D',
            5: 'E',
            6: 'F',
            7: 'G',
            8: 'H'
        };
        try {
            return rowPosition[position]
        } catch (err) {
            console.error(__filename, 'getRowLetters', err.stack);
            throw err;
        }
    }
}
