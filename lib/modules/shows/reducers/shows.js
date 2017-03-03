import constants from '../constants';
import arrayToHash from '../../../utils/func/arrayToHash';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_FAVORITE_SHOWS:
    case constants.FETCH_MANY_SHOWS:
      return {
        ...state,
        ...arrayToHash(action.payload.shows),
      };

    case constants.FETCH_SHOW:
      return {
        ...state,
        ...arrayToHash([action.payload.show]),
      };

    default:
      return state;
  }
}
