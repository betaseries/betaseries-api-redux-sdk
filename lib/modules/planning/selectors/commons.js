import BetaSeries from '../../../betaseries';

/**
 * Retrieve similar shows from state
 */
export const getCalendar = state => state.planningCalendar;

/**
 * Retrieve member ID from parameters
 */
export const getMemberId = (
  state,
  { memberId = BetaSeries.user.userId } = {}
) => parseInt(memberId, 10);

/**
 * Retrieve start from parameters
 */
export const getStart = (state, { start }) => start;

/**
 * Retrieve end from parameters
 */
export const getEnd = (state, { end }) => end;
