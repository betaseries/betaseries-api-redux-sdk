import BetaSeries from '../../../betaseries';

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
 * Retrieve latestEpisode shows from state
 */
export const getLatestEpisodes = state => state.showsLatestEpisodes;

/**
 * Retrieve latestEpisode shows from state
 */
export const getMemberEpisodesToSee = state => state.showsMembersEpisodesToSee;

/**
 * Retrieve discover shows from state
 */
export const getDiscoverShows = state => state.showsDiscover;

/**
 * Retrieve member shows from state
 */
export const getMembersShows = state => state.showsMembers;

/**
 * Retrieve characters shows from state
 */
export const getCharacters = state => state.showsCharacters;

/**
 * Retrieve episodes subtitles from state
 */
export const getEpisodesSubtitles = state => state.showsEpisodesSubtitles;

/**
 * Retrieve member ID from parameters
 */
export const getMemberId = (
  state,
  { memberId = BetaSeries.user.userId } = {}
) => parseInt(memberId, 10);

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
