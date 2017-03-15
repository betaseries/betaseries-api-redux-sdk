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
 * @alias module:Shows.getEpisode
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('shows', 'getEpisode')(state, { episodeId: props.episodeId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.episodeId]   Episode ID
 *
 * @returns {Object}                  Episode element or `undefined`
 */
var getEpisode = (0, _reselect.createSelector)([commons.getEpisodes, commons.getEpisodeId], function (episodes, episodeId) {
  return !Object.prototype.hasOwnProperty.call(episodes, episodeId) ? undefined : episodes[episodeId];
});

exports.default = getEpisode;