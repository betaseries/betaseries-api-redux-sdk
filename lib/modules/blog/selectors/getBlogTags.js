import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select tags from state
 *
 * @alias module:Blog.getBlogTags
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   blog: BetaSeries.getSelector('blog', 'getBlogTags')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Tags elements or `undefined`
 */
const getBlogTags = createSelector([commons.getTags], tags => tags || []);

export default getBlogTags;
