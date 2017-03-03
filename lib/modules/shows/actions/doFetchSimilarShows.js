import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';
import doFetchManyShows from './doFetchManyShows';

export default ({ showId }) => dispatch => (
  ApiFetch
    .get('/shows/similars', { id: showId })
    .then((response) => {
      const similars = response.similars.slice(0, 5);
      const showIds = similars.map(similar => similar.show_id);

      if (showIds.length === 0) {
        return Promise.resolve({ similars });
      }

      return dispatch(doFetchManyShows({ showIds })).then(() => ({ similars }));
    })
    .then(response => (
      dispatch({
        type: constants.FETCH_SIMILAR_SHOWS,
        payload: {
          showId,
          similars: response.similars,
        },
      })
    ))
);
