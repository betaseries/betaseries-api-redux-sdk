import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import _orderBy from 'lodash/orderBy';
import * as commons from './commons';

/**
 * Select member comments from state
 *
 * @alias module:Comments.getMemberComments
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('comments', 'getMemberComments')(state, {
 *     memberId: props.memberId
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.memberId]    Member ID
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 *
 * @returns {Array}                   List of comments or `undefined`
 */
const getMemberComments = createSelector(
  [
    commons.getComments,
    commons.getMemberComments,
    commons.getMemberId,
    commons.getOrder
  ],
  (comments, memberComments, memberId, order) => {
    const commentIds = !Object.prototype.hasOwnProperty.call(
      memberComments,
      memberId
    )
      ? null
      : memberComments[memberId];

    if (!commentIds) {
      return undefined;
    }

    const commentsFiltered = _filter(
      comments,
      comment => commentIds.indexOf(comment.id) !== -1
    );

    return commentsFiltered.length === 0
      ? undefined
      : _orderBy(commentsFiltered, 'id', order);
  }
);

export default getMemberComments;
