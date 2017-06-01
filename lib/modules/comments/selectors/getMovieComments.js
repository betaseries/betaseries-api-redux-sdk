import { createSelector } from 'reselect';
import _filter from 'lodash/filter';
import _orderBy from 'lodash/orderBy';
import * as commons from './commons';

/**
 * Select movie comments from state
 *
 * @alias module:Comments.getMovieComments
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('comments', 'getMovieComments')(state, {
 *     movieId: props.movieId
 *   });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.movieId]     Movie ID
 * @param {String}  [obj.order]       Chronological order of return, `desc` or `asc` (default `asc`)
 *
 * @returns {Array}                   List of comments or `undefined`
 */
const getMovieComments = createSelector(
  [
    commons.getComments,
    commons.getMovieComments,
    commons.getMovieId,
    commons.getOrder
  ],
  (comments, movieComments, movieId, order) => {
    const commentIds = !Object.prototype.hasOwnProperty.call(
      movieComments,
      movieId
    )
      ? null
      : movieComments[movieId];

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

export default getMovieComments;
