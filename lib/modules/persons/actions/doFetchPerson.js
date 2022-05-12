import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve person data
 *
 * **Dispatch**: `FETCH_PERSON`
 *
 * @alias module:Persons.doFetchPerson
 * @category actions
 *
 * @example
 * BetaSeries.getAction('persons', 'doFetchPerson')({ personId: 1275 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.personId]  Person ID
 *
 * @returns {Promise}
 */
const doFetchPerson = ({ personId, ...props }) =>
  dispatch =>
    ApiFetch.get('persons/person', { id: personId, ...props }).then(response =>
      dispatch({
        type: constants.FETCH_PERSON,
        payload: {
          personId,
          ...props,
          person: response.person || {}
        }
      }));

export default doFetchPerson;
