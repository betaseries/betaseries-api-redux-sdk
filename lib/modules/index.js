import doFetchBadgeBadges from './badges/actions/doFetchBadge';
import doFetchManyBadgesBadges from './badges/actions/doFetchManyBadges';
import badgesBadges from './badges/reducers/badges';
import commonsBadges from './badges/selectors/commons';
import getBadgeBadges from './badges/selectors/getBadge';
import constantsBadges from './badges/constants';
import doClearBlogPostsBlog from './blog/actions/doClearBlogPosts';
import doFetchBlogAuthorsBlog from './blog/actions/doFetchBlogAuthors';
import doFetchBlogCategoriesBlog from './blog/actions/doFetchBlogCategories';
import doFetchBlogCategoryPostsBlog from './blog/actions/doFetchBlogCategoryPosts';
import doFetchBlogFeaturedPostsBlog from './blog/actions/doFetchBlogFeaturedPosts';
import doFetchBlogHotTopicsBlog from './blog/actions/doFetchBlogHotTopics';
import doFetchBlogPostBlog from './blog/actions/doFetchBlogPost';
import doFetchBlogPostsBlog from './blog/actions/doFetchBlogPosts';
import doFetchBlogRelatedPostsBlog from './blog/actions/doFetchBlogRelatedPosts';
import doFetchBlogTagPostsBlog from './blog/actions/doFetchBlogTagPosts';
import doFetchBlogTagsBlog from './blog/actions/doFetchBlogTags';
import doSendBlogAnalyticsBlog from './blog/actions/doSendBlogAnalytics';
import authorsBlog from './blog/reducers/authors';
import categoriesBlog from './blog/reducers/categories';
import categoryPostsBlog from './blog/reducers/categoryPosts';
import featuredPostsBlog from './blog/reducers/featuredPosts';
import hotTopicsBlog from './blog/reducers/hotTopics';
import postsBlog from './blog/reducers/posts';
import relatedPostsBlog from './blog/reducers/relatedPosts';
import tagPostsBlog from './blog/reducers/tagPosts';
import tagsBlog from './blog/reducers/tags';
import commonsBlog from './blog/selectors/commons';
import getBlogAuthorsBlog from './blog/selectors/getBlogAuthors';
import getBlogCategoriesBlog from './blog/selectors/getBlogCategories';
import getBlogCategoryPostsBlog from './blog/selectors/getBlogCategoryPosts';
import getBlogFeaturedPostsBlog from './blog/selectors/getBlogFeaturedPosts';
import getBlogHotTopicsBlog from './blog/selectors/getBlogHotTopics';
import getBlogPostBlog from './blog/selectors/getBlogPost';
import getBlogPostsBlog from './blog/selectors/getBlogPosts';
import getBlogRelatedPostsBlog from './blog/selectors/getBlogRelatedPosts';
import getBlogTagPostsBlog from './blog/selectors/getBlogTagPosts';
import getBlogTagsBlog from './blog/selectors/getBlogTags';
import constantsBlog from './blog/constants';
import doAddCommentSubscriptionComments from './comments/actions/doAddCommentSubscription';
import doAddVoteComments from './comments/actions/doAddVote';
import doClearArticleCommentsComments from './comments/actions/doClearArticleComments';
import doClearEpisodeCommentsComments from './comments/actions/doClearEpisodeComments';
import doClearMemberCommentsComments from './comments/actions/doClearMemberComments';
import doClearMovieCommentsComments from './comments/actions/doClearMovieComments';
import doClearPollCommentsComments from './comments/actions/doClearPollComments';
import doClearShowCommentsComments from './comments/actions/doClearShowComments';
import doCloseCommentsComments from './comments/actions/doCloseComments';
import doCommentArticleComments from './comments/actions/doCommentArticle';
import doCommentEpisodeComments from './comments/actions/doCommentEpisode';
import doCommentEventComments from './comments/actions/doCommentEvent';
import doCommentMemberComments from './comments/actions/doCommentMember';
import doCommentMovieComments from './comments/actions/doCommentMovie';
import doCommentPollComments from './comments/actions/doCommentPoll';
import doCommentShowComments from './comments/actions/doCommentShow';
import doCommentSpecificEventComments from './comments/actions/doCommentSpecificEvent';
import doFetchArticleCommentsComments from './comments/actions/doFetchArticleComments';
import doFetchCommentComments from './comments/actions/doFetchComment';
import doFetchEpisodeCommentsComments from './comments/actions/doFetchEpisodeComments';
import doFetchEventCommentsComments from './comments/actions/doFetchEventComments';
import doFetchMemberCommentsComments from './comments/actions/doFetchMemberComments';
import doFetchMovieCommentsComments from './comments/actions/doFetchMovieComments';
import doFetchPollCommentsComments from './comments/actions/doFetchPollComments';
import doFetchRepliesComments from './comments/actions/doFetchReplies';
import doFetchShowCommentsComments from './comments/actions/doFetchShowComments';
import doOpenCommentsComments from './comments/actions/doOpenComments';
import doRemoveCommentComments from './comments/actions/doRemoveComment';
import doRemoveCommentSubscriptionComments from './comments/actions/doRemoveCommentSubscription';
import doRemoveVoteComments from './comments/actions/doRemoveVote';
import articlesComments from './comments/reducers/articles';
import commentsComments from './comments/reducers/comments';
import episodesComments from './comments/reducers/episodes';
import eventsComments from './comments/reducers/events';
import membersComments from './comments/reducers/members';
import moviesComments from './comments/reducers/movies';
import pollsComments from './comments/reducers/polls';
import showsComments from './comments/reducers/shows';
import commonsComments from './comments/selectors/commons';
import getArticleCommentsComments from './comments/selectors/getArticleComments';
import getCommentComments from './comments/selectors/getComment';
import getEpisodeCommentsComments from './comments/selectors/getEpisodeComments';
import getEventCommentsComments from './comments/selectors/getEventComments';
import getMemberCommentsComments from './comments/selectors/getMemberComments';
import getMovieCommentsComments from './comments/selectors/getMovieComments';
import getPollCommentsComments from './comments/selectors/getPollComments';
import getRepliesComments from './comments/selectors/getReplies';
import getShowCommentsComments from './comments/selectors/getShowComments';
import constantsComments from './comments/constants';
import doClearMemberNotificationsMembers from './members/actions/doClearMemberNotifications';
import doDeleteNotificationMembers from './members/actions/doDeleteNotification';
import doFetchMemberMembers from './members/actions/doFetchMember';
import doFetchMemberEmailMembers from './members/actions/doFetchMemberEmail';
import doFetchMemberNotificationsMembers from './members/actions/doFetchMemberNotifications';
import doFetchMemberYearStatsMembers from './members/actions/doFetchMemberYearStats';
import doFetchUserMembers from './members/actions/doFetchUser';
import doMarkAllNotificationsAsReadMembers from './members/actions/doMarkAllNotificationsAsRead';
import doMarkNotificationAsReadMembers from './members/actions/doMarkNotificationAsRead';
import doUpdateMemberEmailMembers from './members/actions/doUpdateMemberEmail';
import doUpdateMemberPasswordMembers from './members/actions/doUpdateMemberPassword';
import membersMembers from './members/reducers/members';
import notificationsMembers from './members/reducers/notifications';
import commonsMembers from './members/selectors/commons';
import getMemberMembers from './members/selectors/getMember';
import getMemberYearStatsMembers from './members/selectors/getMemberYearStats';
import getNotificationsMembers from './members/selectors/getNotifications';
import getUserMembers from './members/selectors/getUser';
import constantsMembers from './members/constants';
import doAddMovieFavoriteMovies from './movies/actions/doAddMovieFavorite';
import doFetchFavoriteMoviesMovies from './movies/actions/doFetchFavoriteMovies';
import doFetchManyMoviesMovies from './movies/actions/doFetchManyMovies';
import doFetchMemberMoviesMovies from './movies/actions/doFetchMemberMovies';
import doFetchMemberMoviesListMovies from './movies/actions/doFetchMemberMoviesList';
import doFetchMovieMovies from './movies/actions/doFetchMovie';
import doFetchMovieArticlesMovies from './movies/actions/doFetchMovieArticles';
import doFetchMovieCharactersMovies from './movies/actions/doFetchMovieCharacters';
import doRateMovieMovies from './movies/actions/doRateMovie';
import doRemoveMovieFavoriteMovies from './movies/actions/doRemoveMovieFavorite';
import doRemoveMovieMemberMovies from './movies/actions/doRemoveMovieMember';
import doUpdateMovieStateMovies from './movies/actions/doUpdateMovieState';
import articlesMovies from './movies/reducers/articles';
import charactersMovies from './movies/reducers/characters';
import favoritesMovies from './movies/reducers/favorites';
import membersMovies from './movies/reducers/members';
import moviesMovies from './movies/reducers/movies';
import commonsMovies from './movies/selectors/commons';
import getMemberMoviesMovies from './movies/selectors/getMemberMovies';
import getMovieMovies from './movies/selectors/getMovie';
import getMovieArticlesMovies from './movies/selectors/getMovieArticles';
import constantsMovies from './movies/constants';
import doClearCalendarPlanning from './planning/actions/doClearCalendar';
import doClearTimelinePlanning from './planning/actions/doClearTimeline';
import doFetchCalendarPlanning from './planning/actions/doFetchCalendar';
import doFetchTimelinePlanning from './planning/actions/doFetchTimeline';
import calendarPlanning from './planning/reducers/calendar';
import timelinePlanning from './planning/reducers/timeline';
import commonsPlanning from './planning/selectors/commons';
import getCalendarPlanning from './planning/selectors/getCalendar';
import getTimelinePlanning from './planning/selectors/getTimeline';
import constantsPlanning from './planning/constants';
import doAddPlatformsServicePlatforms from './platforms/actions/doAddPlatformsService';
import doFetchPlatformsListPlatforms from './platforms/actions/doFetchPlatformsList';
import doFetchPlatformsServicesPlatforms from './platforms/actions/doFetchPlatformsServices';
import doRemovePlatformsServicePlatforms from './platforms/actions/doRemovePlatformsService';
import platformsPlatforms from './platforms/reducers/platforms';
import servicesPlatforms from './platforms/reducers/services';
import commonsPlatforms from './platforms/selectors/commons';
import getPlatformsServicesPlatforms from './platforms/selectors/getPlatformsServices';
import getPlatformsSVODPlatforms from './platforms/selectors/getPlatformsSVOD';
import getPlatformsVODPlatforms from './platforms/selectors/getPlatformsVOD';
import getSVODPlatformPlatforms from './platforms/selectors/getSVODPlatform';
import getVODPlatformPlatforms from './platforms/selectors/getVODPlatform';
import constantsPlatforms from './platforms/constants';
import doAnswerPollPolls from './polls/actions/doAnswerPoll';
import doFetchLastPollPolls from './polls/actions/doFetchLastPoll';
import doFetchPollPolls from './polls/actions/doFetchPoll';
import doFetchPollsPolls from './polls/actions/doFetchPolls';
import pollsPolls from './polls/reducers/polls';
import commonsPolls from './polls/selectors/commons';
import getLastPollPolls from './polls/selectors/getLastPoll';
import getPollPolls from './polls/selectors/getPoll';
import constantsPolls from './polls/constants';
import doAddReportReports from './reports/actions/doAddReport';
import doAskUpdateReports from './reports/actions/doAskUpdate';
import reportsReports from './reports/reducers/reports';
import updatesReports from './reports/reducers/updates';
import constantsReports from './reports/constants';
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
import doAddShowArchiveShows from './shows/actions/doAddShowArchive';
import doAddShowFavoriteShows from './shows/actions/doAddShowFavorite';
import doAddShowReachShows from './shows/actions/doAddShowReach';
import doClearDiscoverShowsShows from './shows/actions/doClearDiscoverShows';
import doFetchDiscoverShowsShows from './shows/actions/doFetchDiscoverShows';
import doFetchEpisodeShows from './shows/actions/doFetchEpisode';
import doFetchEpisodeByCodeShows from './shows/actions/doFetchEpisodeByCode';
import doFetchEpisodesListShows from './shows/actions/doFetchEpisodesList';
import doFetchFavoriteShowsShows from './shows/actions/doFetchFavoriteShows';
import doFetchLatestEpisodeShows from './shows/actions/doFetchLatestEpisode';
import doFetchManyEpisodesShows from './shows/actions/doFetchManyEpisodes';
import doFetchManyShowsShows from './shows/actions/doFetchManyShows';
import doFetchMemberShowsShows from './shows/actions/doFetchMemberShows';
import doFetchShowShows from './shows/actions/doFetchShow';
import doFetchShowArticlesShows from './shows/actions/doFetchShowArticles';
import doFetchShowCharactersShows from './shows/actions/doFetchShowCharacters';
import doFetchShowEpisodesShows from './shows/actions/doFetchShowEpisodes';
import doFetchShowGenresShows from './shows/actions/doFetchShowGenres';
import doFetchShowInterestGenresShows from './shows/actions/doFetchShowInterestGenres';
import doFetchShowInterestsShows from './shows/actions/doFetchShowInterests';
import doFetchShowPhotosShows from './shows/actions/doFetchShowPhotos';
import doFetchShowSeasonsShows from './shows/actions/doFetchShowSeasons';
import doFetchShowVideosShows from './shows/actions/doFetchShowVideos';
import doFetchShowWithUrlShows from './shows/actions/doFetchShowWithUrl';
import doFetchSimilarShowsShows from './shows/actions/doFetchSimilarShows';
import doFetchUnratedEpisodesShows from './shows/actions/doFetchUnratedEpisodes';
import doFetchUnratedShowsShows from './shows/actions/doFetchUnratedShows';
import doMarkEpisodeAsDownloadedShows from './shows/actions/doMarkEpisodeAsDownloaded';
import doMarkEpisodeAsHiddenShows from './shows/actions/doMarkEpisodeAsHidden';
import doMarkEpisodeAsWatchedShows from './shows/actions/doMarkEpisodeAsWatched';
import doMarkManyEpisodeAsWatchedShows from './shows/actions/doMarkManyEpisodeAsWatched';
import doMarkSeasonAsHiddenShows from './shows/actions/doMarkSeasonAsHidden';
import doMarkSeasonAsWatchedShows from './shows/actions/doMarkSeasonAsWatched';
import doRateEpisodeShows from './shows/actions/doRateEpisode';
import doRateShowShows from './shows/actions/doRateShow';
import doRemoveShowShows from './shows/actions/doRemoveShow';
import doRemoveShowArchiveShows from './shows/actions/doRemoveShowArchive';
import doRemoveShowFavoriteShows from './shows/actions/doRemoveShowFavorite';
import doUnmarkEpisodeAsDownloadedShows from './shows/actions/doUnmarkEpisodeAsDownloaded';
import doUnmarkEpisodeAsWatchedShows from './shows/actions/doUnmarkEpisodeAsWatched';
import doUnmarkManyEpisodeAsWatchedShows from './shows/actions/doUnmarkManyEpisodeAsWatched';
import doUnmarkSeasonAsHiddenShows from './shows/actions/doUnmarkSeasonAsHidden';
import doUnmarkSeasonAsWatchedShows from './shows/actions/doUnmarkSeasonAsWatched';
import articlesShows from './shows/reducers/articles';
import charactersShows from './shows/reducers/characters';
import discoverShows from './shows/reducers/discover';
import episodesShows from './shows/reducers/episodes';
import genresShows from './shows/reducers/genres';
import interestGenresShows from './shows/reducers/interestGenres';
import interestsShows from './shows/reducers/interests';
import latestEpisodesShows from './shows/reducers/latestEpisodes';
import membersShows from './shows/reducers/members';
import membersEpisodesToSeeShows from './shows/reducers/membersEpisodesToSee';
import photosShows from './shows/reducers/photos';
import seasonsShows from './shows/reducers/seasons';
import showsShows from './shows/reducers/shows';
import similarsShows from './shows/reducers/similars';
import unratedEpisodesShows from './shows/reducers/unratedEpisodes';
import unratedShowsShows from './shows/reducers/unratedShows';
import videosShows from './shows/reducers/videos';
import commonsShows from './shows/selectors/commons';
import getCharactersShows from './shows/selectors/getCharacters';
import getDiscoverShowsShows from './shows/selectors/getDiscoverShows';
import getEpisodeShows from './shows/selectors/getEpisode';
import getEpisodesToSeeShows from './shows/selectors/getEpisodesToSee';
import getFavoriteShowsShows from './shows/selectors/getFavoriteShows';
import getLatestShowEpisodeShows from './shows/selectors/getLatestShowEpisode';
import getMemberShowsShows from './shows/selectors/getMemberShows';
import getPhotosShows from './shows/selectors/getPhotos';
import getShowShows from './shows/selectors/getShow';
import getShowArticlesShows from './shows/selectors/getShowArticles';
import getShowByUrlShows from './shows/selectors/getShowByUrl';
import getShowEpisodeByCodeShows from './shows/selectors/getShowEpisodeByCode';
import getShowEpisodesShows from './shows/selectors/getShowEpisodes';
import getShowEpisodesForSeasonShows from './shows/selectors/getShowEpisodesForSeason';
import getShowGenresShows from './shows/selectors/getShowGenres';
import getShowInterestGenresShows from './shows/selectors/getShowInterestGenres';
import getShowInterestsShows from './shows/selectors/getShowInterests';
import getShowSeasonsShows from './shows/selectors/getShowSeasons';
import getSimilarShowsShows from './shows/selectors/getSimilarShows';
import getUnratedEpisodesShows from './shows/selectors/getUnratedEpisodes';
import getUnratedShowsShows from './shows/selectors/getUnratedShows';
import getVideosShows from './shows/selectors/getVideos';
import constantsShows from './shows/constants';
import doFetchEpisodeSubtitlesSubtitles from './subtitles/actions/doFetchEpisodeSubtitles';
import doFetchSeasonSubtitlesSubtitles from './subtitles/actions/doFetchSeasonSubtitles';
import doFetchShowSubtitlesSubtitles from './subtitles/actions/doFetchShowSubtitles';
import episodesSubtitles from './subtitles/reducers/episodes';
import showsSubtitles from './subtitles/reducers/shows';
import commonsSubtitles from './subtitles/selectors/commons';
import getEpisodeSubtitlesSubtitles from './subtitles/selectors/getEpisodeSubtitles';
import getSeasonSubtitlesSubtitles from './subtitles/selectors/getSeasonSubtitles';
import getShowSubtitlesSubtitles from './subtitles/selectors/getShowSubtitles';
import constantsSubtitles from './subtitles/constants';
import doClearFeedTimelineTimelines from './timelines/actions/doClearFeedTimeline';
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
  blog: {
    actions: {
      doClearBlogPosts: doClearBlogPostsBlog,
      doFetchBlogAuthors: doFetchBlogAuthorsBlog,
      doFetchBlogCategories: doFetchBlogCategoriesBlog,
      doFetchBlogCategoryPosts: doFetchBlogCategoryPostsBlog,
      doFetchBlogFeaturedPosts: doFetchBlogFeaturedPostsBlog,
      doFetchBlogHotTopics: doFetchBlogHotTopicsBlog,
      doFetchBlogPost: doFetchBlogPostBlog,
      doFetchBlogPosts: doFetchBlogPostsBlog,
      doFetchBlogRelatedPosts: doFetchBlogRelatedPostsBlog,
      doFetchBlogTagPosts: doFetchBlogTagPostsBlog,
      doFetchBlogTags: doFetchBlogTagsBlog,
      doSendBlogAnalytics: doSendBlogAnalyticsBlog,
    },
    reducers: {
      authors: authorsBlog,
      categories: categoriesBlog,
      categoryPosts: categoryPostsBlog,
      featuredPosts: featuredPostsBlog,
      hotTopics: hotTopicsBlog,
      posts: postsBlog,
      relatedPosts: relatedPostsBlog,
      tagPosts: tagPostsBlog,
      tags: tagsBlog,
    },
    selectors: {
      commons: commonsBlog,
      getBlogAuthors: getBlogAuthorsBlog,
      getBlogCategories: getBlogCategoriesBlog,
      getBlogCategoryPosts: getBlogCategoryPostsBlog,
      getBlogFeaturedPosts: getBlogFeaturedPostsBlog,
      getBlogHotTopics: getBlogHotTopicsBlog,
      getBlogPost: getBlogPostBlog,
      getBlogPosts: getBlogPostsBlog,
      getBlogRelatedPosts: getBlogRelatedPostsBlog,
      getBlogTagPosts: getBlogTagPostsBlog,
      getBlogTags: getBlogTagsBlog,
    },
    constants: constantsBlog,
  },
  comments: {
    actions: {
      doAddCommentSubscription: doAddCommentSubscriptionComments,
      doAddVote: doAddVoteComments,
      doClearArticleComments: doClearArticleCommentsComments,
      doClearEpisodeComments: doClearEpisodeCommentsComments,
      doClearMemberComments: doClearMemberCommentsComments,
      doClearMovieComments: doClearMovieCommentsComments,
      doClearPollComments: doClearPollCommentsComments,
      doClearShowComments: doClearShowCommentsComments,
      doCloseComments: doCloseCommentsComments,
      doCommentArticle: doCommentArticleComments,
      doCommentEpisode: doCommentEpisodeComments,
      doCommentEvent: doCommentEventComments,
      doCommentMember: doCommentMemberComments,
      doCommentMovie: doCommentMovieComments,
      doCommentPoll: doCommentPollComments,
      doCommentShow: doCommentShowComments,
      doCommentSpecificEvent: doCommentSpecificEventComments,
      doFetchArticleComments: doFetchArticleCommentsComments,
      doFetchComment: doFetchCommentComments,
      doFetchEpisodeComments: doFetchEpisodeCommentsComments,
      doFetchEventComments: doFetchEventCommentsComments,
      doFetchMemberComments: doFetchMemberCommentsComments,
      doFetchMovieComments: doFetchMovieCommentsComments,
      doFetchPollComments: doFetchPollCommentsComments,
      doFetchReplies: doFetchRepliesComments,
      doFetchShowComments: doFetchShowCommentsComments,
      doOpenComments: doOpenCommentsComments,
      doRemoveComment: doRemoveCommentComments,
      doRemoveCommentSubscription: doRemoveCommentSubscriptionComments,
      doRemoveVote: doRemoveVoteComments,
    },
    reducers: {
      articles: articlesComments,
      comments: commentsComments,
      episodes: episodesComments,
      events: eventsComments,
      members: membersComments,
      movies: moviesComments,
      polls: pollsComments,
      shows: showsComments,
    },
    selectors: {
      commons: commonsComments,
      getArticleComments: getArticleCommentsComments,
      getComment: getCommentComments,
      getEpisodeComments: getEpisodeCommentsComments,
      getEventComments: getEventCommentsComments,
      getMemberComments: getMemberCommentsComments,
      getMovieComments: getMovieCommentsComments,
      getPollComments: getPollCommentsComments,
      getReplies: getRepliesComments,
      getShowComments: getShowCommentsComments,
    },
    constants: constantsComments,
  },
  members: {
    actions: {
      doClearMemberNotifications: doClearMemberNotificationsMembers,
      doDeleteNotification: doDeleteNotificationMembers,
      doFetchMember: doFetchMemberMembers,
      doFetchMemberEmail: doFetchMemberEmailMembers,
      doFetchMemberNotifications: doFetchMemberNotificationsMembers,
      doFetchMemberYearStats: doFetchMemberYearStatsMembers,
      doFetchUser: doFetchUserMembers,
      doMarkAllNotificationsAsRead: doMarkAllNotificationsAsReadMembers,
      doMarkNotificationAsRead: doMarkNotificationAsReadMembers,
      doUpdateMemberEmail: doUpdateMemberEmailMembers,
      doUpdateMemberPassword: doUpdateMemberPasswordMembers,
    },
    reducers: {
      members: membersMembers,
      notifications: notificationsMembers,
    },
    selectors: {
      commons: commonsMembers,
      getMember: getMemberMembers,
      getMemberYearStats: getMemberYearStatsMembers,
      getNotifications: getNotificationsMembers,
      getUser: getUserMembers,
    },
    constants: constantsMembers,
  },
  movies: {
    actions: {
      doAddMovieFavorite: doAddMovieFavoriteMovies,
      doFetchFavoriteMovies: doFetchFavoriteMoviesMovies,
      doFetchManyMovies: doFetchManyMoviesMovies,
      doFetchMemberMovies: doFetchMemberMoviesMovies,
      doFetchMemberMoviesList: doFetchMemberMoviesListMovies,
      doFetchMovie: doFetchMovieMovies,
      doFetchMovieArticles: doFetchMovieArticlesMovies,
      doFetchMovieCharacters: doFetchMovieCharactersMovies,
      doRateMovie: doRateMovieMovies,
      doRemoveMovieFavorite: doRemoveMovieFavoriteMovies,
      doRemoveMovieMember: doRemoveMovieMemberMovies,
      doUpdateMovieState: doUpdateMovieStateMovies,
    },
    reducers: {
      articles: articlesMovies,
      characters: charactersMovies,
      favorites: favoritesMovies,
      members: membersMovies,
      movies: moviesMovies,
    },
    selectors: {
      commons: commonsMovies,
      getMemberMovies: getMemberMoviesMovies,
      getMovie: getMovieMovies,
      getMovieArticles: getMovieArticlesMovies,
    },
    constants: constantsMovies,
  },
  planning: {
    actions: {
      doClearCalendar: doClearCalendarPlanning,
      doClearTimeline: doClearTimelinePlanning,
      doFetchCalendar: doFetchCalendarPlanning,
      doFetchTimeline: doFetchTimelinePlanning,
    },
    reducers: {
      calendar: calendarPlanning,
      timeline: timelinePlanning,
    },
    selectors: {
      commons: commonsPlanning,
      getCalendar: getCalendarPlanning,
      getTimeline: getTimelinePlanning,
    },
    constants: constantsPlanning,
  },
  platforms: {
    actions: {
      doAddPlatformsService: doAddPlatformsServicePlatforms,
      doFetchPlatformsList: doFetchPlatformsListPlatforms,
      doFetchPlatformsServices: doFetchPlatformsServicesPlatforms,
      doRemovePlatformsService: doRemovePlatformsServicePlatforms,
    },
    reducers: {
      platforms: platformsPlatforms,
      services: servicesPlatforms,
    },
    selectors: {
      commons: commonsPlatforms,
      getPlatformsServices: getPlatformsServicesPlatforms,
      getPlatformsSVOD: getPlatformsSVODPlatforms,
      getPlatformsVOD: getPlatformsVODPlatforms,
      getSVODPlatform: getSVODPlatformPlatforms,
      getVODPlatform: getVODPlatformPlatforms,
    },
    constants: constantsPlatforms,
  },
  polls: {
    actions: {
      doAnswerPoll: doAnswerPollPolls,
      doFetchLastPoll: doFetchLastPollPolls,
      doFetchPoll: doFetchPollPolls,
      doFetchPolls: doFetchPollsPolls,
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
  reports: {
    actions: {
      doAddReport: doAddReportReports,
      doAskUpdate: doAskUpdateReports,
    },
    reducers: {
      reports: reportsReports,
      updates: updatesReports,
    },
    constants: constantsReports,
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
      doAddShowArchive: doAddShowArchiveShows,
      doAddShowFavorite: doAddShowFavoriteShows,
      doAddShowReach: doAddShowReachShows,
      doClearDiscoverShows: doClearDiscoverShowsShows,
      doFetchDiscoverShows: doFetchDiscoverShowsShows,
      doFetchEpisode: doFetchEpisodeShows,
      doFetchEpisodeByCode: doFetchEpisodeByCodeShows,
      doFetchEpisodesList: doFetchEpisodesListShows,
      doFetchFavoriteShows: doFetchFavoriteShowsShows,
      doFetchLatestEpisode: doFetchLatestEpisodeShows,
      doFetchManyEpisodes: doFetchManyEpisodesShows,
      doFetchManyShows: doFetchManyShowsShows,
      doFetchMemberShows: doFetchMemberShowsShows,
      doFetchShow: doFetchShowShows,
      doFetchShowArticles: doFetchShowArticlesShows,
      doFetchShowCharacters: doFetchShowCharactersShows,
      doFetchShowEpisodes: doFetchShowEpisodesShows,
      doFetchShowGenres: doFetchShowGenresShows,
      doFetchShowInterestGenres: doFetchShowInterestGenresShows,
      doFetchShowInterests: doFetchShowInterestsShows,
      doFetchShowPhotos: doFetchShowPhotosShows,
      doFetchShowSeasons: doFetchShowSeasonsShows,
      doFetchShowVideos: doFetchShowVideosShows,
      doFetchShowWithUrl: doFetchShowWithUrlShows,
      doFetchSimilarShows: doFetchSimilarShowsShows,
      doFetchUnratedEpisodes: doFetchUnratedEpisodesShows,
      doFetchUnratedShows: doFetchUnratedShowsShows,
      doMarkEpisodeAsDownloaded: doMarkEpisodeAsDownloadedShows,
      doMarkEpisodeAsHidden: doMarkEpisodeAsHiddenShows,
      doMarkEpisodeAsWatched: doMarkEpisodeAsWatchedShows,
      doMarkManyEpisodeAsWatched: doMarkManyEpisodeAsWatchedShows,
      doMarkSeasonAsHidden: doMarkSeasonAsHiddenShows,
      doMarkSeasonAsWatched: doMarkSeasonAsWatchedShows,
      doRateEpisode: doRateEpisodeShows,
      doRateShow: doRateShowShows,
      doRemoveShow: doRemoveShowShows,
      doRemoveShowArchive: doRemoveShowArchiveShows,
      doRemoveShowFavorite: doRemoveShowFavoriteShows,
      doUnmarkEpisodeAsDownloaded: doUnmarkEpisodeAsDownloadedShows,
      doUnmarkEpisodeAsWatched: doUnmarkEpisodeAsWatchedShows,
      doUnmarkManyEpisodeAsWatched: doUnmarkManyEpisodeAsWatchedShows,
      doUnmarkSeasonAsHidden: doUnmarkSeasonAsHiddenShows,
      doUnmarkSeasonAsWatched: doUnmarkSeasonAsWatchedShows,
    },
    reducers: {
      articles: articlesShows,
      characters: charactersShows,
      discover: discoverShows,
      episodes: episodesShows,
      genres: genresShows,
      interestGenres: interestGenresShows,
      interests: interestsShows,
      latestEpisodes: latestEpisodesShows,
      members: membersShows,
      membersEpisodesToSee: membersEpisodesToSeeShows,
      photos: photosShows,
      seasons: seasonsShows,
      shows: showsShows,
      similars: similarsShows,
      unratedEpisodes: unratedEpisodesShows,
      unratedShows: unratedShowsShows,
      videos: videosShows,
    },
    selectors: {
      commons: commonsShows,
      getCharacters: getCharactersShows,
      getDiscoverShows: getDiscoverShowsShows,
      getEpisode: getEpisodeShows,
      getEpisodesToSee: getEpisodesToSeeShows,
      getFavoriteShows: getFavoriteShowsShows,
      getLatestShowEpisode: getLatestShowEpisodeShows,
      getMemberShows: getMemberShowsShows,
      getPhotos: getPhotosShows,
      getShow: getShowShows,
      getShowArticles: getShowArticlesShows,
      getShowByUrl: getShowByUrlShows,
      getShowEpisodeByCode: getShowEpisodeByCodeShows,
      getShowEpisodes: getShowEpisodesShows,
      getShowEpisodesForSeason: getShowEpisodesForSeasonShows,
      getShowGenres: getShowGenresShows,
      getShowInterestGenres: getShowInterestGenresShows,
      getShowInterests: getShowInterestsShows,
      getShowSeasons: getShowSeasonsShows,
      getSimilarShows: getSimilarShowsShows,
      getUnratedEpisodes: getUnratedEpisodesShows,
      getUnratedShows: getUnratedShowsShows,
      getVideos: getVideosShows,
    },
    constants: constantsShows,
  },
  subtitles: {
    actions: {
      doFetchEpisodeSubtitles: doFetchEpisodeSubtitlesSubtitles,
      doFetchSeasonSubtitles: doFetchSeasonSubtitlesSubtitles,
      doFetchShowSubtitles: doFetchShowSubtitlesSubtitles,
    },
    reducers: {
      episodes: episodesSubtitles,
      shows: showsSubtitles,
    },
    selectors: {
      commons: commonsSubtitles,
      getEpisodeSubtitles: getEpisodeSubtitlesSubtitles,
      getSeasonSubtitles: getSeasonSubtitlesSubtitles,
      getShowSubtitles: getShowSubtitlesSubtitles,
    },
    constants: constantsSubtitles,
  },
  timelines: {
    actions: {
      doClearFeedTimeline: doClearFeedTimelineTimelines,
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
