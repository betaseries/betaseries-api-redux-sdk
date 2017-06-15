import BetaSeries from '../../../betaseries';

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
 * Retrieve members timeline events from state
 */
export const getMembersTimeline = state => state.timelinesMembers;

/**
 * Retrieve shows timeline events from state
 */
export const getShowsTimeline = state => state.timelinesShows;

/**
 * Retrieve event ID from state
 */
export const getEventId = (state, { eventId }) => parseInt(eventId, 10);

/**
 * Retrieve show ID from state
 */
export const getShowId = (state, { showId }) => parseInt(showId, 10);

/**
 * Retrieve member ID from parameters
 */
export const getMemberId = (
  state,
  { memberId = BetaSeries.user.userId } = {}
) => parseInt(memberId, 10);
