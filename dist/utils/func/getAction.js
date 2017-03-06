'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @alias module:BetaSeries.getAction
 * @category static
 *
 * @param {String} module  Module name
 * @param {String} action  Action name
 *
 * @returns {Func}
 */
exports.default = function (modules) {
  return function (module, action) {
    if (!Object.prototype.hasOwnProperty.call(modules, module)) {
      throw Error('Module ' + module + ' does not exist.');
    }
    if (!Object.prototype.hasOwnProperty.call(modules[module], 'actions')) {
      throw Error('Module ' + module + ' has no action.');
    }
    if (!Object.prototype.hasOwnProperty.call(modules[module].actions, action)) {
      throw Error('Action ' + action + ' does not exist.');
    }

    return modules[module].actions[action];
  };
};