import membersReducer from '../../../../lib/modules/comments/reducers/members';
import commentsReducer
  from '../../../../lib/modules/comments/reducers/comments';

const actionFile = '../lib/modules/comments/actions/doFetchMemberComments';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Retrieve member comments of the member', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with member ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        comments: commentsFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ memberId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MEMBER_COMMENTS');
      expect(action.payload.memberId).to.equal(1);
      expect(action.payload.comments).to.have.lengthOf(2);
    });

    it('validate members reducer', () => {
      const stateMembersReducer = membersReducer(undefined, action);
      expect(stateMembersReducer).to.deep.equal({ 1: [992, 1279] });
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['992', '1279']);
    });
  });

  describe('check if reply comments is dispatch on reducer', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        comments: commentsFixture.slice(8, 10)
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ memberId: 1 }));
    });

    it('validate action', () => {
      expect(action.payload.comments).to.have.lengthOf(2);
    });

    it('validate members reducer', () => {
      const stateMembersReducer = membersReducer(undefined, action);
      expect(stateMembersReducer).to.deep.equal({ 1: [5129] });
    });

    it('validate comments reducer', () => {
      const stateCommentsReducer = commentsReducer(undefined, action);
      expect(Object.keys(stateCommentsReducer)).to.deep.equal(['5129', '5155']);
    });
  });
});
