/**
 * Retrieve Home Top 10 shows from state
 */
export const getTop = state => state.homeTop;

/**
 * Retrieve Home trailers from state
 */
export const getTrailers = state => state.homeTrailers;

/**
 * Retrieve Home collections from state
 */
export const getCollections = state => state.homeCollections;

/**
 * Retrieve Home recommendation shows from state
 */
export const getReco = state => state.homeReco;

/**
 * Retrieve Home popular shows for the last 30 days
 */
export const getPopular = state => state.homePopular;

/**
 * Retrieve Home popular platform shows
 */
export const getPopularPlatform = state => state.homePopularPlatform;

/**
 * Retrieve Home blocks from state
 */
export const getBlocks = state => state.homeBlocks;

/**
 * Retrieve Home popular articles from state
 */
export const getArticles = state => state.homeArticles;

/**
 * Retrieve episode ID from parameters
 */
export const getPlatformId = (state, { platformId }) =>
  parseInt(platformId, 10);
