import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  nbpp: 20
};

/**
 * Retrieve events
 *
 * **Dispatch**: `FETCH_SHOW_TIMELINE`
 *
 * @alias module:Timelines.doFetchShowTimeline
 * @category actions
 *
 * @example
 * BetaSeries.getAction('timelines', 'doFetchShowTimeline')({
 *   nbpp: 32,
 *   since_id: 153465413,
 * });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.id]          Show ID
 * @param {Number}  [obj.nbpp]        Limit number of events (default `20`)
 * @param {Number}  [obj.since_id]    ID of event. I will received previous events (optional)
 * @param {Number}  [obj.last_id]     ID of event. I will received following events  (optional)
 *
 * @returns {Promise}
 */
const doFetchShowTimeline = ({ showId, ...props }) =>
  dispatch =>
    ApiFetch.get('timeline/show', {
      id: showId,
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_SHOW_TIMELINE,
        payload: {
          ...props,
          showId,
          events: response.events
        }
      }));

export default doFetchShowTimeline;
