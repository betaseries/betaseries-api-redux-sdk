import constants from '../constants';

/**
 * Clear conversations
 *
 * **Dispatch**: `CLEAR_CONVERSATIONS_LIST`
 *
 * @alias module:Conversations.doClearConversationsList
 * @category actions
 *
 * @example
 * BetaSeries.getAction('conversations', 'doClearConversationsList')();
 *
 *
 * @returns {Promise}
 */
const doClearConversationsList = () =>
  dispatch =>
    Promise.resolve().then(() =>
      dispatch({
        type: constants.CLEAR_CONVERSATIONS_LIST
      }));

export default doClearConversationsList;
