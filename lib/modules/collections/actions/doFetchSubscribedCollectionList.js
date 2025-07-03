import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve subscribed collection list
 *
 * **Dispatch**: `FETCH_SUBSCRIBED_COLLECTIONS_LIST`
 *
 * @alias module:Collections.doFetchSubscribedCollectionList
 * @category actions
 *
 * @example
 * BetaSeries.getAction('collections', 'doFetchSubscribedCollectionList')({ user_id: 45 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.user_id]   User ID (optional: connected user if not added)
 *
 * @returns {Promise}
 */
const doFetchSubscribedCollectionList = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('collections/subscriptions', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_SUBSCRIBED_COLLECTIONS_LIST,
        payload: {
          ...props,
          memberId: props.user_id || undefined,
          collections: response.collections || []
        }
      }));

export default doFetchSubscribedCollectionList;
