import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve articles of the person
 *
 * **Dispatch**: `FETCH_PERSON_ARTICLES`
 *
 * @alias module:Persons.doFetchPersonArticles
 * @category actions
 *
 * @example
 * BetaSeries.getAction('persons', 'doFetchPersonArticles')({ personId: 1275 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.personId]  Person ID
 *
 * @returns {Promise}
 */
const doFetchPersonArticles = ({ personId, ...props }) =>
  dispatch =>
    ApiFetch.get('persons/articles', {
      id: personId,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_PERSON_ARTICLES,
        payload: {
          personId,
          ...props,
          articles: response.articles || []
        }
      }));

export default doFetchPersonArticles;
