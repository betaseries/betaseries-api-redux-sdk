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
 *   collection: BetaSeries.getSelector('collections', 'getCollection')(state, { id: props.id });
 * });
 *
 * @param {Object}  [state]       Redux state
 * @param {Object}  [obj]         Accept the following:
 * @param {Object}  [obj.id]      Collection ID
 *
 * @returns {Object}              Collection element or `undefined`
 */
const getCollection = createSelector(
  [commons.getCollections, commons.getCollectionId],
  (collections, collectionId) => {
    const collection = !Object.prototype.hasOwnProperty.call(
      collections,
      collectionId
    )
      ? undefined
      : collections[collectionId];

    if (!collection) {
      return undefined;
    }

    return collection;
  }
);

export default getCollection;
