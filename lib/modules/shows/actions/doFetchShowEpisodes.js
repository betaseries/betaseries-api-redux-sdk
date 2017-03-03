import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

export default ({ showId, ...props }) => dispatch => (
  ApiFetch.get('shows/episodes', { id: showId, ...props })
    .then(response => (
      dispatch({
        type: constants.FETCH_SHOW_EPISODES,
        payload: {
          ...props,
          showId,
          episodes: response.episodes,
        },
      })
    ))
);
