import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select authors from state
 *
 * @alias module:Blog.getBlogAuthors
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   blog: BetaSeries.getSelector('blog', 'getBlogAuthors')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Authors elements or `undefined`
 */
const getBlogAuthors = createSelector(
  [commons.getAuthors],
  authors => authors || []
);

export default getBlogAuthors;
