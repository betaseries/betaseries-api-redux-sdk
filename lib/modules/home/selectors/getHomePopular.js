import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select Home popular shows for the last 30 days
 *
 * @alias module:Home.getHomePopular
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   home: BetaSeries.getSelector('home', 'getHomePopular')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Popular shows or `undefined`
 */
const getHomePopular = createSelector(
  [commons.getPopular],
  shows => shows || []
);

export default getHomePopular;
