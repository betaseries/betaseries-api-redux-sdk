import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = [];

/**
 * List of collections for home page
 *
 * **Actions listened**:
 *
 *  * `FETCH_HOME_COLLECTIONS`
 *
 * @alias module:Home.collections
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('home', 'collections').homeCollections;
 *
 * // state example
 * [
 *   {
 *     id: 384144,    // collection id
 *     ...collection,
 *   },
 *   ...,
 * ]
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function collectionsHomeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_HOME_COLLECTIONS:
      return _uniqBy(
        [...(action.payload.collections || []), ...(state || [])],
        'id'
      );

    default:
      return state;
  }
}
