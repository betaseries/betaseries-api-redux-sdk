import constants from '../constants';

const initialState = [];

/**
 * List of conversations
 *
 * **Actions listened**:
 *
 *  * `FETCH_CONVERSATIONS_LIST`
 *  * `CLEAR_CONVERSATIONS_LIST`
 *
 * @alias module:Conversations.conversations
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('conversations', 'conversations').conversations;
 *
 * // state example
 * [
 *   ...conversations               // list of conversations
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function conversationsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.CLEAR_CONVERSATIONS_LIST:
      return initialState;

    case constants.FETCH_CONVERSATIONS_LIST:
      return [...state, ...action.payload.conversations];

    default:
      return state;
  }
}
