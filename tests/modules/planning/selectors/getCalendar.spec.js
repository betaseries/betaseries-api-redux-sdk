import selector from '../../../../lib/modules/planning/selectors/getCalendar';

const days = require('../../../fixtures/calendarDays.json');

describe('Select calendar event from state ', () => {
  const state = {
    planningCalendar: { 1: days }
  };

  it('returns calendar range', () => {
    const value = selector(state, { start: '2017-07-03', end: '2017-07-16' });
    expect(value.map(day => day.date)).to.deep.equal([
      '2017-07-08',
      '2017-07-09',
      '2017-07-15',
      '2017-07-16'
    ]);
  });

  it('returns calendar specific day', () => {
    const value = selector(state, { start: '2017-07-01', end: '2017-07-01' });
    expect(value.map(day => day.date)).to.deep.equal(['2017-07-01']);
  });

  it('returns empty array if no event exist', () => {
    const value = selector(state, { start: '2017-08-01', end: '2017-08-30' });
    expect(value).to.deep.equal([]);
  });
});
