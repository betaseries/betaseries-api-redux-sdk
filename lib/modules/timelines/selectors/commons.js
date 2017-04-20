/**
 * Retrieve events timeline events from state
 */
export const getEventsTimeline = state => state.timelinesEvents;

/**
 * Retrieve friends timeline events from state
 */
export const getFriendsTimeline = state => state.timelinesFriends;

/**
 * Retrieve feed timeline events from state
 */
export const getFeedTimeline = state => state.timelinesFeed;

/**
 * Retrieve event ID from state
 */
export const getEventId = (state, { eventId }) => parseInt(eventId, 10);
