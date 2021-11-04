import constants from '../constants';

const initialState = [];

/**
 * List of the Top 10 shows
 *
 * **Actions listened**:
 *
 *  * `FETCH_HOME_TOP`
 *
 * @alias module:Home.top
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('home', 'top').homeTop;
 *
 * // state example
 * [
 *     {
 *       id: 123543,     // show ID
 *       ...show       // show element
 *     },
 *     ...
  * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function topHomeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_HOME_TOP:
      return action.payload.shows;

    default:
      return state;
  }
}
