import doFetchBadgeBadges from './badges/actions/doFetchBadge';
import doFetchManyBadgesBadges from './badges/actions/doFetchManyBadges';
import badgesBadges from './badges/reducers/badges';
import commonsBadges from './badges/selectors/commons';
import getBadgeBadges from './badges/selectors/getBadge';
import constantsBadges from './badges/constants';
import doCommentEpisodeComments from './comments/actions/doCommentEpisode';
import doCommentEventComments from './comments/actions/doCommentEvent';
import doCommentMemberComments from './comments/actions/doCommentMember';
import doCommentMovieComments from './comments/actions/doCommentMovie';
import doCommentShowComments from './comments/actions/doCommentShow';
import doFetchCommentComments from './comments/actions/doFetchComment';
import doFetchEpisodeCommentsComments from './comments/actions/doFetchEpisodeComments';
import doFetchEventCommentsComments from './comments/actions/doFetchEventComments';
import doFetchMemberCommentsComments from './comments/actions/doFetchMemberComments';
import doFetchMovieCommentsComments from './comments/actions/doFetchMovieComments';
import doFetchRepliesComments from './comments/actions/doFetchReplies';
import doFetchShowCommentsComments from './comments/actions/doFetchShowComments';
import doRemoveCommentComments from './comments/actions/doRemoveComment';
import commentsComments from './comments/reducers/comments';
import episodesComments from './comments/reducers/episodes';
import eventsComments from './comments/reducers/events';
import membersComments from './comments/reducers/members';
import moviesComments from './comments/reducers/movies';
import showsComments from './comments/reducers/shows';
import commonsComments from './comments/selectors/commons';
import getCommentComments from './comments/selectors/getComment';
import getEpisodeCommentsComments from './comments/selectors/getEpisodeComments';
import getEventCommentsComments from './comments/selectors/getEventComments';
import getMemberCommentsComments from './comments/selectors/getMemberComments';
import getMovieCommentsComments from './comments/selectors/getMovieComments';
import getRepliesComments from './comments/selectors/getReplies';
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
import doAnswerPollPolls from './polls/actions/doAnswerPoll';
import doFetchLastPollPolls from './polls/actions/doFetchLastPoll';
import pollsPolls from './polls/reducers/polls';
import commonsPolls from './polls/selectors/commons';
import getLastPollPolls from './polls/selectors/getLastPoll';
import getPollPolls from './polls/selectors/getPoll';
import constantsPolls from './polls/constants';
import doClearSearchAllSearchs from './searchs/actions/doClearSearchAll';
import doClearSearchShowsSearchs from './searchs/actions/doClearSearchShows';
import doSearchAllSearchs from './searchs/actions/doSearchAll';
import doSearchShowsSearchs from './searchs/actions/doSearchShows';
import allSearchs from './searchs/reducers/all';
import showsSearchs from './searchs/reducers/shows';
import commonsSearchs from './searchs/selectors/commons';
import getSearchAllSearchs from './searchs/selectors/getSearchAll';
import getSearchShowsSearchs from './searchs/selectors/getSearchShows';
import constantsSearchs from './searchs/constants';
import doAddShowShows from './shows/actions/doAddShow';
import doFetchDiscoverShowsShows from './shows/actions/doFetchDiscoverShows';
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
import doRateShowShows from './shows/actions/doRateShow';
import doRemoveShowShows from './shows/actions/doRemoveShow';
import charactersShows from './shows/reducers/characters';
import discoverShows from './shows/reducers/discover';
import episodesShows from './shows/reducers/episodes';
import favoritesShows from './shows/reducers/favorites';
import latestEpisodesShows from './shows/reducers/latestEpisodes';
import membersEpisodesToSeeShows from './shows/reducers/membersEpisodesToSee';
import showsShows from './shows/reducers/shows';
import similarsShows from './shows/reducers/similars';
import commonsShows from './shows/selectors/commons';
import getDiscoverShowsShows from './shows/selectors/getDiscoverShows';
import getEpisodeShows from './shows/selectors/getEpisode';
import getEpisodesToSeeShows from './shows/selectors/getEpisodesToSee';
import getFavoriteShowsShows from './shows/selectors/getFavoriteShows';
import getLatestShowEpisodeShows from './shows/selectors/getLatestShowEpisode';
import getShowShows from './shows/selectors/getShow';
import getShowEpisodeByCodeShows from './shows/selectors/getShowEpisodeByCode';
import getShowEpisodesShows from './shows/selectors/getShowEpisodes';
import getSimilarShowsShows from './shows/selectors/getSimilarShows';
import constantsShows from './shows/constants';
import doFetchEventTimelines from './timelines/actions/doFetchEvent';
import doFetchFeedTimelineTimelines from './timelines/actions/doFetchFeedTimeline';
import doFetchFriendsTimelineTimelines from './timelines/actions/doFetchFriendsTimeline';
import doFetchMemberTimelineTimelines from './timelines/actions/doFetchMemberTimeline';
import doFetchShowTimelineTimelines from './timelines/actions/doFetchShowTimeline';
import eventsTimelines from './timelines/reducers/events';
import feedTimelines from './timelines/reducers/feed';
import friendsTimelines from './timelines/reducers/friends';
import membersTimelines from './timelines/reducers/members';
import showsTimelines from './timelines/reducers/shows';
import commonsTimelines from './timelines/selectors/commons';
import getEventTimelines from './timelines/selectors/getEvent';
import getFeedTimelineTimelines from './timelines/selectors/getFeedTimeline';
import getFriendsTimelineTimelines from './timelines/selectors/getFriendsTimeline';
import getMemberTimelineTimelines from './timelines/selectors/getMemberTimeline';
import getShowTimelineTimelines from './timelines/selectors/getShowTimeline';
import constantsTimelines from './timelines/constants';

