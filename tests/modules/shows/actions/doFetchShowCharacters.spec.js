import charactersReducer
  from '../../../../lib/modules/shows/reducers/characters';

const actionFile = '../lib/modules/shows/actions/doFetchShowCharacters';

describe('Retrieve characters of the show', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { get: () => promise }
    }).default;
  }

  describe('call api with show ID', () => {
    let action;

    const actionToDispatch = getInstance(
      Promise.resolve({
        characters: 'characters list'
      })
    );

    before(async () => {
      const store = mockStore({});
      action = await store.dispatch(actionToDispatch({ showId: 10212 }));
    });

    it('validate action', () => {
      expect(action.type).to.equal('FETCH_SHOW_CHARACTERS');
      expect(action.payload.showId).to.deep.equal(10212);
      expect(action.payload.characters).to.deep.equal('characters list');
    });

    it('validate characters reducer', () => {
      const stateCharactersReducer = charactersReducer(undefined, action);
      expect(Object.keys(stateCharactersReducer)).to.deep.equal(['10212']);
    });
  });
});
