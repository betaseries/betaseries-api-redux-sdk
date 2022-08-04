import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve tags for the movies
 *
 * **Dispatch**: `FETCH_MOVIE_TAGS_LIST`
 *
 * @alias module:Movies.doFetchTagsList
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doFetchTagsList')();
 *
 * @param {Object}  [obj]    Accept the following:
 *
 * @returns {Promise}
 */
const doFetchTagsList = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('tags/list', { type: 'movie', ...props }).then(response =>
      dispatch({
        type: constants.FETCH_MOVIE_TAGS_LIST,
        payload: {
          ...props,
          tags: response.tags || []
        }
      }));

export default doFetchTagsList;
