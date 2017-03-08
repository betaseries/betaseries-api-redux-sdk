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
 * @returns {Array}                   List of comments
 */
const getShowComments = createSelector(
  [commons.getComments, commons.getShowComments, commons.getShowId],
  (comments, showComments, showId) => {
    const commentIds = !Object.prototype.hasOwnProperty.call(showComments, showId) ? null : (
      showComments[showId]
    );

    if (!commentIds) {
      return null;
    }

    const commentsFiltered = _filter(comments, comment => commentIds.indexOf(comment.id) !== -1);

    if (commentsFiltered.length === 0) {
      return null;
    }

    return commentsFiltered;
  },
);

export default getShowComments;
