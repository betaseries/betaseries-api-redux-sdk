import selector
  from '../../../../lib/modules/comments/selectors/getEventComments';

describe('Select latest event from state ', () => {
  const state = {
    commentsEvents: {
      3: [3452345, 13251345, 24532],
      4: [345345314]
    },
    comments: {
      3452345: {
        id: 3452345
      },
      13251345: {
        id: 13251345
      }
    }
  };

  it('returns comments list if exist', () => {
    const value = selector(state, { eventId: 3 });
    expect(value).to.be.a('array');
    expect(value).to.have.lengthOf(2);
  });

  it('returns undefined if event does not exist in comments reducer', () => {
    const value = selector(state, { eventId: 4 });
    expect(value).to.deep.equal(undefined);
  });

  it('returns undefined if event does not exist in comments events reducer', () => {
    const value = selector(state, { eventId: 5 });
    expect(value).to.deep.equal(undefined);
  });
});
