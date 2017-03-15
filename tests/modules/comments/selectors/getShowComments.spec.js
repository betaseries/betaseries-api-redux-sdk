import selector from '../../../../lib/modules/comments/selectors/getShowComments';

describe('Select latest episode from state ', () => {
  const state = {
    commentsShows: {
      3: [3452345, 13251345, 24532],
      4: [345345314],
    },
    comments: {
      3452345: {
        id: 3452345,
      },
      13251345: {
        id: 13251345,
      },
    },
  };

  it('returns comments list if exist', () => {
    const value = selector(state, { showId: 3 });
    expect(value).to.be.a('array');
    expect(value).to.have.lengthOf(2);
  });

  it('returns undefined if show does not exist in comments reducer', () => {
    const value = selector(state, { showId: 4 });
    expect(value).to.deep.equal(undefined);
  });

  it('returns undefined if episode does not exist in comments shows reducer', () => {
    const value = selector(state, { showId: 5 });
    expect(value).to.deep.equal(undefined);
  });
});
