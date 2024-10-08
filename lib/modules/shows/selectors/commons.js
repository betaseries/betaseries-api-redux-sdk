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
 * Retrieve unrated shows
 */
export const getUnratedShows = state => state.showsUnratedShows;

/**
 * Retrieve discover shows from state
 */
export const getDiscoverShows = state => state.showsDiscover;

/**
 * Retrieve discover platforms shows from state
 */
export const getDiscoverPlatformsShows = state => state.showsDiscoverPlatforms;

/**
 * Retrieve member shows from state
 */
export const getMembersShows = state => state.showsMembers;

/**
 * Retrieve characters shows from state
 */
export const getCharacters = state => state.showsCharacters;

/**
 * Retrieve genres shows from state
 */
export const getGenres = state => state.showsGenres;

/**
 * Retrieve interests genres shows from state
 */
export const getInterestGenres = state => state.showsInterestGenres;

/**
 * Retrieve interests shows from state
 */
export const getInterests = state => state.showsInterests;

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
 * Retrieve tags from state
 */
export const getTags = state => state.showsTags;

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
