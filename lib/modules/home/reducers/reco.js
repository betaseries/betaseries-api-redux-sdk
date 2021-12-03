import constants from '../constants';

const initialState = {};

/**
 * List of the recommendation shows
 *
 * **Actions listened**:
 *
 *  * `FETCH_HOME_RECO`
 *
 * @alias module:Home.reco
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('home', 'reco').homeReco;
 *
 * // state example
 * {
 *  shows: [
 *     {
 *       id: 123543,     // show ID
 *       ...show         // show element
 *     },
 *     ...
 *  ],
 *  show: {}             // ref show or forced show (can be null)
 * } 
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function recoHomeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_HOME_RECO:
      return {
        shows: action.payload.shows,
        show: action.payload.show || null
      };

    default:
      return state;
  }
}
