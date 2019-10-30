/**
 * Retrieve posts from state
 */
export const getPosts = state => state.blogPosts;

/**
 * Retrieve authors from state
 */
export const getAuthors = state => state.blogAuthors;

/**
 * Retrieve related posts from state
 */
export const getRelatedPosts = state => state.blogRelatedPosts;

/**
 * Retrieve parent post ID from parameters
 */
export const getParentId = (state, { parentId }) => parseInt(parentId, 10);
