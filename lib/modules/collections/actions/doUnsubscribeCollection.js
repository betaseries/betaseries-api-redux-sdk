import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Unsubscribe to collection
 *
 * **Dispatch**: `UNSUBSCRIBE_COLLECTION`
 *
 * @alias module:Collections.doUnsubscribeCollection
 * @category actions
 *
 * @example
 * BetaSeries.getAction('collections', 'doUnsubscribeCollection')({ id: 456 });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.id]      Collection ID
 *
 * @returns {Promise}
 */
const doUnsubscribeCollection = ({ ...props }) =>
  dispatch =>
    ApiFetch.remove('collections/subscribe', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.UNSUBSCRIBE_COLLECTION,
        payload: {
          ...props,
          collection: response.collection || {}
        }
      }));

export default doUnsubscribeCollection;
