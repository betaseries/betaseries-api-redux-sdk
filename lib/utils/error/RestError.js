/**
 * RestError class
 */
export default class RestError extends Error {
  /**
   * @param {Number}  statusCode    Response status code
   * @param {Number}  errorCode     BS API error code
   * @param {String}  message       Error message
   * @param {Object}  json          All json object
   */
  constructor(statusCode, errorCode, message, json) {
    super(message);

    this.name = 'RestError';
    this.statusCode = parseInt(statusCode, 10);
    this.errorCode = errorCode;
    this.message = message;
    this.json = json;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}
