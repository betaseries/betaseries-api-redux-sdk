/**
 * Retrieve friends timeline events from state
 */
export const getFriendsTimeline = state => state.timelinesFriends;

/**
 * Retrieve event ID from state
 */
export const getEventId = (state, { eventId }) => parseInt(eventId, 10);
