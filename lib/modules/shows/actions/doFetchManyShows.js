import _difference from 'lodash/difference';
import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

export default ({ showIds }) => (dispatch, getState) => {
  const state = getState();

  // fetch shows only if does not exist on reducers
  const cleanShowIds = !Object.prototype.hasOwnProperty.call(state, 'shows') ? showIds : (
    _difference(showIds, Object.keys(state.shows))
  );

  if (cleanShowIds.length === 0) {
    return Promise.resolve();
  }

  return ApiFetch.get('shows/display', { id: cleanShowIds.join(',') })
    .then(response => (
      dispatch({
        type: constants.FETCH_MANY_SHOWS,
        payload: {
          showIds: cleanShowIds,
          shows: response.shows,
        },
      })
    ));
};
