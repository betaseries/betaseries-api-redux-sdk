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
 * @param {String}  [obj.order]     Chronological order of return, `alphabetical`, `popularity` or `followers`
 * @param {Number}  [obj.since]     Display shows from this date
 * @param {Number}  [obj.starting]  Display shows starting with query
 * @param {Number}  [obj.start]     Start number of show list (default `0`)
 * @param {Number}  [obj.limit]     Limit number of shows
 *
 * @returns {Promise}
 */
const doFetchDiscoverShows = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('shows/list', {
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
