"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @alias module:BetaSeries.getConstants
 * @category static
 *
 * @param {String} module  Module name
 *
 * @returns {Object}
 */
exports.default = function (modules) {
  return function (module) {
    if (!Object.prototype.hasOwnProperty.call(modules, module)) {
      throw Error("Module " + module + " does not exist.");
    }

    return modules[module].constants;
  };
};