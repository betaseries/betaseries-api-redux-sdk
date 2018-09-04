import constants from '../constants';

const initialState = {};

/**
 * Conversations content
 *
 * **Actions listened**:
 *
 *  * `FETCH_CONVERSATION_DETAIL`
 *
 * @alias module:Conversations.conversations
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('conversations', 'detail').conversationsDetail;
 *
 * // state example
 * {
 *   "12": {
 *     id: 12,
 *     ...conversation,
 *   },
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function conversationsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_CONVERSATION_DETAIL:
      return {
        ...state,
        [action.payload.conversationId]: action.payload.conversation
      };

    default:
      return state;
  }
}
