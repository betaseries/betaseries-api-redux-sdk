/**
 * Retrieve platforms from state
 */
export const getPlatforms = state => state.platforms;

/**
 * Retrieve platform ID from state
 */
export const getPlatformId = (state, { platformId }) =>
  parseInt(platformId, 10);

/**
 * Retrieve platform country code from state
 */
export const getPlatformCountry = (state, { country }) => country;
