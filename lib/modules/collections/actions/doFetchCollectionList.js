import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve collection list
 *
 * **Dispatch**: `FETCH_COLLECTIONS_LIST`
 *
 * @alias module:Collections.doFetchCollectionList
 * @category actions
 *
 * @example
 * BetaSeries.getAction('collections', 'doFetchCollectionList')({ memberId: 45 });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.memberId]  Member ID (optional: connected user if not added)
 *
 * @returns {Promise}
 */
const doFetchCollectionList = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('collections/list', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_COLLECTIONS_LIST,
        payload: {
          ...props,
          collections: response.collections || []
        }
      }));

export default doFetchCollectionList;
