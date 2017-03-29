import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import * as commons from './commons';

/**
 * Select event comments from state
 *
 * @alias module:Comments.getEventComments
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('comments', 'getEventComments')(state, {
 *     eventId: props.eventId
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.eventId]     Event ID
 *
 * @returns {Array}                   List of comments or `undefined`
 */
const getEventComments = createSelector(
  [commons.getComments, commons.getEventComments, commons.getEventId],
  (comments, eventComments, eventId) => {
    const commentIds = !Object.prototype.hasOwnProperty.call(
      eventComments,
      eventId
    )
      ? null
      : eventComments[eventId];

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

export default getEventComments;
