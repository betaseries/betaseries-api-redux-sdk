import membersNotificationsReducer
  from '../../../../lib/modules/members/reducers/notifications';

const actionFile = '../lib/modules/members/actions/doClearMemberNotifications';

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

    const actionToDispatch = getInstance(Promise.resolve());

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
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_NOTIFICATIONS_LIST');
    });

    it('validate notifications reducer', () => {
      const stateNotificationsReducer = membersNotificationsReducer(
        undefined,
        action
      );
      expect(stateNotificationsReducer).to.deep.equal({});
    });
  });
});
