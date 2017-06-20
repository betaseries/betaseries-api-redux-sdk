import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve characters of the show
 *
 * **Dispatch**: `FETCH_SHOW_CHARACTERS`
 *
 * @alias module:Shows.doFetchShowCharacters
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShowCharacters')({ showId: 1275 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.showId]    Show ID
 *
 * @returns {Promise}
 */
const doFetchShowCharacters = ({ showId }) =>
  dispatch =>
    ApiFetch.get('shows/characters', { id: showId }).then(response =>
      dispatch({
        type: constants.FETCH_SHOW_CHARACTERS,
        payload: {
          showId,
          characters: response.characters
        }
      }));

export default doFetchShowCharacters;
