import selector from '../../../../lib/modules/shows/selectors/getShow';

describe('Select show from state ', () => {
  const state = {
    shows: { 3: { id: 3 } }
  };

  it('returns show if exist', () => {
    const value = selector(state, { showId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns undefined if show does not exist', () => {
    const value = selector(state, { showId: 5 });
    expect(value).to.equal(undefined);
  });
});
