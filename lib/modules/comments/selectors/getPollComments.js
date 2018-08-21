import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import * as commons from './commons';

/**
 * Select poll comments from state
 *
 * @alias module:Comments.getPollComments
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('comments', 'getPollComments')(state, {
 *     pollId: props.pollId
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.pollId]      Poll ID
 *
 * @returns {Array}                   List of comments or `undefined`
 */
const getPollComments = createSelector(
  [commons.getComments, commons.getPollComments, commons.getPollId],
  (comments, pollComments, pollId) => {
    const commentIds = !Object.prototype.hasOwnProperty.call(
      pollComments,
      pollId
    )
      ? null
      : pollComments[pollId];

    if (!commentIds) {
      return undefined;
    }

    const commentsFiltered = _filter(
      comments,
      comment => commentIds.indexOf(comment.id) !== -1
    );

    return commentsFiltered.length === 0 ? undefined : commentsFiltered;
  }
);

export default getPollComments;
