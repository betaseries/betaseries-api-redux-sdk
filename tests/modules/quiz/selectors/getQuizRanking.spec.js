import selector from '../../../../lib/modules/quiz/selectors/getQuizRanking';

describe('Select quiz ranking from state ', () => {
  const state = {
    quizRanking: { 3: { id: 3 } }
  };

  it('returns ranking if exist', () => {
    const value = selector(state, { quizId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns undefined if quiz does not exist', () => {
    const value = selector(state, { quizId: 5 });
    expect(value).to.equal(undefined);
  });
});
