import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Add answers on quiz
 *
 * **Dispatch**: `ANSWER_QUIZ`
 *
 * @alias module:Quiz.doAnswerQuiz
 * @category actions
 *
 * @example
 * BetaSeries.getAction('quiz', 'doAnswerQuiz')({
 *   quizId: 120,
 *   answers :[{question: 1, answer: 1, time: 1230}, {question: 2, answer: 2, time: 1230}, {question: 3, answer: 3, time: 1230}, {question: 4, answer: 1, time: 1230}, {question: 5, answer: 3, time: 1230}, {question: 6, answer: 2, time: 1230}, {question: 7, answer: 2, time: 1230}]
 * });
 *
 * @param {Object}  [obj]            Accept the following:
 * @param {Number}  [obj.quizId]     Quiz ID
 * @param {Array}   [obj.answers]    Answers array with question, answer and time in each object
 *
 * @returns {Promise}
 */
const doAnswerQuiz = ({ quizId, answers }) =>
  dispatch =>
    ApiFetch.post(
      'quiz/answer',
      {},
      {
        id: quizId,
        answers
      }
    ).then(response =>
      dispatch({
        type: constants.ANSWER_QUIZ,
        payload: {
          quizId,
          answers,
          quiz: response.quiz || {}
        }
      }));

export default doAnswerQuiz;
