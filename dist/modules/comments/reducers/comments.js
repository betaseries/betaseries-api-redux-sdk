'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = commentsReducer;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _arrayToHash = require('../../../utils/func/arrayToHash');

var _arrayToHash2 = _interopRequireDefault(_arrayToHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

/**
 * List of comments
 *
 * **Actions listened**:
 *
 *  * `FETCH_EPISODE_COMMENTS`
 *  * `FETCH_SHOW_COMMENTS`
 *  * `FETCH_COMMENT`
 *
 * @alias module:Comments.comments
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('comments', 'comments');
 *
 * // state example
 * {
 *   '384144': {      // comment ID
 *     id: 384144,    // comment element
 *     ...comments,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
function commentsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.FETCH_EPISODE_COMMENTS:
    case _constants2.default.FETCH_SHOW_COMMENTS:
      return _extends({}, state, (0, _arrayToHash2.default)(action.payload.comments));

    case _constants2.default.FETCH_COMMENT:
      return _extends({}, state, (0, _arrayToHash2.default)([action.payload.comment]));

    default:
      return state;
  }
}