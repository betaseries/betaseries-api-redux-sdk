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
 *   collections:
 *  BetaSeries.getSelector('collections', 'getCollectionList')(state, { memberId: 1 });
 * });
 *
 * @param {Object}  [state]      Redux state
 *
 * @returns {Array}              Array of collections or `[]`
 */
const getCollectionList = createSelector(
  [commons.getMembersCollections, commons.getMemberId],
  (membersCollections, memberId) => {
    if (!Object.prototype.hasOwnProperty.call(membersCollections, memberId)) {
      return [];
    }

    return membersCollections[memberId];
  }
);

export default getCollectionList;
