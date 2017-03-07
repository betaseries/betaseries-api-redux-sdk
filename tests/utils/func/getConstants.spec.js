import getConstantsProxy from '../../../lib/utils/func/getConstants';

describe('Get constants from BetaSeries modules', () => {
  const getConstants = getConstantsProxy({
    shows: {
      constants: {},
    },
  });
  
  it('module does not exist', () => {
    expect(() => getConstants('movies')).to.throw(Error, /Module movies does not exist./);
  });

  it('retrieve constants', () => {
    expect(getConstants('shows')).to.be.an('object');
  });
});
