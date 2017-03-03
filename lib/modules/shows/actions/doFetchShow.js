import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

export default ({ showId }) => dispatch => (
  ApiFetch.get('shows/display', { id: showId })
    .then(response => (
      dispatch({
        type: constants.FETCH_SHOW,
        payload: {
          showId,
          show: response.show,
        },
      })
    ))
);
