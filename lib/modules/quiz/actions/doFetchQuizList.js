import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  nbpp: 10,
  page: 1
};

/**
 * Retrieve all quiz
 *
 * **Dispatch**: `FETCH_QUIZ_LIST`
 *
 * @alias module:Quiz.doFetchQuizList
 * @category actions
 *
 * @example
 * BetaSeries.getAction('quiz', 'doFetchQuizList')({
 *   nbpp: 32,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {Number}  [obj.nbpp]        Limit number of quiz (default `10`)
 * @param {Number}  [obj.page]        Page number (default `1`)
 *
 * @returns {Promise}
 */
const doFetchQuizList = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('quiz/list', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_QUIZ_LIST,
        payload: {
          ...props,
          quizs: response.quizs || []
        }
      }));

export default doFetchQuizList;
