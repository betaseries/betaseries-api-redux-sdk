import selector
  from '../../../../lib/modules/comments/selectors/getPollComments';

describe('Select latest poll from state ', () => {
  const state = {
    commentsPolls: {
      3: [3452345, 13251345, 24532],
      4: [345345314]
    },
    comments: {
      3452345: {
        id: 3452345
      },
      13251345: {
        id: 13251345
      }
    }
  };

  it('returns comments list if exist', () => {
    const value = selector(state, { pollId: 3 });
    expect(value).to.be.a('array');
    expect(value).to.have.lengthOf(2);
  });

  it('returns undefined if poll does not exist in comments reducer', () => {
    const value = selector(state, { pollId: 4 });
    expect(value).to.deep.equal(undefined);
  });

  it('returns undefined if poll does not exist in comments polls reducer', () => {
    const value = selector(state, { pollId: 5 });
    expect(value).to.deep.equal(undefined);
  });
});
