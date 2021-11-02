import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve trailers list for home page
 *
 * **Dispatch**: `FETCH_HOME_TRAILERS`
 *
 * @alias module:Home.doFetchHomeTrailers
 * @category actions
 *
 * @example
 * BetaSeries.getAction('home', 'doFetchHomeTrailers')({ start: 0, limit: 10 });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.start]       Used for paginate (`0` by default)
 * @param {Number}  [obj.limit]       Used for paginate (optional)
 *
 * @returns {Promise}
 */
const doFetchHomeTrailers = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('home/trailers', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_HOME_TRAILERS,
        payload: {
          ...props,
          videos: response.videos
        }
      }));

export default doFetchHomeTrailers;
