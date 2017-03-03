import constants from '../constants';
import arrayToID from '../../../utils/func/arrayToID';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SIMILAR_SHOWS:
      return {
        ...state,
        [action.payload.showId]: arrayToID(action.payload.similars),
      };

    default:
      return state;
  }
}
