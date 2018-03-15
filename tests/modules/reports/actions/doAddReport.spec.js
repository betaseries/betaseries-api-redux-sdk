const actionFile = '../lib/modules/reports/actions/doAddReport';

describe('Add report', () => {
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
        actionToDispatch({ targetId: 120, type: 'show', reason: 'foo' })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('REPORT');
      expect(action.payload.targetId).to.equal(120);
      expect(action.payload.type).to.equal('show');
      expect(action.payload.reason).to.equal('foo');
    });
  });
});
