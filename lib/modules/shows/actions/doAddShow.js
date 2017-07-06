import _filter from 'lodash/filter';
import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add show
 *
 * **Dispatch**: `ADD_SHOW`
 *
 * @alias module:Shows.doAddShow
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doAddShow')({
 *   showId: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.showId]      Show ID
 * @param {Number}  [obj.episode_id]  Episode ID
 * @returns {Promise}
 */
const doAddShow = ({ showId, ...props }) =>
  (dispatch, getState) =>
    ApiFetch.post('shows/show', { id: showId, ...props })
      .then(response =>
        dispatch({
          type: constants.ADD_SHOW,
          payload: {
            ...props,
            showId,
            show: response.show
          }
        }))
      .then(() => {
        const episodeId = props.episodeId;

        if (episodeId) {
          try {
            const episodes = getState().showsEpisodes || [];
            const episode = episodes[episodeId] || {};

            const previousEpisodes = _filter(
              episodes,
              ep =>
                ep.show.id === showId &&
                (ep.season < episode.season ||
                  (ep.season === episode.season &&
                    ep.episode <= episode.episode))
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
        }
      });

export default doAddShow;
