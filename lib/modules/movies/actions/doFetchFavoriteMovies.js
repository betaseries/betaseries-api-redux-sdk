import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

export default ({ memberId }) => dispatch => (
  ApiFetch.get('movies/favorites', { id: memberId })
    .then(response => (
      dispatch({
        type: constants.FETCH_FAVORITE_MOVIES,
        payload: {
          memberId,
          movies: response.movies,
        },
      })
    ))
);
