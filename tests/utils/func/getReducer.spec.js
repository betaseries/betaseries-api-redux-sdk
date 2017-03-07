import getReducerProxy from '../../../lib/utils/func/getReducer';

describe('Get reducer from BetaSeries modules', () => {
  const getReducer = getReducerProxy({
    shows: {
      reducers: {
        shows: {},
        episodes: {},
      },
    },
  });
  
  it('module does not exist', () => {
    expect(() => getReducer('movies', 'movies')).to.throw(Error, /Module movies does not exist./);
  });

  it('reducer does not exist', () => {
    expect(() => getReducer('shows', 'movies')).to.throw(Error, /Reducer movies does not exist./);
  });

  it('reducer has the same name as the module', () => {
    expect(Object.keys(getReducer('shows', 'shows'))).to.deep.equal(['shows']);
  });

  it('reducer has not the same name as the module', () => {
    expect(Object.keys(getReducer('shows', 'episodes'))).to.deep.equal(['showsEpisodes']);
  });
});
