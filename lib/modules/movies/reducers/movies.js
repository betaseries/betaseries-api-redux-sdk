import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_FAVORITE_MOVIES:
    case constants.FETCH_MEMBER_MOVIES:
      return {
        ...state,
        ...arrayToHash(action.payload.movies),
      };

    case constants.FETCH_MOVIE:
      return {
        ...state,
        ...arrayToHash([action.payload.movie]),
      };

    default:
      return state;
  }
}
