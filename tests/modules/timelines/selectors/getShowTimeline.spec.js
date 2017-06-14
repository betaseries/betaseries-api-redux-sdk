import arrayToHash from '../../../../lib/utils/func/arrayToHash';
import arrayToID from '../../../../lib/utils/func/arrayToID';
import selector
  from '../../../../lib/modules/timelines/selectors/getShowTimeline';

const eventsFixture = require('../../../fixtures/events.json');

describe('Select event from state ', () => {
  const state = {
    timelinesEvents: arrayToHash(eventsFixture.slice(0, 2)),
    timelinesShows: {
      3: arrayToID(eventsFixture.slice(0, 2))
    }
  };

  it('returns events', () => {
    const value = selector(state, { showId: 3 });
    expect(value.map(event => event.id)).to.deep.equal([
      1827424327,
      1827423776
    ]);
  });

  it('show has not event', () => {
    const value = selector(state, { showId: 4 });
    expect(value).to.deep.equal(undefined);
  });
});
