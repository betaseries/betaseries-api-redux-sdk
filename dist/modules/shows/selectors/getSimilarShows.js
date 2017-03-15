'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _commons = require('./commons');

var commons = _interopRequireWildcard(_commons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Select similar shows from state
 *
 * @alias module:Shows.getSimilarShows
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getSimilarShows')(state, { showId: props.showId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Array}                  Shows list or `undefined`
 */
var getSimilarShows = (0, _reselect.createSelector)([commons.getShows, commons.getSimilarShows, commons.getShowId], function (shows, similarShows, showId) {
  var similarShowIds = !Object.prototype.hasOwnProperty.call(similarShows, showId) ? null : similarShows[showId];

  if (!similarShowIds) {
    return undefined;
  }

  return (0, _filter3.default)(shows, function (show) {
    return similarShowIds.indexOf(show.id) !== -1;
  }) || undefined;
});

exports.default = getSimilarShows;