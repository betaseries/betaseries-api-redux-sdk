import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select episode from state
 *
 * @alias module:Searchs.getSearchAll
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   searchs: BetaSeries.getSelector('searchs', 'getSearchAll')(state);
 * });
 *
 * @param {Object}  [state]           Redux state
 *
 * @returns {Object}                  List of shows or empty array
 */
const getSearchAll = createSelector([commons.getSearchAll], all => all);

export default getSearchAll;
