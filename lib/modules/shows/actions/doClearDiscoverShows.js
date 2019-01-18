import constants from '../constants';

/**
 * Clear discover shows
 *
 * **Dispatch**: `CLEAR_DISCOVER_SHOWS`
 *
  * @alias module:Shows.doClearDiscoverShows
 * @category actions
 *
 * @example
  * BetaSeries.getAction('shows', 'doClearDiscoverShows')();
 *
 * @returns {Promise}
 */
const doClearDiscoverShows = () =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_DISCOVER_SHOWS
    });

export default doClearDiscoverShows;
