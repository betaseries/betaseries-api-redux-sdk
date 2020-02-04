import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = {};

/**
 * List of unrated shows of the connected member
 *
 * **Actions listened**:
 *
 *  * `FETCH_UNRATED_SHOWS`
 *
 * @alias module:Shows.unratedShows
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'unratedShows').showsUnratedShows;
 *
 * // state value example
 * {
 *   '12': [{
 *     'id': 1323421,
 *     'title': 'xxx',
 *     ...
 *    }, // list of shows
 *   ]
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function unratedShowsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_UNRATED_SHOWS: {
      const shows = action.payload.shows.map(show => ({
        ...show,
        totalShows: action.payload.totalShows
      }));

      return {
        ...state,
        [action.payload.userId]: _uniqBy(shows, 'id')
      };
    }

    default:
      return state;
  }
}
