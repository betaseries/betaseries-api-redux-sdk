import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Search movie by text
 *
 * **Dispatch**: `SEARCH_MOVIES`
 *
 * @alias module:Searchs.doSearchMovies
 * @category actions
 *
 * @example
 * BetaSeries.getAction('searchs', 'doSearchMovies')({ text: 'alking DEA' });
 *
 * @param {Object}  [obj]         Accept the following:
 * see https://www.betaseries.com/api/methodes/search
 *
 * @returns {Promise}
 */
const doSearchMovies = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('search/movies', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.SEARCH_MOVIES,
        payload: {
          ...props,
          movies: response.movies
        }
      }));

export default doSearchMovies;
