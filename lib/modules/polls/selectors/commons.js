/**
 * Retrieve polls from state
 */
export const getPolls = state => state.polls || {};

/**
 * Retrieve poll ID from state
 */
export const getPollId = (state, { pollId }) => parseInt(pollId, 10);
