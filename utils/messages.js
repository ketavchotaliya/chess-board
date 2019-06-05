'use strict'

module.exports = {
    SERVER_ERROR_MESSAGE: 'Internal Server Error.',
    ACCESS_DENIED: 'Access Denied!',
    INVALID_REQUEST: 'Your request is invalid!!',
    UNAUTHORIZED_ACCESS: 'Unauthorised access!',

    /**
     * It will return required field message
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkIfRequired: (fieldName) => {
        return `${fieldName} is required.`
    },

    /**
     * It will return message for alphanumeric field validation.
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkIfAlphaNumeric: (fieldName) => {
        return `The ${fieldName} must be alpha numeric.`
    },

    /**
     * It will return message for numeric field validation.
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkIfNumeric: (fieldName) => {
        return `The ${fieldName} field must be numeric.`
    },


    /**
     * It will return message for number value between min and max value.
     *
     * @param {string} fieldName
     * @param {integer} min
     * @param {integer} max
     *
     * @return {string}
     */
    checkNumberAndMinMax: (fieldName, min, max) => {
        return `The ${fieldName} must be a number and between ${min} and ${max}.`
    },


    /**
     * It will return message for enum validation
     *
     * @param {string} fieldName
     * @param {array} enumArray
     *
     * @return {string}
     */
    checkIfValidEnum: (fieldName, enumArray) => {
        return `The ${fieldName} must have a valid value from ${enumArray}`
    },

    /**
     * It will return message for valid non empty array.
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkIfArray: (fieldName) => {
        return `The ${fieldName} must not be empty and it should be a valid array.`
    },

    /**
     * It will return message for valid non empty string.
     *
     * @param {string} fieldName
     * @param {integer} min
     * @param {integer} max
     *
     * @return {string}
     */
    checkLength: (fieldName, min, max) => {
        let minimum = typeof min !== 'undefined' ? min.toString() : ''
        let maximum = typeof max !== 'undefined' ? max.toString() : ''

        if (minimum === maximum) {
            return `${fieldName} length should be ${maximum} characters.`
        } else if (maximum === '') {
            return `${fieldName}  length must be at least ${minimum} characters.`
        } else if (minimum === '') {
            return `${fieldName} length should not be greater than ${maximum} characters.`
        } else {
            return `${fieldName} length must be between ${minimum} to ${maximum} characters.`
        }
    },
    /**
     * It will return message for valid json.
     *
     * @param {String} fieldName
     *
     * @return {String}
     */
    checkIfValidJSON: (fieldName = '') => {
        return `The ${fieldName} must be a valid JSON String.`
    }
}
