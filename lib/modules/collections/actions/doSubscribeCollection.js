import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Subscribe to collection
 *
 * **Dispatch**: `SUBSCRIBE_COLLECTION`
 *
 * @alias module:Collections.doSubscribeCollection
 * @category actions
 *
 * @example
 * BetaSeries.getAction('collections', 'doSubscribeCollection')({ id: 456 });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.id]      Collection ID
 *
 * @returns {Promise}
 */
const doSubscribeCollection = ({ ...props }) =>
  dispatch =>
    ApiFetch.post(
      'collections/subscribe',
      {},
      {
        ...props
      }
    ).then(response =>
      dispatch({
        type: constants.SUBSCRIBE_COLLECTION,
        payload: {
          ...props,
          collection: response.collection || {}
        }
      }));

export default doSubscribeCollection;
