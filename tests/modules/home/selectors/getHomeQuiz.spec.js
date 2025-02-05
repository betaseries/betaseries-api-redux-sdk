import selector from '../../../../lib/modules/home/selectors/getHomeQuiz';

describe('Select quizs from state ', () => {
  const state = {
    homeQuiz: [{ id: 3 }]
  };

  it('returns quizs if exist', () => {
    const value = selector(state);
    expect(value).to.deep.equal([{ id: 3 }]);
  });

  it('returns [] if quizs does not exist', () => {
    const value = selector([]);
    expect(value).to.deep.equal([]);
  });
});
