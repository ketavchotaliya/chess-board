'use strict'

module.exports = {
    SERVER_ERROR_MESSAGE: 'Internal Server Error.',
    INVALID_REQUEST: 'Your request is invalid!!',

    POSIBLE_MOVE_FOR_FROM: (piece, position) => {
      return `Possible moves for ${piece} on position ${position}`
    },

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
     * It will return message for enum validation
     *
     * @param {string} fieldName
     * @param {array} enumArray
     *
     * @return {string}
     */
    checkIfValidEnum: (fieldName, enumArray) => {
        return `The ${fieldName} must have a valid value from ${enumArray}`
    }
}
