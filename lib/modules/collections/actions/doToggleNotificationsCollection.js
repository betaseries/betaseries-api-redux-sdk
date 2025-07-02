import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Enable/disable alert collection
 *
 * **Dispatch**: `TOGGLE_ALERT_COLLECTION`
 *
 * @alias module:Collections.doToggleNotificationsCollection
 * @category actions
 *
 * @example
 * BetaSeries.getAction('collections', 'doToggleNotificationsCollection')({ id: 456 });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.id]      Collection ID
 *
 * @returns {Promise}
 */
const doToggleNotificationsCollection = ({ ...props }) =>
  dispatch =>
    ApiFetch.post(
      'collections/notifications',
      {},
      {
        ...props
      }
    ).then(response =>
      dispatch({
        type: constants.TOGGLE_ALERT_COLLECTION,
        payload: {
          ...props,
          collection: response.collection || {}
        }
      }));

export default doToggleNotificationsCollection;
