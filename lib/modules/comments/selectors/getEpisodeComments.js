import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import * as commons from './commons';

/**
 * Select show comments from state
 *
 * @alias module:Comments.getEpisodeComments
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('comments', 'getEpisodeComments')(state, {
 *     episodeId: props.episodeId
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the folling:
 * @param {Object}  [obj.episodeId]   Episode ID
 *
 * @returns {Array}                   List of comments or `null`
 */
const getEpisodeComments = createSelector(
  [commons.getComments, commons.getEpisodeComments, commons.getEpisodeId],
  (comments, episodeComments, episodeId) => {
    const commentIds = !Object.prototype.hasOwnProperty.call(episodeComments, episodeId) ? null : (
      episodeComments[episodeId]
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

export default getEpisodeComments;
