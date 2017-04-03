import doFetchBadgeBadges from './badges/actions/doFetchBadge';
import badgesBadges from './badges/reducers/badges';
import commonsBadges from './badges/selectors/commons';
import getBadgeBadges from './badges/selectors/getBadge';
import constantsBadges from './badges/constants';
import doCommentEventComments from './comments/actions/doCommentEvent';
import doFetchCommentComments from './comments/actions/doFetchComment';
import doFetchEpisodeCommentsComments from './comments/actions/doFetchEpisodeComments';
import doFetchEventCommentsComments from './comments/actions/doFetchEventComments';
import doFetchShowCommentsComments from './comments/actions/doFetchShowComments';
import commentsComments from './comments/reducers/comments';
import episodesComments from './comments/reducers/episodes';
import eventsComments from './comments/reducers/events';
import showsComments from './comments/reducers/shows';
import commonsComments from './comments/selectors/commons';
import getCommentComments from './comments/selectors/getComment';
import getEpisodeCommentsComments from './comments/selectors/getEpisodeComments';
import getEventCommentsComments from './comments/selectors/getEventComments';
import getShowCommentsComments from './comments/selectors/getShowComments';
import constantsComments from './comments/constants';
import doFetchMemberMembers from './members/actions/doFetchMember';
import doFetchUserMembers from './members/actions/doFetchUser';
import membersMembers from './members/reducers/members';
import commonsMembers from './members/selectors/commons';
import getMemberMembers from './members/selectors/getMember';
import getUserMembers from './members/selectors/getUser';
import constantsMembers from './members/constants';
import doFetchFavoriteMoviesMovies from './movies/actions/doFetchFavoriteMovies';
import doFetchManyMoviesMovies from './movies/actions/doFetchManyMovies';
import doFetchMemberMoviesMovies from './movies/actions/doFetchMemberMovies';
import doFetchMovieMovies from './movies/actions/doFetchMovie';
import doFetchMovieCharactersMovies from './movies/actions/doFetchMovieCharacters';
import doRateMovieMovies from './movies/actions/doRateMovie';
import doRemoveMovieMemberMovies from './movies/actions/doRemoveMovieMember';
import doUpdateMovieStateMovies from './movies/actions/doUpdateMovieState';
import charactersMovies from './movies/reducers/characters';
import favoritesMovies from './movies/reducers/favorites';
import membersMovies from './movies/reducers/members';
import moviesMovies from './movies/reducers/movies';
import commonsMovies from './movies/selectors/commons';
import getMemberMoviesMovies from './movies/selectors/getMemberMovies';
import getMovieMovies from './movies/selectors/getMovie';
import constantsMovies from './movies/constants';
import doClearSearchShowsSearchs from './searchs/actions/doClearSearchShows';
import doSearchShowsSearchs from './searchs/actions/doSearchShows';
import showsSearchs from './searchs/reducers/shows';
import commonsSearchs from './searchs/selectors/commons';
import getSearchShowsSearchs from './searchs/selectors/getSearchShows';
import constantsSearchs from './searchs/constants';
import doFetchEpisodeShows from './shows/actions/doFetchEpisode';
import doFetchEpisodeByCodeShows from './shows/actions/doFetchEpisodeByCode';
import doFetchEpisodesListShows from './shows/actions/doFetchEpisodesList';
import doFetchFavoriteShowsShows from './shows/actions/doFetchFavoriteShows';
import doFetchLatestEpisodeShows from './shows/actions/doFetchLatestEpisode';
import doFetchManyEpisodesShows from './shows/actions/doFetchManyEpisodes';
import doFetchManyShowsShows from './shows/actions/doFetchManyShows';
import doFetchShowShows from './shows/actions/doFetchShow';
import doFetchShowCharactersShows from './shows/actions/doFetchShowCharacters';
import doFetchShowEpisodesShows from './shows/actions/doFetchShowEpisodes';
import doFetchSimilarShowsShows from './shows/actions/doFetchSimilarShows';
import charactersShows from './shows/reducers/characters';
import episodesShows from './shows/reducers/episodes';
import favoritesShows from './shows/reducers/favorites';
import latestEpisodesShows from './shows/reducers/latestEpisodes';
import membersEpisodesToSeeShows from './shows/reducers/membersEpisodesToSee';
import showsShows from './shows/reducers/shows';
import similarsShows from './shows/reducers/similars';
import commonsShows from './shows/selectors/commons';
import getEpisodeShows from './shows/selectors/getEpisode';
import getEpisodesToSeeShows from './shows/selectors/getEpisodesToSee';
import getLatestShowEpisodeShows from './shows/selectors/getLatestShowEpisode';
import getShowShows from './shows/selectors/getShow';
import getShowEpisodeByCodeShows from './shows/selectors/getShowEpisodeByCode';
import getShowEpisodesShows from './shows/selectors/getShowEpisodes';
import getSimilarShowsShows from './shows/selectors/getSimilarShows';
import constantsShows from './shows/constants';
import doFetchFriendsTimelineTimelines from './timelines/actions/doFetchFriendsTimeline';
import friendsTimelines from './timelines/reducers/friends';
import commonsTimelines from './timelines/selectors/commons';
import getFriendsTimelineTimelines from './timelines/selectors/getFriendsTimeline';
import constantsTimelines from './timelines/constants';

