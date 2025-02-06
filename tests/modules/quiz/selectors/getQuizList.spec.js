import selector from '../../../../lib/modules/quiz/selectors/getQuizList';

describe('Select quizs from state ', () => {
  const state = {
    quiz: { 1: { id: 1, active: true, user: { date: null } } },
    quizMembers: { 3: [{ id: 1, active: true, user: { date: null } }] }
  };

  it('returns quiz if exist', () => {
    const value = selector(state, { memberId: 3 });
    expect(value).to.deep.equal([
      { id: 1, active: true, user: { date: null } }
    ]);
  });
});
