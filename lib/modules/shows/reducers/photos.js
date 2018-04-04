import _union from 'lodash/union';
import constants from '../constants';

const initialState = {};

/**
 * List of the show photos
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_PHOTOS`
 *
 * @alias module:Shows.photos
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'photos').showsPhotos;
 *
 * // state example
 * {
 *   '1275': [              // show ID
 *     {
 *       id: 123543,        // photo ID
 *       ...photo           // photo element
 *     },
 *     ...
 *   ]
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showsPhotosReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SHOW_PHOTOS: {
      const showId = action.payload.showId;
      const photos = state[showId] || [];

      if (action.payload.photos.length === 0) {
        return state;
      }

      return {
        ...state,
        [showId]: _union([...photos, ...action.payload.photos])
      };
    }

    default:
      return state;
  }
}
