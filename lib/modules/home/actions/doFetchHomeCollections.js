import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve collections list for home page
 *
 * **Dispatch**: `FETCH_HOME_COLLECTIONS`
 *
 * @alias module:Home.doFetchHomeCollections
 * @category actions
 *
 * @example
 * BetaSeries.getAction('home', 'doFetchHomeCollections')({ ids: 1,2,3 });
 *
 * @param {Object}  [obj]       Accept the following:
 * @param {String}  [obj.ids]   List of collection IDs, separated with commas
 *
 * @returns {Promise}
 */
const doFetchHomeCollections = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('home/collections', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_HOME_COLLECTIONS,
        payload: {
          ...props,
          collections: response.collections
        }
      }));

export default doFetchHomeCollections;
