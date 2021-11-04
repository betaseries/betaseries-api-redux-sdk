import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve Home Top 10 shows of the day
 *
 * **Dispatch**: `FETCH_HOME_TOP`
 *
 * @alias module:Home.doFetchHomeTop
 * @category actions
 *
 * @example
 * BetaSeries.getAction('home', 'doFetchHomeTop')({ day: '2021-10-01' });
 *
 * @param {Object}  [obj]       Accept the following:
 * @param {Number}  [obj.day]   Day format 'Y-m-d', past day by default (optional)
 *
 * @returns {Promise}
 */
const doFetchHomeTop = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('home/top', { ...props }).then(response =>
      dispatch({
        type: constants.FETCH_HOME_TOP,
        payload: {
          ...props,
          shows: response.shows
        }
      }));

export default doFetchHomeTop;
