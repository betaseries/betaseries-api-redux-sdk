import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve show interests
 *
 * **Dispatch**: `FETCH_SHOW_INTERESTS`
 *
 * @alias module:Shows.doFetchShowInterests
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShowInterests')({
 *   showId: 118,
 *   country: 'fr',
 *   platforms: 1,34,
 *   genre: 'Crime',
 * });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.showId]    Show ID
 * @param {String}  [obj.country]   Country code
 * @param {Number}  [obj.platforms] Platforms ids
 * @param {String}  [obj.genre]     Genre type
 *
 * @returns {Promise}
 */
const doFetchShowInterests = (
  { showId, country, platforms, genre, ...props }
) =>
  dispatch =>
    ApiFetch.get('shows/interests', {
      id: showId,
      country,
      platforms,
      genre,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_SHOW_INTERESTS,
        payload: {
          showId,
          country,
          platforms,
          genre,
          ...props,
          shows: response.shows || []
        }
      }));

export default doFetchShowInterests;
