import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';
import BetaSeries from '../../../betaseries';

const initialState = {};

/**
 * List of subscribed collections of members
 *
 * **Actions listened**:
 *
 *  * `FETCH_SUBSCRIBED_COLLECTIONS_LIST`
 *
 * @alias module:Collections.subscribed
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('collections', 'subscribed').collectionsSubscribed;
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
export default function collectionsSubscribedReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case constants.FETCH_SUBSCRIBED_COLLECTIONS_LIST: {
      const userId = action.payload.memberId || BetaSeries.user.userId;

      return {
        ...state,
        [userId]: _uniqBy([...(action.payload.collections || [])], 'id')
      };
    }

    default:
      return state;
  }
}
