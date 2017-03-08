'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reselect = require('reselect');

var _commons = require('./commons');

var commons = _interopRequireWildcard(_commons);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Select comment from state
 *
 * @alias module:Comments.getComment
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('comments', 'getComment')(state, { commentId: props.commentId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.commentId]   Comment ID
 *
 * @returns {Object}                  Comment element or `null`
 */
var getComment = (0, _reselect.createSelector)([commons.getComments, commons.getCommentId], function (comments, commentId) {
  return !Object.prototype.hasOwnProperty.call(comments, commentId) ? null : comments[commentId];
});

exports.default = getComment;