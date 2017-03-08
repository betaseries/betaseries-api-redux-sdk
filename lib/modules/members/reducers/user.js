import constants from '../constants';

const initialState = null;

/**
 * Informations of the authenticated user
 *
 * **Actions listened**:
 *
 *  * `FETCH_USER`
 *
 * @alias module:Members.user
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('members', 'user').membersUser;
 *
 * // state example
 * {
 *   ...user         // user informations
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function membersUserReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_USER:
      return action.payload.member.id;

    default:
      return state;
  }
}
