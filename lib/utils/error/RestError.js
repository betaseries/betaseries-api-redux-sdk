export default class RestError extends Error {
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
