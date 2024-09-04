import selector
  from '../../../../lib/modules/home/selectors/getHomeCollections';

describe('Select collections from state ', () => {
  const state = {
    homeCollections: [{ id: 3 }]
  };

  it('returns collections if exist', () => {
    const value = selector(state);
    expect(value).to.deep.equal([{ id: 3 }]);
  });

  it('returns [] if collections does not exist', () => {
    const value = selector([]);
    expect(value).to.deep.equal([]);
  });
});
