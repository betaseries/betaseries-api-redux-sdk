import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve conversations detail
 *
 * **Dispatch**: `FETCH_CONVERSATION_DETAIL`
 *
 * @alias module:Conversations.doFetchConversationsDetail
 * @category actions
 *
 * @example
 * BetaSeries.getAction('conversations', 'doFetchConversationsDetail')({ conversationId: 12, nbpp: 10, page: 1 });
 *
 * @param {Object}  [obj]                Accept the following:
 * @param {Number}  [obj.conversationId] conversation Id
 * @param {Number}  [obj.nbpp]           Number of conversations per page (optional)
 * @param {Number}  [obj.page]           Number of page (optional)
 * @param {String}  [obj.order]          Order of interactions retrieved (asc by default, optional)
 *
 * @returns {Promise}
 */
const doFetchConversationsDetail = ({ conversationId, ...props }) =>
  dispatch =>
    ApiFetch.get('conversations/conversation', {
      id: conversationId,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_CONVERSATION_DETAIL,
        payload: {
          conversationId,
          ...props,
          conversation: response.conversation
        }
      }));

export default doFetchConversationsDetail;
