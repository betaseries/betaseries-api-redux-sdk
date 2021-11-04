import selector from '../../../../lib/modules/home/selectors/getHomeTrailers';

describe('Select trailers from state ', () => {
  const state = {
    homeTrailers: [{ id: 3 }]
  };

  it('returns trailers if exist', () => {
    const value = selector(state);
    expect(value).to.deep.equal([{ id: 3 }]);
  });

  it('returns [] if trailers does not exist', () => {
    const value = selector([]);
    expect(value).to.deep.equal([]);
  });
});
