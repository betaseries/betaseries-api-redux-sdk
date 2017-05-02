import constants from '../constants';

/**
 * Clear search show
 *
 * **Dispatch**: `CLEAR_SEARCH_ALL`
 *
 * @alias module:Searchs.doClearSearchAll
 * @category actions
 *
 * @example
 * BetaSeries.getAction('searchs', 'doClearSearchAll')();
 *
 * @returns {Promise}
 */
const doClearSearchAll = () =>
  dispatch =>
    Promise.resolve().then(() =>
      dispatch({
        type: constants.CLEAR_SEARCH_ALL
      }));

export default doClearSearchAll;
