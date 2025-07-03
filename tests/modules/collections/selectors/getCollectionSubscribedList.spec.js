import selector
  from '../../../../lib/modules/collections/selectors/getCollectionSubscribedList';

describe('Select subscribed collections from state ', () => {
  const state = {
    collections: { 1: { id: 1 } },
    collectionsSubscribed: { 3: [{ id: 1 }] }
  };

  it('returns subscribed collections if exist', () => {
    const value = selector(state, { memberId: 3 });
    expect(value).to.deep.equal([{ id: 1 }]);
  });
});
