import { createSelector } from 'reselect';
import _orderBy from 'lodash/orderBy';
import * as commons from './commons';

/**
 * Select subscribed collection list from state
 *
 * @alias module:Collections.getCollectionSubscribedList
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   collections:
 *  BetaSeries.getSelector('collections', 'getCollectionSubscribedList')(state, { memberId: 1 });
 * });
 *
 * @param {Object}  [state]      Redux state
 *
 * @returns {Array}              Array of collections or `[]`
 */
const getCollectionSubscribedList = createSelector(
  [commons.getSubscribedCollections, commons.getMemberId],
  (subscribedCollections, memberId) => {
    if (
      !Object.prototype.hasOwnProperty.call(subscribedCollections, memberId)
    ) {
      return [];
    }

    return _orderBy(subscribedCollections[memberId] || [], 'updatedAt', 'desc');
  }
);

export default getCollectionSubscribedList;
