import constants from '../constants';

const initialState = [];

/**
 * List of updates
 *
 * **Actions listened**:
 *
 *  * `UPDATE`
 *
 * @alias module:Reports.updates
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('reports', 'updates').reportsUpdates;
 *
 * // state value example
 * [
 *   {
 *     id: 12,    // update element
 *     ...update,
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
    case constants.UPDATE:
      return [...state, action.payload.response.update];

    default:
      return state;
  }
}
