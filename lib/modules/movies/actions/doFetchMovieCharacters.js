import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

export default ({ movieId }) => dispatch => (
  ApiFetch.get('movies/characters', { id: movieId })
    .then(response => (
      dispatch({
        type: constants.FETCH_MOVIE_CHARACTERS,
        payload: {
          movieId,
          characters: response.characters,
        },
      })
    ))
);
