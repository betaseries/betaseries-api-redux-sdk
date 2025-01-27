import selector from '../../../../lib/modules/quiz/selectors/getQuizList';

describe('Select quiz list from state', () => {
  const state = {
    quiz: {
      3: { id: 3, active: true, user: { date: '0000' } },
      10: { id: 10, active: true, user: { date: null } },
      2: { id: 2, active: true, user: { date: '1111' } }
    }
  };

  it('returns quiz with no answer if reducer is not empty', () => {
    const value = selector(state);
    expect(value).to.deep.equal([
      { id: 10, active: true, user: { date: null } }
    ]);
  });

  it('returns quiz if user has answer at all quiz and reducer is not empty', () => {
    const value = selector(state);
    expect(value).to.deep.equal([
      { id: 10, active: true, user: { date: null } }
    ]);
  });
});
