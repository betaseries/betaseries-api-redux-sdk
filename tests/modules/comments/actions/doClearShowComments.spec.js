import showsReducer from '../../../../lib/modules/comments/reducers/shows';

const actionFile = '../lib/modules/comments/actions/doClearShowComments';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Clear show comments', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with show ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        comments: commentsFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ showId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_SHOW_COMMENTS');
      expect(action.payload.showId).to.equal(1);
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(undefined, action);
      expect(stateShowsReducer).to.deep.equal({});
    });
  });
});
