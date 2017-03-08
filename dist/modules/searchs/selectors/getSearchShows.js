'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

var _commons = require('./commons');

var commons = _interopRequireWildcard(_commons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Select episode from state
 *
 * @alias module:Searchs.getSearchShows
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('searchs', 'getSearchShows')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Object}                  List of shows or empty array
 */
var getSearchShows = (0, _reselect.createSelector)([commons.getSearchShows], function (shows) {
  return shows;
});

exports.default = getSearchShows;