export default {
  badges: {
    actions: {
      doFetchBadge: doFetchBadgeBadges,
      doFetchManyBadges: doFetchManyBadgesBadges,
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
      doCommentEpisode: doCommentEpisodeComments,
      doCommentEvent: doCommentEventComments,
      doCommentMember: doCommentMemberComments,
      doCommentMovie: doCommentMovieComments,
      doCommentShow: doCommentShowComments,
      doFetchComment: doFetchCommentComments,
      doFetchEpisodeComments: doFetchEpisodeCommentsComments,
      doFetchEventComments: doFetchEventCommentsComments,
      doFetchMemberComments: doFetchMemberCommentsComments,
      doFetchMovieComments: doFetchMovieCommentsComments,
      doFetchReplies: doFetchRepliesComments,
      doFetchShowComments: doFetchShowCommentsComments,
      doRemoveComment: doRemoveCommentComments,
    },
    reducers: {
      comments: commentsComments,
      episodes: episodesComments,
      events: eventsComments,
      members: membersComments,
      movies: moviesComments,
      shows: showsComments,
    },
    selectors: {
      commons: commonsComments,
      getComment: getCommentComments,
      getEpisodeComments: getEpisodeCommentsComments,
      getEventComments: getEventCommentsComments,
      getMemberComments: getMemberCommentsComments,
      getMovieComments: getMovieCommentsComments,
      getReplies: getRepliesComments,
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
  polls: {
    actions: {
      doAnswerPoll: doAnswerPollPolls,
      doFetchLastPoll: doFetchLastPollPolls,
    },
    reducers: {
      polls: pollsPolls,
    },
    selectors: {
      commons: commonsPolls,
      getLastPoll: getLastPollPolls,
      getPoll: getPollPolls,
    },
    constants: constantsPolls,
  },
  searchs: {
    actions: {
      doClearSearchAll: doClearSearchAllSearchs,
      doClearSearchShows: doClearSearchShowsSearchs,
      doSearchAll: doSearchAllSearchs,
      doSearchShows: doSearchShowsSearchs,
    },
    reducers: {
      all: allSearchs,
      shows: showsSearchs,
    },
    selectors: {
      commons: commonsSearchs,
      getSearchAll: getSearchAllSearchs,
      getSearchShows: getSearchShowsSearchs,
    },
    constants: constantsSearchs,
  },
  shows: {
    actions: {
      doAddShow: doAddShowShows,
      doFetchDiscoverShows: doFetchDiscoverShowsShows,
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
      doRateShow: doRateShowShows,
      doRemoveShow: doRemoveShowShows,
    },
    reducers: {
      characters: charactersShows,
      discover: discoverShows,
      episodes: episodesShows,
      favorites: favoritesShows,
      latestEpisodes: latestEpisodesShows,
      membersEpisodesToSee: membersEpisodesToSeeShows,
      shows: showsShows,
      similars: similarsShows,
    },
    selectors: {
      commons: commonsShows,
      getDiscoverShows: getDiscoverShowsShows,
      getEpisode: getEpisodeShows,
      getEpisodesToSee: getEpisodesToSeeShows,
      getFavoriteShows: getFavoriteShowsShows,
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
      doFetchEvent: doFetchEventTimelines,
      doFetchFeedTimeline: doFetchFeedTimelineTimelines,
      doFetchFriendsTimeline: doFetchFriendsTimelineTimelines,
      doFetchMemberTimeline: doFetchMemberTimelineTimelines,
      doFetchShowTimeline: doFetchShowTimelineTimelines,
    },
    reducers: {
      events: eventsTimelines,
      feed: feedTimelines,
      friends: friendsTimelines,
      members: membersTimelines,
      shows: showsTimelines,
    },
    selectors: {
      commons: commonsTimelines,
      getEvent: getEventTimelines,
      getFeedTimeline: getFeedTimelineTimelines,
      getFriendsTimeline: getFriendsTimelineTimelines,
      getMemberTimeline: getMemberTimelineTimelines,
      getShowTimeline: getShowTimelineTimelines,
    },
    constants: constantsTimelines,
  },
};
