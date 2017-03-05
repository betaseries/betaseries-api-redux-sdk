import _difference from 'lodash/difference';
import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve many shows
 *
 * **Dispatch**: `FETCH_MANY_SHOWS`
 *
 * @alias module:Shows.doFetchManyShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchManyShows')({ showIds: [1275, 481] });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Array}   [obj.showIds]    List of shows ID
 *
 * @returns {Promise}
 */
const doFetchManyShows = ({ showIds }) => (dispatch, getState) => {
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

export default doFetchManyShows;
