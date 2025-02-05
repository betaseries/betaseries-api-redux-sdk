import homeQuizReducer from '../../../../lib/modules/home/reducers/quiz';

const actionFile = '../lib/modules/home/actions/doFetchHomeQuiz';
const homeFixture = require('../../../fixtures/home.json');

describe('Retrieve Home quiz', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with default params', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        quizs: homeFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({
        quizs: [{ id: 1 }, { id: 64 }, { id: 99 }]
      });

      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_HOME_QUIZ');
      expect(action.payload.quizs).to.be.an('array');
    });

    it('validate homeQuiz reducer', () => {
      const stateHomeReducer = homeQuizReducer(undefined, action);
      expect(Object.values(stateHomeReducer)).to.deep.equal([
        { id: 1 },
        { id: 64 }
      ]);
    });
  });
});
