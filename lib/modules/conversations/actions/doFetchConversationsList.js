import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve conversations list
 *
 * **Dispatch**: `FETCH_CONVERSATIONS_LIST`
 *
 * @alias module:Conversations.doFetchConversationsList
 * @category actions
 *
 * @example
 * BetaSeries.getAction('conversations', 'doFetchConversationsList')({ nbpp: 10, page: 1 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.nbpp]        Number of conversations per page (optional)
 * @param {Number}  [obj.page]        Number of page (optional)
  *
 * @returns {Promise}
 */
const doFetchConversationsList = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('conversations/list', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_CONVERSATIONS_LIST,
        payload: {
          ...props,
          conversations: response.conversations || []
        }
      }));

export default doFetchConversationsList;
