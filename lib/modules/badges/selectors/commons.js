/**
 * Retrieve shows from state
 */
export const getBadges = state => state.badges;
/**
 * Retrieve show ID from parameters
 */
export const getBadgeId = (state, { badgeId }) => parseInt(badgeId, 10);
