import arrayToHash from '../../../../lib/utils/func/arrayToHash';
import selector from '../../../../lib/modules/timelines/selectors/getEvent';

const eventsFixture = require('../../../fixtures/events.json');

describe('Select event from state ', () => {
  const state = {
    timelinesEvents: arrayToHash([eventsFixture[3]])
  };

  it('returns events', () => {
    const value = selector(state, { eventId: 1827420999 });
    expect(value.id).to.deep.equal(1827420999);
  });
});
