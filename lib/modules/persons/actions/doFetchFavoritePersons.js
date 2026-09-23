import ApiFetch from '../../../utils/fetch/ApiFetch';
import constants from '../constants';

/**
 * Retrieve favorite persons of the member
 *
 * **Dispatch**: `FETCH_FAVORITE_PERSONS`
 *
 * @alias module:Persons.doFetchFavoritePersons
 * @category actions
 *
 * @example
 * BetaSeries.getAction('persons', 'doFetchFavoritePersons')({ memberId: 1 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.memberId]    Member ID
 * @param {Number}  [obj.start]       Used for paginate (`0` by default)
 * @param {Number}  [obj.limit]       Used for paginate (optional)
 * @param {String}  [obj.summary]     Only importanzt info (optional)
 * @returns {Promise}
 */
const doFetchFavoritePersons = ({ memberId, ...props }) =>
  dispatch =>
    ApiFetch.get('persons/favorites', {
      id: memberId,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_FAVORITE_PERSONS,
        payload: {
          ...props,
          memberId,
          persons: response.persons,
          total: response.total
        }
      }));

export default doFetchFavoritePersons;
