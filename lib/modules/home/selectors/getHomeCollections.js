import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select home collections from state
 *
 * @alias module:Home.getHomeCollections
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   home: BetaSeries.getSelector('home', 'getHomeCollections')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Collections elements or `undefined`
 */
const getHomeCollections = createSelector(
  [commons.getCollections],
  collections => collections || []
);

export default getHomeCollections;
