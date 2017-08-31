import membersEpisodesToSeeReducer
  from '../../../../lib/modules/shows/reducers/membersEpisodesToSee';

const actionFile = '../lib/modules/shows/actions/doMarkEpisodeAsHidden';

describe('Mark episode as downloaded', () => {
  /**
   * getInstance method
   */
  function getInstance(promise) {
    return proxyquire.noCallThru().load(actionFile, {
      '../../../utils/fetch/ApiFetch': { post: () => promise }
    }).default;
  }

  describe('call api with episodeId already exist on reducer state', () => {
    let action;

    const store = mockStore({
      showsMembersEpisodesToSee: {
        1: [239480, 354354]
      }
    });

    const actionToDispatch = getInstance(Promise.resolve());

    before(async () => {
      await store.dispatch(actionToDispatch({ episodeId: 239480 }));
      action = store.getActions()[0];
    });

    it('validate episode as hidden action', () => {
      expect(action.type).to.equal('MARK_EPISODE_AS_HIDDEN');
      expect(action.payload.episodeIds).to.deep.equal([239480]);
    });

    it('validate membersEpisodesToSee reducer', () => {
      const stateMembersEpisodesToSeeReducer = membersEpisodesToSeeReducer(
        store.getState().showsMembersEpisodesToSee,
        action
      );

      expect(stateMembersEpisodesToSeeReducer[1]).to.deep.equal([354354]);
    });
  });

  describe('call api with episodeId not existing on reducer state', () => {
    let action;

    const store = mockStore({
      showsMembersEpisodesToSee: {
        1: [354354, 123456]
      }
    });

    const actionToDispatch = getInstance(Promise.resolve());

    before(async () => {
      await store.dispatch(actionToDispatch({ episodeId: 239480 }));
      action = store.getActions()[0];
    });

    it('validate episode as downloaded action', () => {
      expect(action.type).to.equal('MARK_EPISODE_AS_HIDDEN');
      expect(action.payload.episodeIds).to.deep.equal([239480]);
    });

    it('validate membersEpisodesToSee reducer', () => {
      const stateMembersEpisodesToSeeReducer = membersEpisodesToSeeReducer(
        store.getState().showsMembersEpisodesToSee,
        action
      );

      expect(stateMembersEpisodesToSeeReducer[1]).to.deep.equal([
        354354,
        123456
      ]);
    });
  });
});
