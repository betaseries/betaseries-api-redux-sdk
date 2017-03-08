import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select episode from state
 *
 * @alias module:Searchs.getSearchShows
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('searchs', 'getSearchShows')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Object}                  List of shows or empty array
 */
const getSearchShows = createSelector(
  [commons.getSearchShows],
  shows => shows,
);

export default getSearchShows;
