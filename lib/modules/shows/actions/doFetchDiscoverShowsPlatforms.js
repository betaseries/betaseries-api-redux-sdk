import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  start: 0
};

/**
 * Retrieve discover shows platforms
 *
 * **Dispatch**: `FETCH_DISCOVER_SHOWS_PLATFORMS`
 *
 * @alias module:Shows.doFetchDiscoverShowsPlatforms
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchDiscoverShowsPlatforms')();
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.offset]    Start number of show list (default `0`)
 * @param {Number}  [obj.limit]     Limit number of shows
 *
 * @returns {Promise}
 */
const doFetchDiscoverShowsPlatforms = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('shows/discover_platforms', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_DISCOVER_SHOWS_PLATFORMS,
        payload: {
          ...props,
          shows: response.shows
        }
      }));

export default doFetchDiscoverShowsPlatforms;
