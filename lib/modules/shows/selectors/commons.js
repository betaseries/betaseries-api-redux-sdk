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
 * Retrieve seasons from state
 */
export const getSeasons = state => state.showsSeasons;

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
 * Retrieve unrated episodes
 */
export const getUnratedEpisodes = state => state.showsUnratedEpisodes;

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
 * Retrieve videos shows from state
 */
export const getVideos = state => state.showsVideos;

/**
 * Retrieve photos shows from state
 */
export const getPhotos = state => state.showsPhotos;

/**
 * Retrieve articles shows from state
 */
export const getArticles = state => state.showsArticles;

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
 * Retrieve show slug url from parameters
 */
export const getShowUrl = (state, { showUrl }) => showUrl || undefined;

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
