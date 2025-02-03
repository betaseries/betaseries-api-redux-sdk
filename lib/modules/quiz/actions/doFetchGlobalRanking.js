import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  nbpp: 50,
  page: 1
};

/**
 * Retrieve global ranking
 *
 * **Dispatch**: `FETCH_GLOBAL_RANKING`
 *
 * @alias module:Quiz.doFetchGlobalRanking
 * @category actions
 *
 * @example
 * BetaSeries.getAction('quiz', 'doFetchGlobalRanking')({
 *   page: 1,
 *   nbpp: 32,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.nbpp]        Limit number of quiz (default `50`)
 * @param {Number}  [obj.page]        Page number (default `1`)
 *
 * @returns {Promise}
 */
const doFetchGlobalRanking = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('quiz/ranking_global', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_GLOBAL_RANKING,
        payload: {
          ...props,
          ranking: response.ranking || []
        }
      }));

export default doFetchGlobalRanking;
