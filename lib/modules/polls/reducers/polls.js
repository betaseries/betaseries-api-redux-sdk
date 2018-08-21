import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of polls
 *
 * **Actions listened**:
 *
 *  * `FETCH_LAST_POLL`
 *  * `FETCH_POLL`
 *  * `FETCH_POLLS`
 *  * `ANSWER_POLL`
 *
 * @alias module:Polls.polls
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('polls', 'polls').polls;
 *
 * // state value example
 * {
 *   '12': {      // poll ID
 *     id: 12,    // poll element
 *     ...poll,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function pollsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_LAST_POLL:
    case constants.FETCH_POLL:
    case constants.ANSWER_POLL:
      return {
        ...state,
        ...arrayToHash([action.payload.poll])
      };

    case constants.FETCH_POLLS:
      return {
        ...state,
        ...arrayToHash(action.payload.polls)
      };

    default:
      return state;
  }
}
