import _reduce from 'lodash/reduce';
import _filter from 'lodash/filter';
import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

/**
 * List of the show episodes group by season and episode number
 *
 * **Actions listened**:
 *
 *  * `FETCH_SHOW_EPISODES`
 *  * `FETCH_MANY_EPISODES`
 *  * `FETCH_LATEST_EPISODE`
 *  * `FETCH_EPISODE_BY_CODE`
 *  * `FETCH_EPISODE`
 *  * `MARK_MANY_EPISODE_AS_WATCHED`
 *  * `UNMARK_MANY_EPISODE_AS_WATCHED`
 *  * `MARK_EPISODE_AS_WATCHED`
 *  * `UNMARK_EPISODE_AS_WATCHED`
 *  * `ADD_SHOW`
 *  * `REMOVE_SHOW`
 *
 * @alias module:Shows.episodes
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'episodes').showsEpisodes;
 *
 * // state example
 * {
 *   '3215': {            // episode ID
 *     id: 3215,          // episode ID
 *     ...episode,        // episode element
 *   },
 *   ...,
 * }
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @returns {Object}
 */
export default function showEpisodesReducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SHOW_EPISODES:
    case constants.FETCH_MANY_EPISODES:
      return {
        ...state,
        ...arrayToHash(action.payload.episodes)
      };

    case constants.FETCH_LATEST_EPISODE:
    case constants.FETCH_EPISODE_BY_CODE:
    case constants.FETCH_EPISODE:
    case constants.MARK_EPISODE_AS_WATCHED:
    case constants.RATE_EPISODE:
      return {
        ...state,
        ...arrayToHash([action.payload.episode])
      };

    case constants.FETCH_EPISODES_LIST:
      return {
        ...state,
        ...arrayToHash(
          _reduce(
            action.payload.shows,
            (sum, show) => [...sum, ...show.unseen],
            []
          )
        )
      };

    case constants.MARK_MANY_EPISODE_AS_WATCHED:
    case constants.UNMARK_MANY_EPISODE_AS_WATCHED: {
      const episodeIds = action.payload.episodeIds;

      const nextEpisodes = episodeIds.reduce(
        (sum, episodeId) => {
          if (!Object.prototype.hasOwnProperty.call(state, episodeId)) {
            return sum;
          }

          return {
            ...sum,
            [episodeId]: {
              ...state[episodeId],
              user: {
                ...state[episodeId].user,
                seen: action.payload.seen
              }
            }
          };
        },
        {}
      );

      return {
        ...state,
        ...nextEpisodes
      };
    }

    case constants.UNMARK_EPISODE_AS_WATCHED: {
      const episodeId = action.payload.episodeId;
      if (!Object.prototype.hasOwnProperty.call(state, episodeId)) {
        return state;
      }

      return {
        ...state,
        [episodeId]: {
          ...state[episodeId],
          user: {
            ...state[episodeId].user,
            seen: action.payload.seen
          }
        }
      };
    }

    case constants.ADD_SHOW:
    case constants.REMOVE_SHOW: {
      const episodes = _filter(
        state,
        episode => episode.show.id === action.payload.showId
      );

      if (Object.keys(episodes).length === 0) {
        return state;
      }

      return {
        ...state,
        ...arrayToHash(
          episodes.map(episode => ({
            ...episode,
            show: {
              ...episode.show,
              in_account: action.type === constants.ADD_SHOW
            }
          }))
        )
      };
    }

    default:
      return state;
  }
}
