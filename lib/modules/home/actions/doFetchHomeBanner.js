import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve Home banner info
 *
 * **Dispatch**: `FETCH_HOME_BANNER`
 *
 * @alias module:Home.doFetchHomeBanner
 * @category actions
 *
 * @example
 * BetaSeries.getAction('home', 'doFetchHomeBanner')({ bannerId: '1' });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {String}  [obj.bannerId]  Id of the banner to retrieve the info from
 *
 * @returns {Promise}
 */
const doFetchHomeBanner = ({ bannerId, ...props }) =>
  dispatch =>
    ApiFetch.get('home/banner', {
      banner_id: bannerId,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_HOME_BANNER,
        payload: {
          banner_id: bannerId,
          ...props,
          banner: response.banner
        }
      }));

export default doFetchHomeBanner;
