import selector from '../../../../lib/modules/comments/selectors/getReplies';

describe('Select replies from state ', () => {
  const state = {
    comments: {
      3452345: {
        id: 3452345,
        inner_id: 1,
        ref_id: 1275,
        in_reply_to: 0
      },
      13251345: {
        id: 13251345,
        inner_id: 2,
        ref_id: 1275,
        in_reply_to: 1
      },
      6876418634: {
        id: 6876418634,
        inner_id: 7,
        ref_id: 1275,
        in_reply_to: 1
      },
      984654: {
        id: 984654,
        inner_id: 3,
        ref_id: 1275,
        in_reply_to: 0
      }
    }
  };

  it('returns replies if exists', () => {
    const value = selector(state, { commentId: 3452345 });
    expect(value).to.be.a('array');
    expect(value).to.have.lengthOf(2);
    expect(value.map(comment => comment.id)).to.deep.equal([
      13251345,
      6876418634
    ]);
  });

  it('returns replies list order desc', () => {
    const value = selector(state, { commentId: 3452345, order: 'desc' });
    expect(value).to.be.a('array');
    expect(value).to.have.lengthOf(2);
    expect(value.map(comment => comment.id)).to.deep.equal([
      6876418634,
      13251345
    ]);
  });

  it('returns undefined if comment does not exist in comments reducer', () => {
    const value = selector(state, { commentId: 34523 });
    expect(value).to.deep.equal(undefined);
  });

  it('returns undefined if replies does not exist in comments reducer', () => {
    const value = selector(state, { commentId: 984654 });
    expect(value).to.deep.equal(undefined);
  });
});
