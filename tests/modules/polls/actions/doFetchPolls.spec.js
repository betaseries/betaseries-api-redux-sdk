import pollsReducer from '../../../../lib/modules/polls/reducers/polls';

const actionFile = '../lib/modules/polls/actions/doFetchPolls';
const pollsFixture = require('../../../fixtures/polls.json');

describe('Retrieve polls', () => {
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
        polls: pollsFixture
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_POLLS');
      expect(action.payload.polls).to.have.lengthOf(2);
    });

    it('validate polls reducer', () => {
      const pollReducer = pollsReducer(undefined, action);
      expect(Object.keys(pollReducer)).to.deep.equal(['120', '121']);
    });
  });
});
