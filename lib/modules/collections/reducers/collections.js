import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of collections
 *
 * **Actions listened**:
 *
 *  * `FETCH_COLLECTION`
 *
 * @alias module:Collections.collections
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('collections', 'collections').collectionsCollections;
 *
 * // state example
 * {
 *   '12': {           // collection ID
 *     id: 12,    // collection
 *     ...collection,
 *   },
 *  ...,
 * }
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
    case constants.ADD_COLLECTION:
    case constants.UPDATE_COLLECTION:
    case constants.DELETE_COLLECTION: {
      return {
        ...state,
        ...arrayToHash([action.payload.collection])
      };
    }

    case constants.FETCH_COLLECTIONS_LIST: {
      return {
        ...state,
        ...arrayToHash(action.payload.collections)
      };
    }

    default:
      return state;
  }
}
