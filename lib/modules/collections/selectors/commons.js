import BetaSeries from '../../../betaseries';

/**
 * Retrieve collections from state
 */
export const getCollections = state => state.collections;

/**
 * Retrieve member collections from state
 */
export const getMembersCollections = state => state.collectionsMembers;

/**
 * Retrieve show ID from parameters
 */
export const getCollectionId = (state, { id }) => parseInt(id, 10);

/**
 * Retrieve member ID from parameters
 */
export const getMemberId = (
  state,
  { memberId = BetaSeries.user.userId } = {}
) => parseInt(memberId, 10);
