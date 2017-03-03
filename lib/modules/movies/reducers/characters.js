import constants from '../constants';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_MOVIE_CHARACTERS:
      return {
        ...state,
        [action.payload.movieId]: action.payload.characters,
      };

    default:
      return state;
  }
}
