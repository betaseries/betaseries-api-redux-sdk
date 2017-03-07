import getSelectorProxy from '../../../lib/utils/func/getSelector';

describe('Get selector from BetaSeries modules', () => {
  const getSelector = getSelectorProxy({
    shows: {
      selectors: {
        getShow: () => {},
      },
    },
  });
  
  it('module does not exist', () => {
    expect(() => getSelector('movies', 'getMovies')).to.throw(Error, /Module movies does not exist./);
  });

  it('selector does not exist', () => {
    expect(() => getSelector('shows', 'getMovies')).to.throw(Error, /Selector getMovies does not exist./);
  });

  it('selector exist', () => {
    assert.isFunction(getSelector('shows', 'getShow'));
  });
});
