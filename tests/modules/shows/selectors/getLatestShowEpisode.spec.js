import selector from '../../../../lib/modules/shows/selectors/getLatestShowEpisode';

describe('Select latest episode from state ', () => {
  const state = {
    showsLatestEpisodes: {
      3: 3452345,
      4: 345345314,
    },
    showsEpisodes: {
      3452345: {
        id: 3452345,
      },
    },
  };

  it('returns episode element if exist', () => {
    const value = selector(state, { showId: 3 });
    expect(value).to.deep.equal({ id: 3452345 });
  });

  it('returns null if episode does not exist in episodes reducer', () => {
    const value = selector(state, { showId: 4 });
    expect(value).to.equal(null);
  });

  it('returns null if episode does not exist in latest episodes reducer', () => {
    const value = selector(state, { showId: 5 });
    expect(value).to.equal(null);
  });
});
