/**
 * Retrieve user from state
 */
export const getUser = state => state.membersUser;

/**
 * Retrieve member from state
 */
export const getMembers = state => state.members;

/**
 * Retrieve member ID from parameters
 */
export const getMemberId = (state, { memberId }) => parseInt(memberId, 10);
