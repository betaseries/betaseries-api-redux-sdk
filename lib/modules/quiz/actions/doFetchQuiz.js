import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve specific quiz
 *
 * **Dispatch**: `FETCH_QUIZ`
 *
 * @alias module:Quiz.doFetchQuiz
 * @category actions
 *
 * @example
 * BetaSeries.getAction('quiz', 'doFetchQuiz')({
 *   quizId: 120,
  * });
 *
 * @param {Object}  [obj]           Accept the following:
 * @param {Number}  [obj.quizId]    Quiz ID
 *
 * @returns {Promise}
 */
const doFetchQuiz = ({ quizId }) =>
  dispatch =>
    ApiFetch.get('quiz/quiz', {
      id: quizId
    }).then(response =>
      dispatch({
        type: constants.FETCH_QUIZ,
        payload: {
          quizId,
          quiz: response.quiz || {}
        }
      }));

export default doFetchQuiz;
