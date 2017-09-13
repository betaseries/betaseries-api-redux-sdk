import membersNotificationsReducer
  from '../../../../lib/modules/members/reducers/notifications';

const actionFile = '../lib/modules/members/actions/doMarkAllNotificationsAsRead';

describe('Mark all member notifications as read', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api', () => {
    let actions;

    const actionToDispatch = getInstance(
      Promise.resolve({
        notifications: [
          {
            id: 189,
            html: 'http://www.google.fr'
          }
        ]
      })
    );

    const store = mockStore({
      membersNotifications: {
        90: [
          {
            id: 189,
            html: 'http://www.google.fr',
            seen: '2017-09-13 11:24:23'
          }
        ]
      }
    });

    before(async () => {
      await store.dispatch(actionToDispatch({ number: 1 }));
      actions = store.getActions();
    });

    it('validate action', () => {
      expect(actions[0].type).to.equal('MARK_ALL_NOTIFICATIONS_AS_READ');
      expect(actions[0].payload.number).to.deep.equal(1);
    });

    it('validate notifications reducer', () => {
      const stateNotificationsReducer = membersNotificationsReducer(
        store.getState().membersNotifications,
        actions[0]
      );
      expect(stateNotificationsReducer[90]).to.deep.equal([
        {
          id: 189,
          html: 'http://www.google.fr',
          seen: '2017-09-13 11:24:23'
        }
      ]);
    });
  });
});
