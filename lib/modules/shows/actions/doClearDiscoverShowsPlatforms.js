import constants from '../constants';

/**
 * Clear discover shows platforms
 *
 * **Dispatch**: `CLEAR_DISCOVER_SHOWS_PLATFORMS`
 *
  * @alias module:Shows.doClearDiscoverShowsPlatforms
 * @category actions
 *
 * @example
  * BetaSeries.getAction('shows', 'doClearDiscoverShowsPlatforms')();
 *
 * @returns {Promise}
 */
const doClearDiscoverShowsPlatforms = () =>
  dispatch =>
    dispatch({
      type: constants.CLEAR_DISCOVER_SHOWS_PLATFORMS
    });

export default doClearDiscoverShowsPlatforms;
