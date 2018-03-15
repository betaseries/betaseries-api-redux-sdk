import constants from '../constants';

const initialState = [];

/**
 * List of reports
 *
 * **Actions listened**:
 *
 *  * `REPORT`
 *
 * @alias module:Reports.reports
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('reports', 'reports').reports;
 *
 * // state value example
 * [
 *   {
 *     target_id: 12,    // report element
 *     ...report,
 *   },
 *   ...,
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function reportsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.REPORT:
      return [...state, action.payload.response.report];

    default:
      return state;
  }
}
