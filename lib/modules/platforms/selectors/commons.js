import BetaSeries from '../../../betaseries';

/**
 * Retrieve platforms from state
 */
export const getPlatforms = state => state.platforms;

/**
 * Retrieve services from state
 */
export const getServices = state => state.platformsServices;

/**
 * Retrieve platform ID from state
 */
export const getPlatformId = (state, { platformId }) =>
  parseInt(platformId, 10);

/**
 * Retrieve User ID from parameters
 */
export const getUserId = (state, { userId = BetaSeries.user.userId } = {}) =>
  parseInt(userId, 10);

/**
 * Retrieve platform country code from state
 */
export const getPlatformCountry = (state, { country }) => country;
