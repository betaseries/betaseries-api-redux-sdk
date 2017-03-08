'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

var _commons = require('./commons');

var commons = _interopRequireWildcard(_commons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Select last episode by show from state
 *
 * @alias module:Shows.getLatestShowEpisode
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('shows', 'getLatestShowEpisode')(state, {
 *     showId: props.showId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Object}                  Episode element or `null`
 */
var getLatestShowEpisode = (0, _reselect.createSelector)([commons.getEpisodes, commons.getLatestEpisodes, commons.getShowId], function (episodes, latestEpisodes, showId) {
  var episodeId = !Object.prototype.hasOwnProperty.call(latestEpisodes, showId) ? null : latestEpisodes[showId];

  if (!episodeId) {
    return null;
  }

  return !Object.prototype.hasOwnProperty.call(episodes, episodeId) ? null : episodes[episodeId];
});

exports.default = getLatestShowEpisode;