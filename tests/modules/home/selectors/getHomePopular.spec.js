import selector from '../../../../lib/modules/home/selectors/getHomePopular';

describe('Select popular shows from state ', () => {
  const state = {
    homePopular: [{ id: 3 }]
  };

  it('returns popular if exist', () => {
    const value = selector(state);
    expect(value).to.deep.equal([{ id: 3 }]);
  });

  it('returns [] if popular does not exist', () => {
    const value = selector([]);
    expect(value).to.deep.equal([]);
  });
});
