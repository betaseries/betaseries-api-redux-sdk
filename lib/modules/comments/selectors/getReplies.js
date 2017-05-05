import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import _orderBy from 'lodash/orderBy';
import * as commons from './commons';

/**
 * Select comment replies from state
 *
 * @alias module:Comments.getReplies
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('comments', 'getReplies')(state, {
 *     commentId: props.commentId
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.commentId]   Comment ID
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 *
 * @returns {Array}                   List of comments or `undefined`
 */
const getReplies = createSelector(
  [commons.getComments, commons.getCommentId, commons.getOrder],
  (comments, commentId, order) => {
    const parent = !Object.prototype.hasOwnProperty.call(comments, commentId)
      ? null
      : comments[commentId];

    if (!parent) {
      return undefined;
    }

    const repliesFiltered = _filter(
      comments,
      comment =>
        parseInt(comment.in_reply_to, 10) === parseInt(parent.inner_id, 10) &&
        parseInt(comment.ref_id, 10) === parseInt(parent.ref_id, 10)
    );

    return repliesFiltered.length === 0
      ? undefined
      : _orderBy(repliesFiltered, 'id', order);
  }
);

export default getReplies;
