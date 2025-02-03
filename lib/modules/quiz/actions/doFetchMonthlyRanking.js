import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  nbpp: 50,
  page: 1
};

/**
 * Retrieve monthly ranking
 *
 * **Dispatch**: `FETCH_MONTHLY_RANKING`
 *
 * @alias module:Quiz.doFetchMonthlyRanking
 * @category actions
 *
 * @example
 * BetaSeries.getAction('quiz', 'doFetchMonthlyRanking')({
 *   page: 1,
 *   nbpp: 32,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {String}  [obj.month]       Month to get ranking (current month by default, format: Y-M)
 * @param {Number}  [obj.nbpp]        Limit number of quiz (default `50`)
 * @param {Number}  [obj.page]        Page number (default `1`)
 *
 * @returns {Promise}
 */
const doFetchMonthlyRanking = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('quiz/ranking_month', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_MONTHLY_RANKING,
        payload: {
          ...props,
          ranking: response.ranking || []
        }
      }));

export default doFetchMonthlyRanking;
