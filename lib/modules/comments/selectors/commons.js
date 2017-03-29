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
 * Retrieve episode ID from parameters
 */
export const getEpisodeId = (state, { episodeId }) => parseInt(episodeId, 10);
