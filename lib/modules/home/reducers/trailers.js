import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of trailers for home page
 *
 * **Actions listened**:
 *
 *  * `FETCH_HOME_TRAILERS`
 *
 * @alias module:Home.trailers
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('home', 'trailers').homeTrailers;
 *
 * // state example
 * [
 *   {
 *     id: 384144,    // trailer id
 *     ...trailer,
 *   },
 *   ...,
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function trailersHomeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_HOME_TRAILERS:
      return _uniqBy(
        [...(state || []), ...(action.payload.videos || [])],
        'id'
      );

    default:
      return state;
  }
}
