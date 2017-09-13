import membersNotificationsReducer
  from '../../../../lib/modules/members/reducers/notifications';

const actionFile = '../lib/modules/members/actions/doFetchMemberNotifications';

describe('Retrieve member notifications', () => {
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
            html: 'http://www.google.fr'
          }
        ]
      }
    });

    before(async () => {
      action = await store.dispatch(actionToDispatch({ number: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_NOTIFICATIONS_LIST');
      expect(action.payload.number).to.deep.equal(1);
      expect(action.payload.notifications).to.have.lengthOf(1);
    });

    it('validate notifications reducer', () => {
      const stateNotificationsReducer = membersNotificationsReducer(
        store.getState().membersNotifications,
        action
      );
      expect(stateNotificationsReducer[90]).to.deep.equal([
        {
          id: 189,
          html: 'http://www.google.fr'
        }
      ]);
    });
  });
});
