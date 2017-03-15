'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

var _find2 = require('lodash/find');

var _find3 = _interopRequireDefault(_find2);

var _commons = require('./commons');

var commons = _interopRequireWildcard(_commons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Select episode by code and show from state
 *
 * @alias module:Shows.getShowEpisodeByCode
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('shows', 'getShowEpisodeByCode')(state, {
 *     showId: props.showId,
 *     code: 'SO4E01',
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.showId]      Show ID
 * @param {Object}  [obj.code]        Episode code
 *
 * @returns {Object}                  Episode element or `undefined`
 */
var getShowEpisodeByCode = (0, _reselect.createSelector)([commons.getEpisodes, commons.getShowId, commons.getExtraProps], function (episodes, showId, extraProps) {
  return (0, _find3.default)(episodes, function (episode) {
    return episode.code === extraProps.code && episode.show.id === showId;
  }) || undefined;
});

exports.default = getShowEpisodeByCode;