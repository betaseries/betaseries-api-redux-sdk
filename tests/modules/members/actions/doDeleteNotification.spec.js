import membersNotificationsReducer
  from '../../../../lib/modules/members/reducers/notifications';

const actionFile = '../lib/modules/members/actions/doDeleteNotification';

describe('delete notification', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { remove: () => promise }
    }).default;
  }

  describe('call api', () => {
    let action;

    const actionToDispatch = getInstance(Promise.resolve({}));

    const store = mockStore({
      membersNotifications: {
        90: []
      }
    });

    before(async () => {
      await store.dispatch(actionToDispatch({ notificationId: 12 }));
      action = store.getActions()[0];
    });

    it('validate delete notification action', () => {
      expect(action.type).to.equal('DELETE_NOTIFICATION');
      expect(action.payload.notificationId).to.deep.equal(12);
    });

    it('validate notifications reducer', () => {
      const stateNotificationsReducer = membersNotificationsReducer(
        store.getState().membersNotifications,
        action
      );
      expect(stateNotificationsReducer[90]).to.deep.equal([]);
    });
  });
});
