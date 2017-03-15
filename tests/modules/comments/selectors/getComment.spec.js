import selector from '../../../../lib/modules/comments/selectors/getComment';

describe('Select episode from state ', () => {
  const state = {
    comments: { 3: { id: 3 } }
  };

  it('returns comment if exist', () => {
    const value = selector(state, { commentId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns null if comment does not exist', () => {
    const value = selector(state, { commentId: 5 });
    expect(value).to.equal(undefined);
  });
});
