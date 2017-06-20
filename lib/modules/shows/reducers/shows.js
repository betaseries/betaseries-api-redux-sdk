import constants from '../constants';
import showsNormalizer from '../normalizer/shows';
import memberConstants from '../../members/constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of shows
 *
 * **Actions listened**:
 *
 *  * `FETCH_FAVORITE_SHOWS`
 *  * `FETCH_MANY_SHOWS`
 *  * `FETCH_SHOW`
 *
 * @alias module:Shows.shows
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'shows').shows;
 *
 * // state example
 * {
 *   '1275': {      // show ID
 *     id: 1275,    // show element
 *     ...show,
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
    case constants.FETCH_FAVORITE_SHOWS:
    case constants.FETCH_MANY_SHOWS:
    case constants.FETCH_MEMBER_SHOWS:
      return {
        ...state,
        ...arrayToHash(showsNormalizer(action.payload.shows))
      };

    case constants.ADD_SHOW_FAVORITE:
    case constants.REMOVE_SHOW_FAVORITE:
    case constants.ADD_SHOW_ARCHIVE:
    case constants.REMOVE_SHOW_ARCHIVE:
    case constants.RATE_SHOW:
    case constants.ADD_SHOW:
    case constants.REMOVE_SHOW:
      return {
        ...state,
        ...arrayToHash(showsNormalizer([action.payload.show]))
      };

    case memberConstants.FETCH_USER:
    case memberConstants.FETCH_MEMBER: {
      let newShows = {};

      if (
        Object.prototype.hasOwnProperty.call(action.payload.member, 'shows')
      ) {
        newShows = {
          ...newShows,
          ...arrayToHash(showsNormalizer(action.payload.member.shows))
        };
      }

      if (
        Object.prototype.hasOwnProperty.call(action.payload.member, 'favorites')
      ) {
        newShows = {
          ...newShows,
          ...arrayToHash(showsNormalizer(action.payload.member.favorites))
        };
      }

      if (Object.keys(newShows).length === 0) {
        return state;
      }

      return {
        ...state,
        ...newShows
      };
    }

    default:
      return state;
  }
}
