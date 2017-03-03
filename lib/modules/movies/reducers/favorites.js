import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_FAVORITE_MOVIES:
      return {
        ...state,
        [action.payload.memberId]: arrayToID(action.payload.movies),
      };

    default:
      return state;
  }
}
