import quizReducer from '../../../../lib/modules/quiz/reducers/quiz';

const actionFile = '../lib/modules/quiz/actions/doAnswerQuiz';
const quizFixture = require('../../../fixtures/quiz.json');

describe('Answer quiz', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without quiz on reducer state', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        quiz: quizFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(
        actionToDispatch({
          quizId: 120,
          answers: [{ question: 1, answer: 1, time: 1000 }]
        })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('ANSWER_QUIZ');
      expect(action.payload.quizId).to.equal(120);
      expect(action.payload.answers).to.have.lengthOf(1);
      expect(action.payload.quiz).to.be.an('object');
    });

    it('validate quiz reducer', () => {
      const quizReducerState = quizReducer(undefined, action);
      expect(Object.keys(quizReducerState)).to.deep.equal(['120']);
    });
  });

  describe('call api with quiz already exist on reducer state', () => {
    let action;

    const store = mockStore({
      quiz: {
        [quizFixture[0].id]: quizFixture[0]
      }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        quiz: quizFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({
          quizId: 120,
          answers: [{ question: 1, answer: 1, time: 1000 }]
        })
      );
    });

    it('validate quiz reducer', () => {
      const quizReducerState = quizReducer(store.getState().quiz, action);
      expect(Object.keys(quizReducerState)).to.deep.equal(['120']);
    });
  });
});
