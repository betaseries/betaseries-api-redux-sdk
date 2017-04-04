import pollsReducer from '../../../../lib/modules/polls/reducers/polls';

const actionFile = '../lib/modules/polls/actions/doAnswerPoll';
const pollsFixture = require('../../../fixtures/polls.json');

describe('Answer poll', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without polls on reducer state', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        poll: pollsFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(
        actionToDispatch({ pollId: 120, answer: 1 })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('ANSWER_POLL');
      expect(action.payload.pollId).to.equal(120);
      expect(action.payload.answer).to.equal(1);
      expect(action.payload.poll).to.be.an('object');
    });

    it('validate polls reducer', () => {
      const stateMoviesReducer = pollsReducer(undefined, action);
      expect(Object.keys(stateMoviesReducer)).to.deep.equal(['120']);
    });
  });

  describe('call api with poll already exist on reducer state', () => {
    let action;

    const store = mockStore({
      polls: {
        [pollsFixture[0].id]: pollsFixture[0]
      }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        poll: pollsFixture[0]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ pollId: 120, answer: 1 })
      );
    });

    it('validate polls reducer', () => {
      const stateMoviesReducer = pollsReducer(store.getState().polls, action);
      expect(Object.keys(stateMoviesReducer)).to.deep.equal(['120']);
    });
  });
});
