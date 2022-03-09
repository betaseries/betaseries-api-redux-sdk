import ApiFetch from '../../../utils/fetch/ApiFetch';
import constants from '../constants';

/**
 * Retrieve Home popular platform shows
 *
 * **Dispatch**: `FETCH_HOME_POPULAR_PLATFORM`
 *
 * @alias module:Home.doFetchHomePopularPlatform
 * @category actions
 *
 * @example
 * BetaSeries.getAction('home', 'doFetchHomePopularPlatform')({ platformId: '1'});
 *
 * @param {Object}  [obj]                   Accept the following:
 * @param {String}  [obj.platformId]       platformId return in config home/blocks
 *
 * @returns {Promise}
 */
const doFetchHomePopularPlatform = ({ platformId, ...props }) =>
  dispatch =>
    ApiFetch.get('home/popular_platform', {
      platform_id: platformId,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_HOME_POPULAR_PLATFORM,
        payload: {
          ...props,
          platformId,
          shows: response.shows
        }
      }));

export default doFetchHomePopularPlatform;
