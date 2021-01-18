import constants from '../constants';

/**
 * Clear search movie
 *
 * **Dispatch**: `CLEAR_SEARCH_MOVIES`
 *
 * @alias module:Searchs.doClearSearchMovies
 * @category actions
 *
 * @example
 * BetaSeries.getAction('searchs', 'doClearSearchMovies')();
 *
 * @returns {Promise}
 */
const doClearSearchMovies = () =>
  dispatch =>
    Promise.resolve().then(() =>
      dispatch({
        type: constants.CLEAR_SEARCH_MOVIES
      }));

export default doClearSearchMovies;
