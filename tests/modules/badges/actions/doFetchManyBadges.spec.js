import badgesReducer from '../../../../lib/modules/badges/reducers/badges';

const actionFile = '../lib/modules/badges/actions/doFetchManyBadges';
const badgesFixture = require('../../../fixtures/badges.json');

describe('Retrieve many badges', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with all badges ID list', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        badges: badgesFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({
        badges: {}
      });
      action = await store.dispatch(actionToDispatch({ badgeIds: [1, 64] }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_BADGES');
      expect(action.payload.badgeIds).to.deep.equal([1, 64]);
      expect(action.payload.badges).to.have.lengthOf(2);
    });

    it('validate badges reducer', () => {
      const stateBadgesReducer = badgesReducer(undefined, action);
      expect(Object.keys(stateBadgesReducer)).to.deep.equal(['1', '64']);
    });
  });

  describe('clean badges ID who already exist on state before dispatch', () => {
    let action;
    let store;

    const actionToDispatch = getInstance(
      Promise.resolve({
        badges: badgesFixture.slice(0, 2)
      })
    );

    before(async () => {
      store = mockStore({
        badges: { 99: { id: 99 } }
      });

      action = await store.dispatch(
        actionToDispatch({ badgeIds: [1, 64, 99] })
      );
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_BADGES');
      expect(action.payload.badgeIds).to.deep.equal([1, 64]);
      expect(action.payload.badges).to.have.lengthOf(2);
    });

    it('validate badges reducer', () => {
      const stateBadgesReducer = badgesReducer(store.getState().badges, action);
      expect(Object.keys(stateBadgesReducer)).to.deep.equal(['1', '64', '99']);
    });
  });

  describe('api returns only one badge', () => {
    let action;
    let store;

    const actionToDispatch = getInstance(
      Promise.resolve({
        badge: badgesFixture[0]
      })
    );

    before(async () => {
      store = mockStore({
        badges: { 99: { id: 99 } }
      });

      action = await store.dispatch(actionToDispatch({ badgeIds: [99, 1] }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_MANY_BADGES');
      expect(action.payload.badgeIds).to.deep.equal([1]);
      expect(action.payload.badges).to.have.lengthOf(1);
    });

    it('validate badges reducer', () => {
      const stateBadgesReducer = badgesReducer(store.getState().badges, action);
      expect(Object.keys(stateBadgesReducer)).to.deep.equal(['1', '99']);
    });
  });
});
