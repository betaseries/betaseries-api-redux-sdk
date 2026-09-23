import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add person to favorite
 *
 * **Dispatch**: `ADD_PERSON_FAVORITE`
 *
 * @alias module:Persons.doAddPersonFavorite
 * @category actions
 *
 * @example
 * BetaSeries.getAction('persons', 'doAddPersonFavorite')({
 *   personId: 438
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.personId]    Person ID
 * @returns {Promise}
 */
const doAddPersonFavorite = ({ personId }) =>
  dispatch =>
    ApiFetch.post('persons/favorite', { id: personId }).then(response =>
      dispatch({
        type: constants.ADD_PERSON_FAVORITE,
        payload: {
          personId,
          person: response.person
        }
      }));

export default doAddPersonFavorite;
