import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Get conversations list from state
 *
 * @alias module:Conversations.getConversationsList
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('conversations', 'getConversationsList')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Object}                  List of conversations or empty array
 */
const getConversationsList = createSelector(
  [commons.getConversations],
  conv => conv
);

export default getConversationsList;
