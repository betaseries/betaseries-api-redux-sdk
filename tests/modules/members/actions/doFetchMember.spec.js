import membersReducer from '../../../../lib/modules/members/reducers/members';

const actionFile = '../lib/modules/members/actions/doFetchMember';
const userFixture = require('../../../fixtures/user.json');

describe('Retrieve member', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        member: userFixture
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ memberId: 28113 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MEMBER');
      expect(action.payload.member).to.be.an('object');
      expect(action.payload.memberId).to.deep.equal(28113);
    });

    it('validate members reducer', () => {
      const stateMembersReducer = membersReducer(undefined, action);
      expect(stateMembersReducer).to.be.an('object');
      expect(Object.keys(stateMembersReducer)).to.deep.equal(['28113']);
    });
  });
});
