import membersReducer from '../../../../lib/modules/members/reducers/members';

const actionFile = '../lib/modules/members/actions/doFetchMemberEmail';

describe('Retrieve user email', () => {
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
        email: 'koko@koko.koko',
        errors: []
      })
    );

    const store = mockStore({
      members: {
        1: {
          email: 'koko@koko.koko'
        }
      }
    });

    before(async () => {
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MEMBER_EMAIL');
      expect(action.payload.email).to.be.a('string');
      expect(action.payload.errors).to.have.lengthOf(0);
    });

    it('validate members reducer', () => {
      const stateMembersReducer = membersReducer(
        store.getState().members,
        action
      );
      expect(Object.keys(stateMembersReducer)).to.deep.equal(['1']);
      expect(stateMembersReducer[1].email).to.deep.equal('koko@koko.koko');
    });
  });
});
