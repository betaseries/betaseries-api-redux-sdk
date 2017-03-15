import constants from '../constants';

/**
 * Clear search show
 *
 * **Dispatch**: `CLEAR_SEARCH_SHOWS`
 *
 * @alias module:Searchs.doClearSearchShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('searchs', 'doClearSearchShows')();
 *
 * @returns {Promise}
 */
const doClearSearchShows = () =>
  dispatch =>
    Promise.resolve().then(() =>
      dispatch({
        type: constants.CLEAR_SEARCH_SHOWS
      }));

export default doClearSearchShows;
