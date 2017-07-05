import _filter from 'lodash/filter';
import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Watch episode
 *
 * **Dispatch**: `MARK_EPISODE_AS_WATCHED`
 *
 * @alias module:Shows.doMarkEpisodeAsWatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doMarkEpisodeAsWatched')({
 *   episodeId: 438,
 *   bulk: false,
 *   note: 4,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.episodeId]   Episode ID
 * @param {Boolean} [obj.bulk]        Mark as watched previous episodes
 * @param {Boolean} [obj.delete]      Unmark as watched next episodes
 * @param {Number}  [obj.note]        Note (from `1` to `5`)
 *
 * @returns {Promise}
 */
const doMarkEpisodeAsWatched = ({ episodeId, bulk = true, ...props }) =>
  (dispatch, getState) => {
    try {
      const episodes = getState().showsEpisodes || [];
      const episode = episodes[episodeId];
      const showId = episode.show.id;

      const previousEpisodes = !bulk
        ? [episode]
        : _filter(
            episodes,
            ep =>
              ep.show.id === showId &&
              (ep.user || {}).seen === false &&
              (ep.season < episode.season ||
                (ep.season === episode.season && ep.episode <= episode.episode))
          );

      const episodeIds = previousEpisodes.map(ep => ep.id);

      dispatch({
        type: constants.MARK_MANY_EPISODE_AS_WATCHED,
        payload: {
          ...props,
          episodeIds,
          seen: true
        }
      });
    } catch (exception) {
      /* catch error */
    }

    return ApiFetch.post('episodes/watched', {
      id: episodeId,
      bulk,
      ...props
    }).then(response => {
      dispatch({
        type: constants.MARK_EPISODE_AS_WATCHED,
        payload: {
          ...props,
          episodeId,
          seen: true,
          episode: response.episode
        }
      });
    });
  };

export default doMarkEpisodeAsWatched;
