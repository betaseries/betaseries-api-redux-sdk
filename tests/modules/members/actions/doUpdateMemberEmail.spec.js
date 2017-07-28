import membersReducer from '../../../../lib/modules/members/reducers/members';

const actionFile = '../lib/modules/members/actions/doUpdateMemberEmail';

describe('Update member email', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without error', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        email: 'kiki@kiki.kiki',
        errors: []
      })
    );

    const store = mockStore({
      members: {
        1: {
          email: 'kiki@kiki.kiki'
        }
      }
    });

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({ email: 'kiki@kiki.kiki' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('UPDATE_MEMBER_EMAIL');
      expect(action.payload.email).to.equal('kiki@kiki.kiki');
      expect(action.payload.errors).to.have.lengthOf(0);
    });

    it('validate members reducer', () => {
      const stateMembersReducer = membersReducer(
        store.getState().members,
        action
      );
      expect(Object.keys(stateMembersReducer)).to.deep.equal(['1']);
      expect(stateMembersReducer[1].email).to.deep.equal('kiki@kiki.kiki');
    });
  });

  describe('call api with error', () => {
    let action;
    const store = mockStore({
      members: {
        1: {
          email: 'koko@koko.koko'
        }
      }
    });

    const actionToDispatch = getInstance(
      Promise.resolve({
        email: 'koko@koko.koko',
        errors: [
          {
            name: 'RestError',
            code: 3004,
            message: 'RestError: Le paramètre "email" est invalide.'
          }
        ]
      })
    );

    before(async () => {
      action = await store.dispatch(actionToDispatch({ email: 'koko@koko' }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('UPDATE_MEMBER_EMAIL');
      expect(action.payload.email).to.equal('koko@koko.koko');
      expect(action.payload.errors).to.have.lengthOf(1);
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
