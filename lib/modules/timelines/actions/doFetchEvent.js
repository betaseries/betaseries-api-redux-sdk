import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve event
 *
 * **Dispatch**: `FETCH_TIMELINE_EVENT`
 *
 * @alias module:Timelines.doFetchEvent
 * @category actions
 *
 * @example
 * BetaSeries.getAction('timelines', 'doFetchEvent')({
 *   eventId: 32,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.eventId]     ID of event
 *
 * @returns {Promise}
 */
const doFetchEvent = ({ eventId }) =>
  dispatch =>
    ApiFetch.get('timeline/event', {
      id: eventId
    }).then(response =>
      dispatch({
        type: constants.FETCH_TIMELINE_EVENT,
        payload: {
          eventId,
          event: response.event
        }
      }));

export default doFetchEvent;
