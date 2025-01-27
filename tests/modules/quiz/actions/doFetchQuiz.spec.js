import quizReducer from '../../../../lib/modules/quiz/reducers/quiz';

const actionFile = '../lib/modules/quiz/actions/doFetchQuiz';
const quizFixture = require('../../../fixtures/quiz.json');

describe('Retrieve quiz', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with quiz ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        quiz: quizFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ quizId: 120 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_QUIZ');
      expect(action.payload.quiz).to.be.an('object');
    });

    it('validate quiz reducer', () => {
      const quizReducerState = quizReducer(undefined, action);
      expect(Object.keys(quizReducerState)).to.deep.equal(['120']);
    });
  });
});
