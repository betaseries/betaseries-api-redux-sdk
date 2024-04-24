/**
 * Retrieve collections from state
 */
export const getCollections = state => state.collections;

/**
 * Retrieve show ID from parameters
 */
export const getCollectionId = (state, { id }) => parseInt(id, 10);
