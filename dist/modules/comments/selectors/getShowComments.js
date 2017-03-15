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
 * Select show comments from state
 *
 * @alias module:Comments.getShowComments
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('comments', 'getShowComments')(state, {
 *     showId: props.showId
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.showId]      Show ID
 *
 * @returns {Array}                   List of comments or `undefined`
 */
var getShowComments = (0, _reselect.createSelector)([commons.getComments, commons.getShowComments, commons.getShowId], function (comments, showComments, showId) {
  var commentIds = !Object.prototype.hasOwnProperty.call(showComments, showId) ? null : showComments[showId];

  if (!commentIds) {
    return undefined;
  }

  var commentsFiltered = (0, _filter3.default)(comments, function (comment) {
    return commentIds.indexOf(comment.id) !== -1;
  });

  return commentsFiltered.length === 0 ? undefined : commentsFiltered;
});

exports.default = getShowComments;