import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Remove collection
 *
 * **Dispatch**: `DELETE_COLLECTION`
 *
 * @alias module:Collections.doRemoveCollection
 * @category actions
 *
 * @example
 * BetaSeries.getAction('collections', 'doRemoveCollection')({
 *   id: 438
 * });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.id]      Collection ID
 * @returns {Promise}
 */
const doRemoveCollection = ({ ...props }) =>
  dispatch =>
    ApiFetch.remove('collections/collection', { ...props }).then(response =>
      dispatch({
        type: constants.DELETE_COLLECTION,
        payload: {
          ...props,
          collection: response.collection || {}
        }
      }));

export default doRemoveCollection;
