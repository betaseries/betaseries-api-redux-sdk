/**
 * Retrieve episodes subtitles from state
 */
export const getEpisodesSubtitles = state => state.subtitlesEpisodes;

/**
 * Retrieve show subtitles from state
 */
export const getShowsSubtitles = state => state.subtitlesShows;

/**
 * Retrieve show ID from parameters
 */
export const getShowId = (state, { showId }) => parseInt(showId, 10);

/**
 * Retrieve season from parameters
 */
export const getSeason = (state, { season }) => season || undefined;

/**
 * Retrieve episode ID from parameters
 */
export const getEpisodeId = (state, { episodeId }) => parseInt(episodeId, 10);

/**
 * Retrieve parameters
 */
export const getExtraProps = (state, props) => props;
