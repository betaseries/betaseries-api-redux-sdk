import membersReducer from '../../../../lib/modules/comments/reducers/members';

const actionFile = '../lib/modules/comments/actions/doClearMemberComments';
const commentsFixture = require('../../../fixtures/comments.json');

describe('Clear member comments', () => {
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
      expect(action.type).to.equal('CLEAR_MEMBER_COMMENTS');
      expect(action.payload.memberId).to.equal(1);
    });

    it('validate members reducer', () => {
      const stateMembersReducer = membersReducer(undefined, action);
      expect(stateMembersReducer).to.deep.equal({});
    });
  });
});
