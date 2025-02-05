import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve quiz list for home page
 *
 * **Dispatch**: `FETCH_HOME_QUIZ`
 *
 * @alias module:Home.doFetchHomeQuiz
 * @category actions
 *
 * @example
 * BetaSeries.getAction('home', 'doFetchHomeQuiz')();
 *
 * @param {Object}  [obj]       Accept the following:
 *
 * @returns {Promise}
 */
const doFetchHomeQuiz = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('home/quizs', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_HOME_QUIZ,
        payload: {
          ...props,
          quizs: response.quizs || []
        }
      }));

export default doFetchHomeQuiz;
