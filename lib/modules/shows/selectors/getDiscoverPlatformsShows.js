import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select discovers platforms shows from state
 *
 * @alias module:Shows.getDiscoverPlatformsShows
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   discover: BetaSeries.getSelector('shows', 'getDiscoverPlatformsShows')(state);
 * });
 *
 * @param {Object}  [state]          Redux state
 *
 * @returns {Array}                  Array of shows or `[]`
 */
const getDiscoverPlatformsShows = createSelector(
  [commons.getDiscoverPlatformsShows],
  shows => shows
);

export default getDiscoverPlatformsShows;
