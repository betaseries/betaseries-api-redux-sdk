import selector from '../../../../lib/modules/polls/selectors/getLastPoll';

describe('Select last poll from state ', () => {
  const state = {
    polls: {
      3: { id: 3 },
      10: { id: 10 },
      2: { id: 2 }
    }
  };

  it('returns last poll if reducer is not empty', () => {
    const value = selector(state);
    expect(value).to.deep.equal({ id: 10 });
  });

  it('returns undefined if polls reducer is empty', () => {
    const value = selector({});
    expect(value).to.equal(undefined);
  });
});