export default {
  badges: {
    actions: {
      doFetchBadge: doFetchBadgeBadges,
    },
    reducers: {
      badges: badgesBadges,
    },
    selectors: {
      commons: commonsBadges,
      getBadge: getBadgeBadges,
    },
    constants: constantsBadges,
  },
  comments: {
    actions: {
      doCommentEvent: doCommentEventComments,
      doFetchComment: doFetchCommentComments,
      doFetchEpisodeComments: doFetchEpisodeCommentsComments,
      doFetchEventComments: doFetchEventCommentsComments,
      doFetchShowComments: doFetchShowCommentsComments,
    },
    reducers: {
      comments: commentsComments,
      episodes: episodesComments,
      events: eventsComments,
      shows: showsComments,
    },
    selectors: {
      commons: commonsComments,
      getComment: getCommentComments,
      getEpisodeComments: getEpisodeCommentsComments,
      getEventComments: getEventCommentsComments,
      getShowComments: getShowCommentsComments,
    },
    constants: constantsComments,
  },
  members: {
    actions: {
      doFetchMember: doFetchMemberMembers,
      doFetchUser: doFetchUserMembers,
    },
    reducers: {
      members: membersMembers,
    },
    selectors: {
      commons: commonsMembers,
      getMember: getMemberMembers,
      getUser: getUserMembers,
    },
    constants: constantsMembers,
  },
  movies: {
    actions: {
      doFetchFavoriteMovies: doFetchFavoriteMoviesMovies,
      doFetchManyMovies: doFetchManyMoviesMovies,
      doFetchMemberMovies: doFetchMemberMoviesMovies,
      doFetchMovie: doFetchMovieMovies,
      doFetchMovieCharacters: doFetchMovieCharactersMovies,
      doRateMovie: doRateMovieMovies,
      doRemoveMovieMember: doRemoveMovieMemberMovies,
      doUpdateMovieState: doUpdateMovieStateMovies,
    },
    reducers: {
      characters: charactersMovies,
      favorites: favoritesMovies,
      members: membersMovies,
      movies: moviesMovies,
    },
    selectors: {
      commons: commonsMovies,
      getMemberMovies: getMemberMoviesMovies,
      getMovie: getMovieMovies,
    },
    constants: constantsMovies,
  },
  searchs: {
    actions: {
      doClearSearchShows: doClearSearchShowsSearchs,
      doSearchShows: doSearchShowsSearchs,
    },
    reducers: {
      shows: showsSearchs,
    },
    selectors: {
      commons: commonsSearchs,
      getSearchShows: getSearchShowsSearchs,
    },
    constants: constantsSearchs,
  },
  shows: {
    actions: {
      doFetchEpisode: doFetchEpisodeShows,
      doFetchEpisodeByCode: doFetchEpisodeByCodeShows,
      doFetchEpisodesList: doFetchEpisodesListShows,
      doFetchFavoriteShows: doFetchFavoriteShowsShows,
      doFetchLatestEpisode: doFetchLatestEpisodeShows,
      doFetchManyEpisodes: doFetchManyEpisodesShows,
      doFetchManyShows: doFetchManyShowsShows,
      doFetchShow: doFetchShowShows,
      doFetchShowCharacters: doFetchShowCharactersShows,
      doFetchShowEpisodes: doFetchShowEpisodesShows,
      doFetchSimilarShows: doFetchSimilarShowsShows,
    },
    reducers: {
      characters: charactersShows,
      episodes: episodesShows,
      favorites: favoritesShows,
      latestEpisodes: latestEpisodesShows,
      membersEpisodesToSee: membersEpisodesToSeeShows,
      shows: showsShows,
      similars: similarsShows,
    },
    selectors: {
      commons: commonsShows,
      getEpisode: getEpisodeShows,
      getEpisodesToSee: getEpisodesToSeeShows,
      getLatestShowEpisode: getLatestShowEpisodeShows,
      getShow: getShowShows,
      getShowEpisodeByCode: getShowEpisodeByCodeShows,
      getShowEpisodes: getShowEpisodesShows,
      getSimilarShows: getSimilarShowsShows,
    },
    constants: constantsShows,
  },
  timelines: {
    actions: {
      doFetchFriendsTimeline: doFetchFriendsTimelineTimelines,
    },
    reducers: {
      friends: friendsTimelines,
    },
    selectors: {
      commons: commonsTimelines,
      getFriendsTimeline: getFriendsTimelineTimelines,
    },
    constants: constantsTimelines,
  },
};
