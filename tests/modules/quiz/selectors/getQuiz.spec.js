import selector from '../../../../lib/modules/quiz/selectors/getQuiz';

describe('Select quiz from state ', () => {
  const state = {
    quiz: { 3: { id: 3 } }
  };

  it('returns quiz if exist', () => {
    const value = selector(state, { quizId: 3 });
    expect(value).to.deep.equal({ id: 3 });
  });

  it('returns undefined if quiz does not exist', () => {
    const value = selector(state, { quizId: 5 });
    expect(value).to.equal(undefined);
  });
});
