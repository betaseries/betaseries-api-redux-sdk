import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  limit: 20
};

/**
 * Retrieve episode
 *
 * **Dispatch**: `FETCH_EPISODE`
 *
 * @alias module:Timeline.doFetchFriendsTimeline
 * @category actions
 *
 * @example
 * BetaSeries.getAction('timelines', 'doFetchFriendsTimeline')({
 *   limit: 20,
 *   sinceId: 153465413,
 *   types: ['markas'],
 * });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.limit]       Limit number of events (default `20`)
 * @param {Number}  [obj.sinceId]     ID of last event received (optional)
 * @param {Array}   [obj.types]       Types of events separated by a comma (optional)
 *
 * @returns {Promise}
 */
const doFetchFriendsTimeline = (props = {}) =>
  dispatch =>
    ApiFetch.get('timeline/friends', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_FRIENDS_TIMELINE,
        payload: {
          ...props,
          events: response.events
        }
      }));

export default doFetchFriendsTimeline;
