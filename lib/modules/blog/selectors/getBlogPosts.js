import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select posts from state
 *
 * @alias module:Blog.getBlogPosts
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   blog: BetaSeries.getSelector('blog', 'getBlogPosts')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Posts elements or `undefined`
 */
const getBlogPosts = createSelector([commons.getPosts], posts => posts || []);

export default getBlogPosts;
