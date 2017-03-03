import constants from '../constants';

const initialState = {};

const arrayToSeasonEpisodeId = episodes => episodes.reduce((sum, episode) => {
  const season = !Object.prototype.hasOwnProperty.call(sum, episode.season) ? {} : (
    sum[episode.season]
  );

  return {
    ...sum,
    [episode.season]: {
      ...season,
      [episode.episode]: episode,
    },
  };
}, {});

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SHOW_EPISODES:
      return {
        ...state,
        [action.payload.showId]: arrayToSeasonEpisodeId(action.payload.episodes),
      };

    default:
      return state;
  }
}
