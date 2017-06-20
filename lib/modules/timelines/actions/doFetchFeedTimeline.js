import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  nbpp: 20,
  page: 1
};

/**
 * Retrieve episode
 *
 * **Dispatch**: `FETCH_FEED_TIMELINE`
 *
 * @alias module:Timelines.doFetchFeedTimeline
 * @category actions
 *
 * @example
 * BetaSeries.getAction('timelines', 'doFetchFeedTimeline')({
 *   nbpp: 32,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.nbpp]        Limit number of events (default `20`)
 * @param {Number}  [obj.page]        Page number (default `1`)
 *
 * @returns {Promise}
 */
const doFetchFeedTimeline = (props = {}) =>
  dispatch =>
    ApiFetch.get('timeline/feed', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_FEED_TIMELINE,
        payload: {
          ...props,
          events: response.events
        }
      }));

export default doFetchFeedTimeline;
