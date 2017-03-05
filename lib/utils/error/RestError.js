/**
 * RestError class
 */
export default class RestError extends Error {
  /**
   * @param {Number}  code      BetaSeries API error code
   * @param {String}  message   Error message
   * @param {Array}   errors    List of errors
   */
  constructor(code, message, errors) {
    super(message);

    this.name = 'RestError';
    this.code = parseInt(code, 10);
    this.message = message;
    this.errors = errors;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}
