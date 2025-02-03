import quizReducer from '../../../../lib/modules/quiz/reducers/ranking';

const actionFile = '../lib/modules/quiz/actions/doFetchMonthlyRanking';
const quizFixture = require('../../../fixtures/quiz.json');

describe('Retrieve monthly ranking', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with default props', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        ranking: quizFixture
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MONTHLY_RANKING');
      expect(action.payload.ranking).to.have.lengthOf(2);
    });

    it('validate quiz reducer', () => {
      const quizReducerState = quizReducer(undefined, action);
      expect(Object.keys(quizReducerState)).to.have.lengthOf(2);
    });
  });
});
