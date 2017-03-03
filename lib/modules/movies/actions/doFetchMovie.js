import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

export default ({ movieId }) => dispatch => (
  ApiFetch.get('movies/movie', { id: movieId })
    .then(response => (
      dispatch({
        type: constants.FETCH_MOVIE,
        payload: {
          movieId,
          movie: response.movie,
        },
      })
    ))
);
