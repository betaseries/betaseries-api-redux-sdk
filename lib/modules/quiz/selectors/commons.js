/**
 * Retrieve quizs from state
 */
export const getQuizs = state => state.quiz;

/**
 * Retrieve quiz ID from state
 */
export const getQuizId = (state, { quizId }) => parseInt(quizId, 10);
