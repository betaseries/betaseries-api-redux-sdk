import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Remove person from favorite
 *
 * **Dispatch**: `REMOVE_PERSON_FAVORITE`
 *
 * @alias module:Persons.doRemovePersonFavorite
 * @category actions
 *
 * @example
 * BetaSeries.getAction('persons', 'doRemovePersonFavorite')({
 *   personId: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.personId]    Person ID
 * @returns {Promise}
 */
const doRemovePersonFavorite = ({ personId }) =>
  dispatch =>
    ApiFetch.remove('persons/favorite', { id: personId }).then(response =>
      dispatch({
        type: constants.REMOVE_PERSON_FAVORITE,
        payload: {
          personId,
          person: response.person
        }
      }));

export default doRemovePersonFavorite;
