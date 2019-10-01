import _uniqBy from 'lodash/uniqBy';
import constants from '../constants';

const initialState = {};

/**
 * List of unrated episodes of the connected member
 *
 * **Actions listened**:
 *
 *  * `FETCH_UNRATED_EPISODES`
 *
 * @alias module:Shows.unratedEpisodes
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'unratedEpisodes').showsUnratedEpisodes;
 *
 * // state value example
 * {
 *   '12': [{
 *     'id': 1323421,
 *     'title': 'xxx',
 *     ...
 *    }, // list of episodes
 *   ]
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function unratedEpisodesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_UNRATED_EPISODES:
      return {
        ...state,
        [action.payload.userId]: _uniqBy([...action.payload.episodes], 'id')
      };

    default:
      return state;
  }
}
