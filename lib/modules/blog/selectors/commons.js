/**
 * Retrieve posts from state
 */
export const getPosts = state => state.blogPosts;

/**
 * Retrieve authors from state
 */
export const getAuthors = state => state.blogAuthors;

/**
 * Retrieve categories from state
 */
export const getCategories = state => state.blogCategories;

/**
 * Retrieve hot topics from state
 */
export const getHotTopics = state => state.blogHotTopics;

/**
 * Retrieve tags from state
 */
export const getTags = state => state.blogTags;

/**
 * Retrieve related posts from state
 */
export const getRelatedPosts = state => state.blogRelatedPosts;

/**
 * Retrieve featured posts from state
 */
export const getFeaturedPosts = state => state.blogFeaturedPosts;

/**
 * Retrieve category posts from state
 */
export const getCategoryPosts = state => state.blogCategoryPosts;

/**
 * Retrieve tag posts from state
 */
export const getTagPosts = state => state.blogTagPosts;

/**
 * Retrieve parent post ID from parameters
 */
export const getParentId = (state, { parentId }) => parseInt(parentId, 10);

/**
 * Retrieve post ID from parameters
 */
export const getPostId = (state, { postId }) => parseInt(postId, 10);

/**
 * Retrieve category ID from parameters
 */
export const getCategoryId = (state, { categoryId }) =>
  parseInt(categoryId, 10);

/**
 * Retrieve tag ID from parameters
 */
export const getTagId = (state, { tagId }) => parseInt(tagId, 10);

/**
 * Retrieve tag slug from parameters
 */
export const getTagSlug = (state, { tagSlug }) => tagSlug;
