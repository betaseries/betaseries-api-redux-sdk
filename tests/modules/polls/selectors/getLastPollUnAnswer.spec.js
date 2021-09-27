import selector
  from '../../../../lib/modules/polls/selectors/getLastPollUnAnswer';

describe('Select last poll with no answer from state ', () => {
  const state = {
    polls: {
      3: { id: 3 },
      10: { id: 10, last: true, user_answer: null },
      2: { id: 2 }
    }
  };

  it('returns last poll with no answer if reducer is not empty', () => {
    const value = selector(state);
    expect(value).to.deep.equal({ id: 10, last: true, user_answer: null });
  });

  it('returns last poll if user has answer at all polls and reducer is not empty', () => {
    const value = selector(state);
    expect(value).to.deep.equal({ id: 10, last: true, user_answer: null });
  });

  it('returns undefined if polls reducer is empty', () => {
    const value = selector({});
    expect(value).to.equal(undefined);
  });
});
