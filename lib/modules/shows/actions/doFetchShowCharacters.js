import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

export default ({ showId }) => dispatch => (
  ApiFetch.get('shows/characters', { id: showId })
    .then(response => (
      dispatch({
        type: constants.FETCH_SHOW_CHARACTERS,
        payload: {
          showId,
          characters: response.characters,
        },
      })
    ))
);
