import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select discovers shows from state
 *
 * @alias module:Shows.getDiscoverShows
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   discover: BetaSeries.getSelector('shows', 'getDiscoverShows')(state);
 * });
 *
 * @param {Object}  [state]          Redux state
 *
 * @returns {Array}                  Array of shows or `[]`
 */
const getDiscoverShows = createSelector(
  [commons.getDiscoverShows],
  shows => shows
);

export default getDiscoverShows;
