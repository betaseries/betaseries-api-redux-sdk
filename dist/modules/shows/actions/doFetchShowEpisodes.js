'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _ApiFetch = require('../../../utils/fetch/ApiFetch');

var _ApiFetch2 = _interopRequireDefault(_ApiFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Retrieve episodes of the show
 *
 * **Dispatch**: `FETCH_SHOW_EPISODES`
 *
 * @alias module:Shows.doFetchShowEpisodes
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShowEpisodes')({ showId: 1275, season: 1 });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.showId]    Show ID
 * @param {Number}  [obj.season]    Season number (optional)
 * @param {Number}  [obj.episode]   Episode Number (optional)
 * @param {Bool}    [obj.subtitles] Displays subtitles and information (optional)
 *
 * @returns {Promise}
 */
var doFetchShowEpisodes = function doFetchShowEpisodes(_ref) {
  var showId = _ref.showId,
      props = _objectWithoutProperties(_ref, ['showId']);

  return function (dispatch) {
    return _ApiFetch2.default.get('shows/episodes', _extends({ id: showId }, props)).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_SHOW_EPISODES,
        payload: _extends({}, props, {
          showId: showId,
          episodes: response.episodes
        })
      });
    });
  };
};

exports.default = doFetchShowEpisodes;