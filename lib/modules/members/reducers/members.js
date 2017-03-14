import constants from '../constants';

const initialState = {};

/**
 * List of members
 *
 * **Actions listened**:
 *
 *  * `FETCH_MEMBER`
 *
 * @alias module:Members.members
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('members', 'members').members;
 *
 * // state value example
 * {
 *   '12': {      // member ID
 *     id: 12,    // member element
 *     ...member,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_MEMBER:
      return {
        ...state,
        [action.payload.member.id]: action.payload.member,
      };

    default:
      return state;
  }
}
