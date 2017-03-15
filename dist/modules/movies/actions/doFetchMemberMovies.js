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
  state: 0,
  start: 0,
  limit: 50,
  order: 'alphabetical'
};

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
      props = _objectWithoutProperties(_ref, ['memberId']);

  return function (dispatch) {
    return _ApiFetch2.default.get('movies/member', _extends({
      id: memberId
    }, defaultProps, props)).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_MEMBER_MOVIES,
        payload: _extends({}, props, {
          memberId: memberId,
          movies: response.movies
        })
      });
    });
  };
};

exports.default = doFetchMemberMovies;