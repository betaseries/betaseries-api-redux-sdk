import pollsReducer from '../../../../lib/modules/polls/reducers/polls';

const actionFile = '../lib/modules/polls/actions/doFetchPoll';
const pollsFixture = require('../../../fixtures/polls.json');

describe('Retrieve poll', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with poll ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        poll: pollsFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ pollId: 120 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_POLL');
      expect(action.payload.poll).to.be.an('object');
    });

    it('validate polls reducer', () => {
      const pollReducer = pollsReducer(undefined, action);
      expect(Object.keys(pollReducer)).to.deep.equal(['120']);
    });
  });
});
