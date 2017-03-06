'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _ApiFetch = require('../../../utils/fetch/ApiFetch');

var _ApiFetch2 = _interopRequireDefault(_ApiFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve movies of the member
 *
 * **Dispatch**: `FETCH_MEMBER_MOVIES`
 *
 * @alias module:Movies.doFetchMemberMovies
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doFetchMemberMovies')({ memberId: 1 });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.memberId]    Member ID
 * @param {Number}  [obj.state]       State of movie
 *   (`0` = to see, `1` = seen, `2` = doesn't want to see (`0` by default))
 * @param {Number}  [obj.start]       Used for paginate (`0` by default)
 * @param {Number}  [obj.limit]       Used for paginate (optional)
 * @param {String}  [obj.order]       Sort order (`alphabetical`, `popularity` (optional))
 *
 * @returns {Promise}
 */
var doFetchMemberMovies = function doFetchMemberMovies(_ref) {
  var memberId = _ref.memberId,
      _ref$state = _ref.state,
      state = _ref$state === undefined ? 0 : _ref$state,
      _ref$start = _ref.start,
      start = _ref$start === undefined ? 0 : _ref$start,
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 50 : _ref$limit,
      _ref$order = _ref.order,
      order = _ref$order === undefined ? 'alphabetical' : _ref$order;
  return function (dispatch) {
    return _ApiFetch2.default.get('movies/member', { id: memberId, state: state, start: start, limit: limit, order: order }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_MEMBER_MOVIES,
        payload: {
          memberId: memberId,
          movies: response.movies
        }
      });
    });
  };
};

exports.default = doFetchMemberMovies;