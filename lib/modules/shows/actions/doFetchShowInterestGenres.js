import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve genres of interest show
 *
 * **Dispatch**: `FETCH_SHOW_INTEREST_GENRES`
 *
 * @alias module:Shows.doFetchShowInterestGenres
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShowInterestGenres')({
 *   showId: 118,
 *   country: 'fr',
 *   platforms: 1,34,
 * });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.showId]    Show ID
 * @param {String}  [obj.country]   Country code
 * @param {Number}  [obj.platforms] Platforms ids
 *
 * @returns {Promise}
 */
const doFetchShowInterestGenres = ({ showId, country, platforms, ...props }) =>
  dispatch =>
    ApiFetch.get('shows/interests_genres', {
      id: showId,
      country,
      platforms,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_SHOW_INTEREST_GENRES,
        payload: {
          showId,
          country,
          platforms,
          ...props,
          genres: response.genres || {}
        }
      }));

export default doFetchShowInterestGenres;
