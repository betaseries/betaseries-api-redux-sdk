'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchShowsReducer;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = [];

/**
 * List of the search shows
 *
 * **Actions listened**:
 *
 *  * `SEARCH_SHOWS`
 *
 * @alias module:Searchs.shows
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'characters');
 *
 * // state example
 * [
 *   ...shows               // list of search shows
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
function searchShowsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.SEARCH_SHOWS:
      return action.payload.shows;

    case _constants2.default.CLEAR_SEARCH_SHOWS:
      return initialState;

    default:
      return state;
  }
}