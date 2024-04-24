import { createSelector } from 'reselect';
import * as commons from './commons';

/**
 * Select collection from state
 *
 * @alias module:Collections.getCollection
 * @category selectors
 *
 * @example
 * const mapStateToProps = (state, props) => ({
 *   show: BetaSeries.getSelector('collections', 'getCollection')(state, { id: props.collectionId });
 * });
 *
 * @param {Object}  [state]           Redux state
 * @param {Object}  [obj]             Accept the following:
 * @param {Object}  [obj.id]          Collection ID
 *
 * @returns {Object}                  Collection element or `undefined`
 */
const getCollection = createSelector(
  [commons.getCollections, commons.getCollectionId],
  (collections, collectionId) => {
    const index = collections.findIndex(
      collection => collection.id === collectionId
    );
    if (index === -1) {
      return null;
    }

    return collections[index];
  }
);

export default getCollection;
