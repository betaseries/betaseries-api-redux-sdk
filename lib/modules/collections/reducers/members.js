import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';
import BetaSeries from '../../../betaseries';

const initialState = {};

/**
 * List of collections of members
 *
 * **Actions listened**:
 *
 *  * `FETCH_COLLECTIONS_LIST`
 *
 * @alias module:Collections.members
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('collections', 'members').collectionsMembers;
 *
 * // state example
 * {
 *   '12': [{           // member ID
 *     id: 384144,    // collection
 *     ...collection,
 *   }, ...,
 *  ],
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function collectionsMembersReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case constants.FETCH_COLLECTIONS_LIST: {
      const userId = action.payload.memberId || BetaSeries.user.userId;

      return {
        ...state,
        [userId]: _uniqBy(
          [...(action.payload.collections || []), ...(state[userId] || [])],
          'id'
        )
      };
    }

    case constants.ADD_COLLECTION: {
      const userId = BetaSeries.user.userId;

      return {
        ...state,
        [userId]: _uniqBy(
          [action.payload.collection, ...(state[userId] || [])],
          'id'
        )
      };
    }

    case constants.UPDATE_COLLECTION: {
      const userId = BetaSeries.user.userId;
      const collections = (state[userId] || []).map(collection => {
        if (collection.id === (action.payload.collection || {}).id) {
          return action.payload.collection;
        }

        return collection;
      });

      return {
        ...state,
        [userId]: _uniqBy(collections, 'id')
      };
    }

    case constants.DELETE_COLLECTION: {
      const userId = BetaSeries.user.userId;
      const collections = (state[userId] || [])
        .filter(
          collection => collection.id !== (action.payload.collection || {}).id
        );

      return {
        ...state,
        [userId]: _uniqBy(collections, 'id')
      };
    }

    default:
      return state;
  }
}
