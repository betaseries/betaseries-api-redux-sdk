/**
 * Retrieve quizs from state
 */
export const getQuizs = state => state.quiz;

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
