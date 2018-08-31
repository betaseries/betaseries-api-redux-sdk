import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select conversation detail from state
 *
 * @alias module:Conversations.getConversationDetail
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('conversations', 'getConversationDetail')(state, { conversationId: props.conversationId });
 * });
 *
 * @param {Object}  [state]                Redux state
 * @param {Object}  [obj]                  Accept the following:
 * @param {Object}  [obj.conversationId]   Conversation ID
 *
 * @returns {Object}                       conversation element or `undefined`
 */
const getConversationDetail = createSelector(
  [commons.getConversationsDetail, commons.getConversationId],
  (details, conversationId) =>
    !Object.prototype.hasOwnProperty.call(details, conversationId)
      ? undefined
      : details[conversationId]
);

export default getConversationDetail;
