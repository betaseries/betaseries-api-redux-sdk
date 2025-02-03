/**
 * Retrieve quizs from state
 */
export const getQuizs = state => state.quiz;

/**
 * Retrieve quizs ranking from state
 */
export const getQuizsRanking = state => state.quizRanking;

/**
 * Retrieve quiz ID from state
 */
export const getQuizId = (state, { quizId }) => parseInt(quizId, 10);

/**
 * Retrieve month from parameters
 */
export const getMonth = (state, { month }) => month;
