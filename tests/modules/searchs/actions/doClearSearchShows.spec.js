import showsReducer from '../../../../lib/modules/searchs/reducers/shows';
import actionToDispatch
  from '../../../../lib/modules/searchs/actions/doClearSearchShows';

describe('Clear search shows', () => {
  describe('call action', () => {
    let action;
    let store;

    before(async () => {
      store = mockStore({ searchShows: ['list of shows'] });
      action = await store.dispatch(actionToDispatch());
    });

    it('validate action', () => {
      expect(action.type).to.equal('CLEAR_SEARCH_SHOWS');
    });

    it('validate shows reducer', () => {
      const stateEpisodesReducer = showsReducer(store.searchShows, action);
      expect(Object.keys(stateEpisodesReducer)).to.deep.equal([]);
    });
  });
});
