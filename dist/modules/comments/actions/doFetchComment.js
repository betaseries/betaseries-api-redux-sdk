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
 * Retrieve comment
 *
 * **Dispatch**: `FETCH_COMMENT`
 *
 * @alias module:Comments.doFetchComment
 * @category actions
 *
 * @example
 * BetaSeries.getAction('comments', 'doFetchComment')({ commentId: 438 });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.commentId]   Comment ID
 *
 * @returns {Promise}
 */
var doFetchComment = function doFetchComment(_ref) {
  var commentId = _ref.commentId;
  return function (dispatch) {
    return _ApiFetch2.default.get('comments/comment', { id: commentId }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_COMMENT,
        payload: {
          commentId: commentId,
          comment: response.comment
        }
      });
    });
  };
};

exports.default = doFetchComment;