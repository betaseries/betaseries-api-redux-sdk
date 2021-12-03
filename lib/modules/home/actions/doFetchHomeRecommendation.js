import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve Home recommendation shows and reference show
 *
 * **Dispatch**: `FETCH_HOME_RECO`
 *
 * @alias module:Home.doFetchHomeRecommendation
 * @category actions
 *
 * @example
 * BetaSeries.getAction('home', 'doFetchHomeRecommendation')();
 *
 * @param {Object}  [obj]       Accept the following:
  *
 * @returns {Promise}
 */
const doFetchHomeRecommendation = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('home/reco', { ...props }).then(response =>
      dispatch({
        type: constants.FETCH_HOME_RECO,
        payload: {
          ...props,
          shows: response.shows,
          show: response.show || null
        }
      }));

export default doFetchHomeRecommendation;
