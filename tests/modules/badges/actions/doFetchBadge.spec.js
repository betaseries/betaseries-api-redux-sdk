import badgesReducer from '../../../../lib/modules/badges/reducers/badges';

const actionFile = '../lib/modules/badges/actions/doFetchBadge';
const badgesFixture = require('../../../fixtures/badges.json');

describe('Retrieve badge', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with badge ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        badge: badgesFixture[0]
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ badgeId: 1 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_BADGE');
      expect(action.payload.badgeId).to.equal(1);
      expect(action.payload.badge).to.be.an('object');
    });

    it('validate badges reducer', () => {
      const stateBadgeReducer = badgesReducer(undefined, action);
      expect(Object.keys(stateBadgeReducer)).to.deep.equal(['1']);
    });
  });
});
