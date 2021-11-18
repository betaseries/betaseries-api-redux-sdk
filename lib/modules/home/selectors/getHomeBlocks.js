import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select home blocks from state
 *
 * @alias module:Home.getHomeBlocks
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   home: BetaSeries.getSelector('home', 'getHomeBlocks')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Home blocks or `undefined`
 */
const getHomeBlocks = createSelector(
  [commons.getBlocks],
  blocks => blocks || []
);

export default getHomeBlocks;
