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
 * Select episode by show from state
 *
 * @alias module:Shows.getShowEpisodes
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   episode: BetaSeries.getSelector('shows', 'getShowEpisodes')(state, {
 *     showId: props.showId,
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Array}                   List of episodes element order by code
 */
var getShowEpisodes = (0, _reselect.createSelector)([commons.getEpisodes, commons.getShowId], function (episodes, showId) {
  return (0, _filter3.default)(episodes, function (episode) {
    return episode.show.id === showId;
  }) || null;
});

exports.default = getShowEpisodes;