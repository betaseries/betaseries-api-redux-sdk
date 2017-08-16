const actionFile = '../lib/modules/members/actions/doUpdateMemberPassword';

describe('Update member password', () => {
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
        errors: []
      })
    );

    const store = mockStore({});

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({
          current_password: 'kiki',
          new_password: 'koko',
          confirmed_password: 'koko'
        })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('UPDATE_MEMBER_PASSWORD');
      expect(action.payload.current_password).to.equal('kiki');
      expect(action.payload.new_password).to.equal('koko');
      expect(action.payload.confirmed_password).to.equal('koko');
      expect(action.payload.errors).to.have.lengthOf(0);
    });
  });

  describe('call api with error', () => {
    let action;
    const store = mockStore({});

    const actionToDispatch = getInstance(
      Promise.resolve({
        errors: [
          {
            name: 'RestError',
            code: 3004,
            message: 'RestError: Le paramètre "password" est invalide.'
          }
        ]
      })
    );

    before(async () => {
      action = await store.dispatch(
        actionToDispatch({
          current_password: 'kiki',
          new_password: 'kuku',
          confirmed_password: 'koko'
        })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('UPDATE_MEMBER_PASSWORD');
      expect(action.payload.current_password).to.equal('kiki');
      expect(action.payload.new_password).to.equal('kuku');
      expect(action.payload.confirmed_password).to.equal('koko');
      expect(action.payload.errors).to.have.lengthOf(1);
    });
  });
});
