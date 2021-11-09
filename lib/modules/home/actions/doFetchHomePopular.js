import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve Home popular shows for the last 30 days
 *
 * **Dispatch**: `FETCH_HOME_POPULAR`
 *
 * @alias module:Home.doFetchHomePopular
 * @category actions
 *
 * @example
 * BetaSeries.getAction('home', 'doFetchHomePopular')({ day: '2021-10-01', summary: true });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.day]       Day format 'Y-m-d', past day by default (optional)
 * @param {Boolean} [obj.summary]   Summary info, false by default (optional)
 *
 * @returns {Promise}
 */
const doFetchHomePopular = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('home/popular', { ...props }).then(response =>
      dispatch({
        type: constants.FETCH_HOME_POPULAR,
        payload: {
          ...props,
          shows: response.shows
        }
      }));

export default doFetchHomePopular;
