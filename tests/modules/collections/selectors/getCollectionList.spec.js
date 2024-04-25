import selector
  from '../../../../lib/modules/collections/selectors/getCollectionList';

describe('Select collections from state ', () => {
  const state = {
    collections: { 1: { id: 1 } },
    collectionsMembers: { 3: [{ id: 1 }] }
  };

  it('returns collections if exist', () => {
    const value = selector(state, { memberId: 3 });
    expect(value).to.deep.equal([{ id: 1 }]);
  });
});
