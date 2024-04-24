import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of collections
 *
 * **Actions listened**:
 *
 *  * `FETCH_COLLECTIONS_LIST`
 *
 * @alias module:Collections.collections
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('collections', 'collections').collectionsCollections;
 *
 * // state example
 * [
 *   {
 *     id: 384144,    // collection
 *     ...collection,
 *   },
 *   ...,
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function collectionsCollectionsReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case constants.FETCH_COLLECTION:
      return state;

    case constants.FETCH_COLLECTIONS_LIST:
      return _uniqBy(
        [...(action.payload.collections || []), ...(state || [])],
        'id'
      );

    case constants.ADD_COLLECTION:
      return _uniqBy([action.payload.collection, ...(state || [])], 'id');

    case constants.UPDATE_COLLECTION: {
      const collections = (state || []).map(collection => {
        if (collection.id === (action.payload.collection || {}).id) {
          return action.payload.collection;
        }

        return collection;
      });

      return _uniqBy(collections, 'id');
    }

    case constants.DELETE_COLLECTION: {
      const collections = (state || [])
        .filter(
          collection => collection.id !== (action.payload.collection || {}).id
        );

      return _uniqBy(collections, 'id');
    }

    default:
      return state;
  }
}
