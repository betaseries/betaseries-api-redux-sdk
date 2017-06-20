import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import _orderBy from 'lodash/orderBy';
import * as commons from './commons';

/**
 * Select episode comments from state
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
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.episodeId]   Episode ID
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 *
 * @returns {Array}                   List of comments or `undefined`
 */
const getEpisodeComments = createSelector(
  [
    commons.getComments,
    commons.getEpisodeComments,
    commons.getEpisodeId,
    commons.getOrder
  ],
  (comments, episodeComments, episodeId, order) => {
    const commentIds = !Object.prototype.hasOwnProperty.call(
      episodeComments,
      episodeId
    )
      ? null
      : episodeComments[episodeId];

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

export default getEpisodeComments;
