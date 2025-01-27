import selector from '../../../../lib/modules/quiz/selectors/getQuizHistory';

describe('Select quiz history from state', () => {
  const state = {
    quiz: {
      3: { id: 3, user: { date: '0000' } },
      10: { id: 10, user: { date: null } },
      2: { id: 2, user: { date: '1111' } }
    }
  };

  it('returns quiz with no answer if reducer is not empty', () => {
    const value = selector(state);
    expect(value).to.deep.equal([
      { id: 2, user: { date: '1111' } },
      { id: 3, user: { date: '0000' } }
    ]);
  });

  it('returns quiz if user has answer at all quiz and reducer is not empty', () => {
    const value = selector(state);
    expect(value).to.deep.equal([
      { id: 2, user: { date: '1111' } },
      { id: 3, user: { date: '0000' } }
    ]);
  });
});
