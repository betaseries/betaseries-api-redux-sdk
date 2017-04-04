import selector from '../../../../lib/modules/polls/selectors/getPoll';

describe('Select poll from state ', () => {
  const state = {
    polls: { 3: { id: 3 } }
  };

  it('returns poll if exist', () => {
    const value = selector(state, { pollId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns undefined if poll does not exist', () => {
    const value = selector(state, { pollId: 5 });
    expect(value).to.equal(undefined);
  });
});
