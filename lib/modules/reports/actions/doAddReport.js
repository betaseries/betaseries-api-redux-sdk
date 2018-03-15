import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add a report for a media
 *
 * **Dispatch**: ``
 *
 * @alias module:Polls.doAddReport
 * @category actions
 *
 * @example
 * BetaSeries.getAction('reports', 'doAddReport')({
 *   targetId: 120,
 *   type: 'show',
 *   reason: 'foo',
 * });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.targetId]  Media ID for the report
 * @param {String}  [obj.type]      Type of media: show or film
 * @param {String}  [obj.reason]    Reason of report
 *
 * @returns {Promise}
 */
const doAddReport = ({ targetId, type, reason }) =>
  dispatch =>
    ApiFetch.post('reports/report', {
      target_id: targetId,
      type,
      reason
    }).then(response =>
      dispatch({
        type: constants.REPORT,
        payload: {
          targetId,
          type,
          reason,
          response
        }
      }));

export default doAddReport;
