var hash = require('./hash');

/**
 * md5 hash
 *
 * @param {String|Buffer} s
 * @param {String} [format] output string format, could be 'hex' or 'base64'. default is 'hex'.
 * @return {String} md5 hash string
 * @public
 */
module.exports = function md5(s, format) {
    return hash('md5', s, format);
};
