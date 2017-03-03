import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

export default ({
  memberId,
  state = 0,
  start = 0,
  limit = 50,
  order = 'alphabetical',
}) => dispatch => (
  ApiFetch.get('movies/member', { id: memberId, state, start, limit, order })
    .then(response => (
      dispatch({
        type: constants.FETCH_MEMBER_MOVIES,
        payload: {
          memberId,
          movies: response.movies,
        },
      })
    ))
);
