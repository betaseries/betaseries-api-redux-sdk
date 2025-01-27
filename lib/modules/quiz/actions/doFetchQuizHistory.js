import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  nbpp: 10,
  page: 1
};

/**
 * Retrieve all quiz history
 *
 * **Dispatch**: `FETCH_QUIZ_HISTORY`
 *
 * @alias module:Quiz.doFetchQuizHistory
 * @category actions
 *
 * @example
 * BetaSeries.getAction('quiz', 'doFetchQuizHistory')({
 *   nbpp: 32,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.nbpp]        Limit number of quiz (default `10`)
 * @param {Number}  [obj.page]        Page number (default `1`)
 *
 * @returns {Promise}
 */
const doFetchQuizHistory = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('quiz/history', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_QUIZ_HISTORY,
        payload: {
          ...props,
          quizs: response.quizs || []
        }
      }));

export default doFetchQuizHistory;
