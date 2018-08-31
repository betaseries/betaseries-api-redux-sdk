import { createSelector } from 'reselect';
import _map from 'lodash/map';
import * as commons from './commons';

/**
 * Get conversations unread count from state
 *
 * @alias module:Conversations.getConversationsUnreadCount
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('conversations', 'getConversationsUnreadCount')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Number}                  Count of unread conversations
 */
const getConversationsUnreadCount = createSelector(
  [commons.getConversations],
  (conversations = []) => {
    let unreadCount = 0;
    _map(conversations, conv => {
      if (conv.read === false) {
        unreadCount += 1;
      }

      return conv;
    });

    return unreadCount;
  }
);

export default getConversationsUnreadCount;
