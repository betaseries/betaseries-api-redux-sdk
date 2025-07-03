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
    case constants.SUBSCRIBE_COLLECTION:
    case constants.UNSUBSCRIBE_COLLECTION:
    case constants.TOGGLE_ALERT_COLLECTION:
    case constants.UPDATE_COLLECTION: {
      return {
        ...state,
        ...arrayToHash([action.payload.collection])
      };
    }

    case constants.DELETE_COLLECTION: {
      const newState = state || {};

      if (action.payload && action.payload.id) {
        delete newState[(action.payload || {}).id];
      }

      return {
        ...newState
      };
    }

    case constants.FETCH_COLLECTIONS_LIST:
    case constants.FETCH_SUBSCRIBED_COLLECTIONS_LIST: {
      return {
        ...state,
        ...arrayToHash(action.payload.collections)
      };
    }

    default:
      return state;
  }
}
