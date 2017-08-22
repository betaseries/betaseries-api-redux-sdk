import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve show
 *
 * **Dispatch**: `FETCH_PLANNING_TIMELINE`
 *
 * @alias module:Planning.doFetchTimeline
 * @category actions
 *
 * @example
 * BetaSeries.getAction('planning', 'doFetchTimeline')({
 *   date: '2017-07-17',
 *   selection: 'around',
 * });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {String}  [obj.date]      The selection date reference (format `Y-m-d`)
 * @param {String}  [obj.selection] The selection type (`before`, `around` or `after`)
 *
 * @returns {Promise}
 */
const doFetchTimeline = props =>
  dispatch =>
    ApiFetch.get('planning/timeline', props).then(response =>
      dispatch({
        type: constants.FETCH_PLANNING_TIMELINE,
        payload: {
          days: response.days
        }
      }));

export default doFetchTimeline;
