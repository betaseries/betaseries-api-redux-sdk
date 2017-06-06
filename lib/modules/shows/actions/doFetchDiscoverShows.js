import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  start: 0
};

/**
 * Retrieve discover shows
 *
 * **Dispatch**: `FETCH_DISCOVER_SHOWS`
 *
 * @alias module:Shows.doFetchDiscoverShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchDiscoverShows')();
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.offset]    Start number of show list (default `0`)
 * @param {Number}  [obj.limit]     Limit number of shows
 *
 * @returns {Promise}
 */
const doFetchDiscoverShows = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('shows/discover', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_DISCOVER_SHOWS,
        payload: {
          ...props,
          shows: response.shows
        }
      }));

export default doFetchDiscoverShows;
