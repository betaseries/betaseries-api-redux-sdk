import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select collection list from state
 *
 * @alias module:Collections.getCollectionList
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   discover: BetaSeries.getSelector('collections', 'getCollectionList')(state);
 * });
 *
 * @param {Object}  [state]      Redux state
 *
 * @returns {Array}              Array of collections or `[]`
 */
const getCollectionList = createSelector(
  [commons.getCollections],
  collections => collections || []
);

export default getCollectionList;
