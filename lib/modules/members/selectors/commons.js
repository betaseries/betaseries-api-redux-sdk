import BetaSeries from '../../../betaseries';

/**
 * Retrieve user from state
 */
export const getUser = () => BetaSeries.user.userId;

/**
 * Retrieve member from state
 */
export const getMembers = state => state.members;

/**
 * Retrieve member notifications from state
 */
export const getNotifications = state => state.membersNotifications;

/**
 * Retrieve member ID from parameters
 */
export const getMemberId = (
  state,
  { memberId = BetaSeries.user.userId } = {}
) => parseInt(memberId, 10);

/**
 * Retrieve User ID from parameters
 */
export const getUserId = (state, { userId = BetaSeries.user.userId } = {}) =>
  parseInt(userId, 10);
