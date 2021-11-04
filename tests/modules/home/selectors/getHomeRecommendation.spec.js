import selector
  from '../../../../lib/modules/home/selectors/getHomeRecommendation';

describe('Select recommendation shows from state ', () => {
  const state = {
    homeReco: [{ id: 3 }]
  };

  it('returns recommendation shows if exist', () => {
    const value = selector(state);
    expect(value).to.deep.equal([{ id: 3 }]);
  });

  it('returns [] if recommendation shows does not exist', () => {
    const value = selector([]);
    expect(value).to.deep.equal([]);
  });
});
