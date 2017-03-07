/**
 * Retrieve shows from state
 */
export const getShows = state => state.shows;

/**
 * Retrieve episodes from state
 */
export const getEpisodes = state => state.showsEpisodes;

/**
 * Retrieve similar shows from state
 */
export const getSimilarShows = state => state.showsSimilars;

/**
 * Retrieve show ID from parameters
 */
export const getShowId = (state, { showId }) => parseInt(showId, 10);

/**
 * Retrieve episode ID from parameters
 */
export const getEpisodeId = (state, { episodeId }) => parseInt(episodeId, 10);

/**
 * Retrieve parameters
 */
export const getExtraProps = (state, props) => props;
