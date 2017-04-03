import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of badges
 *
 * **Actions listened**:
 *
 *  * `FETCH_BADGE`
 *
 * @alias module:Badges.badges
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('badges', 'badges').badges;
 *
 * // state example
 * {
 *   '4': {      // badge ID
 *     id: 4,    // badge element
 *     ...badge,
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_BADGE:
      return {
        ...state,
        ...arrayToHash([action.payload.badge])
      };

    default:
      return state;
  }
}
