import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

export default ({ memberId }) => dispatch => (
  ApiFetch.get('shows/favorites', { id: memberId })
    .then(response => (
      dispatch({
        type: constants.FETCH_FAVORITE_SHOWS,
        payload: {
          memberId,
          shows: response.shows,
        },
      })
    ))
);
