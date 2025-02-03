import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  nbpp: 50,
  page: 1
};

/**
 * Retrieve all ranking for a quiz
 *
 * **Dispatch**: `FETCH_QUIZ_RANKING`
 *
 * @alias module:Quiz.doFetchQuizRanking
 * @category actions
 *
 * @example
 * BetaSeries.getAction('quiz', 'doFetchQuizRanking')({
 *   quizId: 56,
 *   page: 1,
 *   nbpp: 32,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.quizId]      Quiz ID
 * @param {Number}  [obj.nbpp]        Limit number of quiz (default `50`)
 * @param {Number}  [obj.page]        Page number (default `1`)
 *
 * @returns {Promise}
 */
const doFetchQuizRanking = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('quiz/ranking', {
      id: props.quizId || props.id,
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_QUIZ_RANKING,
        payload: {
          ...props,
          ranking: response.ranking || {}
        }
      }));

export default doFetchQuizRanking;
