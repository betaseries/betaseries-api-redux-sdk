import _filter from 'lodash/filter';
import _reduce from 'lodash/reduce';
import arrayToHash from '../../../utils/func/arrayToHash';
import constants from '../constants';

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
 *  * `MARK_MANY_EPISODE_AS_REWATCHED`
 *  * `UNMARK_MANY_EPISODE_AS_REWATCHED`
 *  * `MARK_EPISODE_AS_REWATCHED`
 *  * `UNMARK_EPISODE_AS_REWATCHED`
 *  * `ADD_SHOW`
 *  * `REMOVE_SHOW`
 *
 * @alias module:Shows.episodesRewatched
 * @category reducers
 *
 * @example
 * // get reducer
 * BetaSeries.getReducer('shows', 'episodesRewatched').showsEpisodesRewatched;
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
export default function showEpisodesRewatchedReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case constants.MARKED_EPISODE_AS_HIDDEN: {
      const episodeId = action.payload.episodeIds[0];
      return {
        ...state,
        [episodeId]: {
          ...state[episodeId],
          user: {
            ...state[episodeId].user,
            hidden: true
          }
        }
      };
    }
    case constants.UNMARKED_EPISODE_AS_HIDDEN: {
      const episodeId = action.payload.episodeIds[0];
      return {
        ...state,
        [episodeId]: {
          ...state[episodeId],
          user: {
            ...state[episodeId].user,
            hidden: false
          }
        }
      };
    }
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
    case constants.MARK_EPISODE_AS_REWATCHED:
      return {
        ...state,
        ...arrayToHash([action.payload.episode])
      };

    case constants.RATE_EPISODE: {
      let result = [];

      if (
        (action.payload || {}).episodes &&
        ((action.payload || {}).episodes || []).length > 0
      ) {
        result = (action.payload || {}).episodes || [];
      } else if ((action.payload || {}).episode) {
        result = [(action.payload || {}).episode];
      }

      return {
        ...state,
        ...arrayToHash(result)
      };
    }

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
    case constants.MARK_MANY_EPISODE_AS_REWATCHED:
    case constants.UNMARK_MANY_EPISODE_AS_WATCHED:
    case constants.UNMARK_MANY_EPISODE_AS_REWATCHED: {
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

    case constants.UNMARK_EPISODE_AS_WATCHED:
    case constants.UNMARK_EPISODE_AS_REWATCHED: {
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

    case constants.MARK_EPISODE_AS_DOWNLOADED:
    case constants.UNMARK_EPISODE_AS_DOWNLOADED: {
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
            downloaded: action.payload.downloaded
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
          episodes.map(episode => {
            const user = episode.user || {};
            return {
              ...episode,
              user: {
                ...user,
                seen: false
              },
              show: {
                ...episode.show,
                in_account: action.type === constants.ADD_SHOW
              }
            };
          })
        )
      };
    }

    default:
      return state;
  }
}
