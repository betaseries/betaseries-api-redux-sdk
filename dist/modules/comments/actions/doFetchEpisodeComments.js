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

var defaultProps = {
  order: 'asc',
  replies: 1
};

/**
 * Retrieve comment of the episode
 *
 * **Dispatch**: `FETCH_EPISODE_COMMENTS`
 *
 * @alias module:Comments.doFetchEpisodeComments
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doFetchEpisodeComments')({ episodeId: 438 });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.episodeId]   Comment ID
 * @param {Number}  [obj.nbpp]        Number of comments per page
 * @param {Number}  [obj.since_id]    ID of last comment received (optional)
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 * @param {Number}  [obj.replies]     Include comments reply (`1` or `0`, default `1`)
 *
 * @returns {Promise}
 */
var doFetchEpisodeComments = function doFetchEpisodeComments(_ref) {
  var episodeId = _ref.episodeId,
      props = _objectWithoutProperties(_ref, ['episodeId']);

  return function (dispatch) {
    return _ApiFetch2.default.get('comments/comments', _extends({ id: episodeId }, defaultProps, props, { type: 'episode' })).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_EPISODE_COMMENTS,
        payload: _extends({}, props, {
          episodeId: episodeId,
          comments: response.comments
        })
      });
    });
  };
};

exports.default = doFetchEpisodeComments;