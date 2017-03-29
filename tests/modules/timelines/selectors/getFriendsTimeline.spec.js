import selector
  from '../../../../lib/modules/timelines/selectors/getFriendsTimeline';

const eventsFixture = require('../../../fixtures/events.json');

describe('Select episode from state ', () => {
  const state = {
    timelinesFriends: eventsFixture.slice(0, 2)
  };

  it('returns events', () => {
    const value = selector(state);
    expect(value.map(event => event.id)).to.deep.equal([
      1827424327,
      1827423776
    ]);
  });
});
