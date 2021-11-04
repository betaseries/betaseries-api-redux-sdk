import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select Top 10 shows from state
 *
 * @alias module:Home.getHomeLastTop
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   home: BetaSeries.getSelector('home', 'getHomeLastTop')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Array}                   Top 10 shows or `undefined`
 */
const getHomeLastTop = createSelector([commons.getTop], shows => shows || []);

export default getHomeLastTop;
