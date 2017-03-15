import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import * as commons from './commons';

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
const getShowComments = createSelector(
  [commons.getComments, commons.getShowComments, commons.getShowId],
  (comments, showComments, showId) => {
    const commentIds = !Object.prototype.hasOwnProperty.call(showComments, showId) ? null : (
      showComments[showId]
    );

    if (!commentIds) {
      return undefined;
    }

    const commentsFiltered = _filter(comments, comment => commentIds.indexOf(comment.id) !== -1);

    return commentsFiltered.length === 0 ? undefined : commentsFiltered;
  },
);

export default getShowComments;
