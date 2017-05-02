import allReducer from '../../../../lib/modules/searchs/reducers/all';
import actionToDispatch
  from '../../../../lib/modules/searchs/actions/doClearSearchAll';

describe('Clear search all', () => {
  describe('call action', () => {
    let action;
    let store;

    before(async () => {
      store = mockStore({ searchAll: { shows: [], movies: [], users: [] } });
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_SEARCH_ALL');
    });

    it('validate all reducer', () => {
      const stateAllReducer = allReducer(store.searchAll, action);

      expect(stateAllReducer.shows).to.deep.equal(null);
      expect(stateAllReducer.movies).to.deep.equal(null);
      expect(stateAllReducer.users).to.deep.equal(null);
    });
  });
});
