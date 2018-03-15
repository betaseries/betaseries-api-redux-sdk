const actionFile = '../lib/modules/reports/actions/doAskUpdate';

describe('Ask update', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api without reports on reducer state', () => {
    let action;

    const actionToDispatch = getInstance(Promise.resolve());

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(
        actionToDispatch({ id: 120, type: 'show' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('UPDATE');
      expect(action.payload.id).to.equal(120);
      expect(action.payload.type).to.equal('show');
    });
  });
});
