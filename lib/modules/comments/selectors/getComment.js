import { createSelector } from 'reselect';
import * as commons from './commons';

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
 * @returns {Object}                  Comment element or `undefined`
 */
const getComment = createSelector(
  [commons.getComments, commons.getCommentId],
  (comments, commentId) =>
    !Object.prototype.hasOwnProperty.call(comments, commentId)
      ? undefined
      : comments[commentId]
);

export default getComment;
