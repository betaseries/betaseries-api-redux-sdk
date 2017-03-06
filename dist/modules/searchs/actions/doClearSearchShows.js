'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Clear search show
 *
 * **Dispatch**: `CLEAR_SEARCH_SHOWS`
 *
 * @alias module:Searchs.doClearSearchShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('searchs', 'doClearSearchShows')();
 *
 * @returns {Promise}
 */
var doClearSearchShows = function doClearSearchShows() {
  return function (dispatch) {
    return Promise.resolve().then(function () {
      return dispatch({
        type: _constants2.default.CLEAR_SEARCH_SHOWS
      });
    });
  };
};

exports.default = doClearSearchShows;