'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @alias module:BetaSeries.getReducer
 * @category static
 *
 * @param {String} module  Module name
 * @param {String} reducer Reducer name
 *
 * @returns {Object}
 */
var getReducer = function getReducer(modules) {
  return function (module, reducer) {
    if (!Object.prototype.hasOwnProperty.call(modules, module)) {
      throw Error('Module ' + module + ' does not exist.');
    }
    if (!Object.prototype.hasOwnProperty.call(modules[module], 'reducers')) {
      throw Error('Module ' + module + ' has no reducer.');
    }
    if (!Object.prototype.hasOwnProperty.call(modules[module].reducers, reducer)) {
      throw Error('Reducer ' + reducer + ' does not exist.');
    }

    var reducerName = module === reducer ? reducer : module + reducer.charAt(0).toUpperCase() + reducer.slice(1);

    return _defineProperty({}, reducerName, modules[module].reducers[reducer]);
  };
};

exports.default = getReducer;