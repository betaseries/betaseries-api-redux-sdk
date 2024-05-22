import selector
  from '../../../../lib/modules/collections/selectors/getCollection';

describe('Select collection from state ', () => {
  const state = {
    collections: { 3: { id: 3 } },
    collectionsMembers: {}
  };

  it('returns collection if exist', () => {
    const value = selector(state, { id: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns undefined if collection does not exist', () => {
    const value = selector(state, { id: 5 });
    expect(value).to.deep.equal(undefined);
  });
});
