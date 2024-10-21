import _filter from 'lodash/filter';
import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Rewatch episode
 *
 * **Dispatch**: `MARK_EPISODE_AS_REWATCHED`
 *
 * @alias module:Shows.doMarkEpisodeAsRewatched
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doMarkEpisodeAsRewatched')({
 *   id: 438,
 *   bulk: false,
 *   note: 4,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.id]          Episode ID, multiple episodes ids separated by commas
 * @param {Boolean} [obj.bulk]        Mark as watched previous episodes
 *
 * @returns {Promise}
 */
const doMarkEpisodeAsRewatched = ({ id, bulk = true, ...props }) =>
  (dispatch, getState) => {
    try {
      const episodes = getState().showsEpisodes || [];
      const episode = episodes[id];
      const showId = episode.show.id;

      const previousEpisodes = !bulk
        ? [episode]
        : _filter(
            episodes,
            ep =>
              ep.show.id === showId &&
              (ep.user || {}).seen === true &&
              (ep.season < episode.season ||
                (ep.season === episode.season && ep.episode <= episode.episode))
          );

      const episodeIds = previousEpisodes.map(ep => ep.id);

      dispatch({
        type: constants.MARK_MANY_EPISODE_AS_REWATCHED,
        payload: {
          ...props,
          episodeIds,
          seen: true
        }
      });
    } catch (exception) {
      /* catch error */
    }

    return ApiFetch.post('episodes/rewatch', {
      id,
      bulk,
      ...props
    }).then(response =>
      dispatch({
        type: constants.MARK_EPISODE_AS_REWATCHED,
        payload: {
          ...props,
          id,
          seen: true,
          episode: response.episode
        }
      }));
  };

export default doMarkEpisodeAsRewatched;
