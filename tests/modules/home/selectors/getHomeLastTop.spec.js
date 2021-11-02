import selector from '../../../../lib/modules/home/selectors/getHomeLastTop';

describe('Select last top10 from state ', () => {
  const state = {
    top: [{ id: 3 }]
  };

  it('returns top if exist', () => {
    const value = selector(state);
    expect(value).to.deep.equal([{ id: 3 }]);
  });

  it('returns [] if top does not exist', () => {
    const value = selector([]);
    expect(value).to.deep.equal([]);
  });
});
