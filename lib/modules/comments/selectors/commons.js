/**
 * Retrieve comments from state
 */
export const getComments = state => state.comments;

/**
 * Retrieve show comments from state
 */
export const getShowComments = state => state.commentsShows;

/**
 * Retrieve episode comments from state
 */
export const getEpisodeComments = state => state.commentsEpisodes;

/**
 * Retrieve event comments from state
 */
export const getEventComments = state => state.commentsEvents;

/**
 * Retrieve poll comments from state
 */
export const getPollComments = state => state.commentsPolls;

/**
 * Retrieve article comments from state
 */
export const getArticleComments = state => state.commentsArticles;

/**
 * Retrieve movie comments from state
 */
export const getMovieComments = state => state.commentsMovies;

/**
 * Retrieve member comments from state
 */
export const getMemberComments = state => state.commentsMembers;

/**
 * Retrieve comment ID from parameters
 */
export const getCommentId = (state, { commentId }) => parseInt(commentId, 10);

/**
 * Retrieve show ID from parameters
 */
export const getShowId = (state, { showId }) => parseInt(showId, 10);

/**
 * Retrieve event ID from parameters
 */
export const getEventId = (state, { eventId }) => parseInt(eventId, 10);

/**
 * Retrieve poll ID from parameters
 */
export const getPollId = (state, { pollId }) => parseInt(pollId, 10);

/**
 * Retrieve article ID from parameters
 */
export const getArticleId = (state, { articleId }) => parseInt(articleId, 10);

/**
 * Retrieve episode ID from parameters
 */
export const getEpisodeId = (state, { episodeId }) => parseInt(episodeId, 10);

/**
 * Retrieve member ID from parameters
 */
export const getMemberId = (state, { memberId }) => parseInt(memberId, 10);

/**
 * Retrieve movie ID from parameters
 */
export const getMovieId = (state, { movieId }) => parseInt(movieId, 10);

/**
 * Retrieve order from parameters
 */
export const getOrder = (state, { order }) => order || 'asc';
