import selector
  from '../../../../lib/modules/home/selectors/getHomePopularArticles';

describe('Select popular shows from state ', () => {
  const state = {
    homeArticles: [{ id: 3 }]
  };

  it('returns articles if exist', () => {
    const value = selector(state);
    expect(value).to.deep.equal([{ id: 3 }]);
  });

  it('returns [] if articles does not exist', () => {
    const value = selector([]);
    expect(value).to.deep.equal([]);
  });
});
