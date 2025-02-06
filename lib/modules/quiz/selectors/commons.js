import BetaSeries from '../../../betaseries';

/**
 * Retrieve quizs from state
 */
export const getQuizs = state => state.quiz;

/**
 * Retrieve member quizs from state
 */
export const getMembersQuizs = state => state.quizMembers;

/**
 * Retrieve history quizs from state
 */
export const getHistoryQuizs = state => state.quizHistory;

/**
 * Retrieve quizs ranking from state
 */
export const getQuizRanking = state => state.quizRanking;

/**
 * Retrieve global ranking from state
 */
export const getQuizGlobalRanking = state => state.quizGlobalRanking;

/**
 * Retrieve month ranking from state
 */
export const getQuizMonthRanking = state => state.quizMonthRanking;

/**
 * Retrieve quiz ID from state
 */
export const getQuizId = (state, { quizId }) => parseInt(quizId, 10);

/**
 * Retrieve month from parameters
 */
export const getMonth = (state, { month }) => month;

/**
 * Retrieve member ID from parameters
 */
export const getMemberId = (
  state,
  { memberId = BetaSeries.user.userId } = {}
) => parseInt(memberId, 10);
