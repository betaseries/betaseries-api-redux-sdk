import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  nbpp: 20
};

/**
 * Retrieve episode
 *
 * **Dispatch**: `FETCH_FRIENDS_TIMELINE`
 *
 * @alias module:Timelines.doFetchFriendsTimeline
 * @category actions
 *
 * @example
 * BetaSeries.getAction('timelines', 'doFetchFriendsTimeline')({
 *   nbpp: 32,
 *   since_id: 153465413,
 *   types: ['markas'],
 * });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.nbpp]        Limit number of events (default `20`)
 * @param {Number}  [obj.since_id]    ID of event. I will received previous events (optional)
 * @param {Number}  [obj.last_id]     ID of event. I will received following events  (optional)
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
