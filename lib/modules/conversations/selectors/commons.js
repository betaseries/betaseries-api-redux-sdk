/**
 * Retrieve conversations from state
 */
export const getConversations = state => state.conversations;

/**
 * Retrieve conversations detail from state
 */
export const getConversationsDetail = state => state.detail;

/**
 * Retrieve conversation ID from parameters
 */
export const getConversationId = (state, { conversationId }) =>
  parseInt(conversationId, 10);

/**
 * Retrieve order from parameters
 */
export const getOrder = (state, { order }) => order || 'asc';
