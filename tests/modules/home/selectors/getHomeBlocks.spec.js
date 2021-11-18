import selector from '../../../../lib/modules/home/selectors/getHomeBlocks';

describe('Select blocks from state ', () => {
  const state = {
    homeBlocks: [{ id: 3 }]
  };

  it('returns blocks if exist', () => {
    const value = selector(state);
    expect(value).to.deep.equal([{ id: 3 }]);
  });

  it('returns [] if blocks does not exist', () => {
    const value = selector([]);
    expect(value).to.deep.equal([]);
  });
});
