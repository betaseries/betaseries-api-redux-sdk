import selector from '../../../../lib/modules/planning/selectors/getTimeline';

const days = require('../../../fixtures/timelineDays.json');

describe('Select timeline event from state ', () => {
  const state = {
    planningTimeline: { 1: days }
  };

  it('returns timeline range', () => {
    const value = selector(state);
    expect(value.map(day => day.date)).to.deep.equal([
      '2017-04-20',
      '2017-04-24',
      '2017-05-01',
      '2017-05-05',
      '2017-05-08',
      '2017-05-15',
      '2017-05-21',
      '2017-05-22'
    ]);
  });
});
