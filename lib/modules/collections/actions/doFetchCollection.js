import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve collection
 *
 * **Dispatch**: `FETCH_COLLECTION`
 *
 * @alias module:Collections.doFetchCollection
 * @category actions
 *
 * @example
 * BetaSeries.getAction('collections', 'doFetchCollection')({ id: 456 });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.id]      Collection ID
 *
 * @returns {Promise}
 */
const doFetchCollection = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('collections/collection', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_COLLECTION,
        payload: {
          ...props,
          collection: response.collection || {}
        }
      }));

export default doFetchCollection;
