import homeBlocksReducer from '../../../../lib/modules/home/reducers/blocks';

const actionFile = '../lib/modules/home/actions/doFetchHomeBlocks';
const homeFixture = require('../../../fixtures/home.json');

describe('Retrieve Home blocks', () => {
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
        blocks: homeFixture.slice(0, 2)
      })
    );

    before(async () => {
      const store = mockStore({
        blocks: [{ id: 1 }, { id: 64 }, { id: 99 }]
      });
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_HOME_BLOCKS');
      expect(action.payload.blocks).to.be.an('array');
    });

    it('validate homeBlocks reducer', () => {
      const stateHomeReducer = homeBlocksReducer(undefined, action);
      expect(Object.values(stateHomeReducer)).to.deep.equal([
        { id: 1 },
        { id: 64 }
      ]);
    });
  });
});
