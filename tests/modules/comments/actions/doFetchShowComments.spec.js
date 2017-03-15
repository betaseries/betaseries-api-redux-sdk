import showsReducer from '../../../../lib/modules/comments/reducers/shows';
import commentsReducer
  from '../../../../lib/modules/comments/reducers/comments';

const actionFile = '../lib/modules/comments/actions/doFetchShowComments';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Retrieve show comments of the member', () => {
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
      expect(action.type).to.equal('FETCH_SHOW_COMMENTS');
      expect(action.payload.showId).to.equal(1);
      expect(action.payload.comments).to.have.lengthOf(2);
    });

    it('validate shows reducer', () => {
      const stateShowsReducer = showsReducer(undefined, action);
      expect(stateShowsReducer).to.deep.equal({ 1: [992, 1279] });
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992', '1279']);
    });
  });
});
