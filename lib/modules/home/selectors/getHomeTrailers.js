import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select home trailers from state
 *
 * @alias module:Home.getHomeTrailers
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   home: BetaSeries.getSelector('home', 'getHomeTrailers')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Trailers elements or `undefined`
 */
const getHomeTrailers = createSelector(
  [commons.getTrailers],
  videos => videos || []
);

export default getHomeTrailers;
