import _trim from 'lodash/trim';
import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Search all type of element by query
 *
 * **Dispatch**: `SEARCH_ALL`
 *
 * @alias module:Searchs.doSearchAll
 * @category actions
 *
 * @example
 * BetaSeries.getAction('searchs', 'doSearchAll')({ query: 'alk' });
 *
 * @param {Object}  [obj]         Accept the folling:
 * @param {Number}  [obj.query]   Query search
 *
 * @returns {Promise}
 */
const doSearchAll = ({ query }) =>
  dispatch => {
    const queryTrimed = _trim(query).toLowerCase();

    return ApiFetch.get('search/all', {
      query: queryTrimed
    }).then(response =>
      dispatch({
        type: constants.SEARCH_ALL,
        payload: {
          query,
          queryTrimed,
          shows: response.shows,
          movies: response.movies,
          users: response.users
        }
      }));
  };

export default doSearchAll;
