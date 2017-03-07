import getActionProxy from '../../../lib/utils/func/getAction';

describe('Get action from BetaSeries modules', () => {
  const getAction = getActionProxy({
    shows: {
      actions: {
        doFetchShow: () => {},
      },
    },
  });
  
  it('module does not exist', () => {
    expect(() => getAction('movies', 'movies')).to.throw(Error, /Module movies does not exist./);
  });

  it('action does not exist', () => {
    expect(() => getAction('shows', 'movies')).to.throw(Error, /Action movies does not exist./);
  });

  it('action exist', () => {
    assert.isFunction(getAction('shows', 'doFetchShow'));
  });
});
