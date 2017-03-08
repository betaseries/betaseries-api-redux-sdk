import _difference from 'lodash/difference';
import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve many episodes
 *
 * **Dispatch**: `FETCH_MANY_EPISODES`
 *
 * @alias module:Shows.doFetchManyEpisodes
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchManyEpisodes')({ episodeIds: [ 1, 2, 3 ] });
 *
 * @param {Object}  [obj]             Accept the folling:
 * @param {Array}   [obj.episodeIds]  List of episodes ID
 *
 * @returns {Promise}
 */
const doFetchManyEpisodes = ({ episodeIds }) => (dispatch, getState) => {
  const state = getState();

  // fetch episodes only if does not exist on reducers
  const cleanEpisodeIds = (
    _difference(episodeIds, Object.keys(state.showsEpisodes).map(episode => parseInt(episode, 10)))
  );

  if (cleanEpisodeIds.length === 0) {
    return Promise.resolve();
  }

  return ApiFetch.get('episodes/display', { id: cleanEpisodeIds.join(',') })
    .then(response => (
      dispatch({
        type: constants.FETCH_MANY_EPISODES,
        payload: {
          episodeIds: cleanEpisodeIds,
          episodes: cleanEpisodeIds.length === 1 ? [response.episode] : response.episodes,
        },
      })
    ));
};

export default doFetchManyEpisodes;
