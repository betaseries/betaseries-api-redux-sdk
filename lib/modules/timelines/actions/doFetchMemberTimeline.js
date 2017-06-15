import constants from '../constants';
import BetaSeries from '../../../betaseries';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  nbpp: 20
};

/**
 * Retrieve events
 *
 * **Dispatch**: `FETCH_MEMBER_TIMELINE`
 *
 * @alias module:Timelines.doFetchMemberTimeline
 * @category actions
 *
 * @example
 * BetaSeries.getAction('timelines', 'doFetchMemberTimeline')({
 *   nbpp: 32,
 *   since_id: 153465413,
 *   types: ['markas'],
 * });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Number}  [obj.memberId]    Member ID (optional)
 * @param {Number}  [obj.nbpp]        Limit number of events (default `20`)
 * @param {Number}  [obj.since_id]    ID of event. I will received previous events (optional)
 * @param {Number}  [obj.last_id]     ID of event. I will received following events  (optional)
 * @param {Array}   [obj.types]       Types of events separated by a comma (optional)
 *
 * @returns {Promise}
 */
const doFetchMemberTimeline = (
  { memberId = BetaSeries.user.userId, ...props } = {}
) =>
  dispatch =>
    ApiFetch.get('timeline/member', {
      id: memberId,
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_MEMBER_TIMELINE,
        payload: {
          ...props,
          memberId,
          events: response.events
        }
      }));

export default doFetchMemberTimeline;
