import doFetchBadgeBadges from './badges/actions/doFetchBadge';
import doFetchManyBadgesBadges from './badges/actions/doFetchManyBadges';
import doPostElevatorBadgeBadges from './badges/actions/doPostElevatorBadge';
import badgesBadges from './badges/reducers/badges';
import commonsBadges from './badges/selectors/commons';
import getBadgeBadges from './badges/selectors/getBadge';
import constantsBadges from './badges/constants';
import doClearBlogPostsBlog from './blog/actions/doClearBlogPosts';
import doClearCategoryPostsBlog from './blog/actions/doClearCategoryPosts';
import doClearTagPostsBlog from './blog/actions/doClearTagPosts';
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
import doEditCollectionCollections from './collections/actions/doEditCollection';
import doFetchCollectionCollections from './collections/actions/doFetchCollection';
import doFetchCollectionListCollections from './collections/actions/doFetchCollectionList';
import doPostCollectionCollections from './collections/actions/doPostCollection';
import doRemoveCollectionCollections from './collections/actions/doRemoveCollection';
import collectionsCollections from './collections/reducers/collections';
import membersCollections from './collections/reducers/members';
import commonsCollections from './collections/selectors/commons';
import getCollectionCollections from './collections/selectors/getCollection';
import getCollectionListCollections from './collections/selectors/getCollectionList';
import constantsCollections from './collections/constants';
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
import doCommentArticlePostComments from './comments/actions/doCommentArticlePost';
import doCommentEpisodeComments from './comments/actions/doCommentEpisode';
import doCommentEpisodePostComments from './comments/actions/doCommentEpisodePost';
import doCommentEventComments from './comments/actions/doCommentEvent';
import doCommentEventPostComments from './comments/actions/doCommentEventPost';
import doCommentMemberComments from './comments/actions/doCommentMember';
import doCommentMemberPostComments from './comments/actions/doCommentMemberPost';
import doCommentMovieComments from './comments/actions/doCommentMovie';
import doCommentMoviePostComments from './comments/actions/doCommentMoviePost';
import doCommentPollComments from './comments/actions/doCommentPoll';
import doCommentPollPostComments from './comments/actions/doCommentPollPost';
import doCommentShowComments from './comments/actions/doCommentShow';
import doCommentShowPostComments from './comments/actions/doCommentShowPost';
import doCommentSpecificEventComments from './comments/actions/doCommentSpecificEvent';
import doEditCommentLocaleComments from './comments/actions/doEditCommentLocale';
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
import doFetchHomeBannerHome from './home/actions/doFetchHomeBanner';
import doFetchHomeBlocksHome from './home/actions/doFetchHomeBlocks';
import doFetchHomeCollectionsHome from './home/actions/doFetchHomeCollections';
import doFetchHomePopularHome from './home/actions/doFetchHomePopular';
import doFetchHomePopularArticlesHome from './home/actions/doFetchHomePopularArticles';
import doFetchHomePopularPlatformHome from './home/actions/doFetchHomePopularPlatform';
import doFetchHomeRecommendationHome from './home/actions/doFetchHomeRecommendation';
import doFetchHomeTopHome from './home/actions/doFetchHomeTop';
import doFetchHomeTrailersHome from './home/actions/doFetchHomeTrailers';
import articlesHome from './home/reducers/articles';
import blocksHome from './home/reducers/blocks';
import collectionsHome from './home/reducers/collections';
import popularHome from './home/reducers/popular';
import popularPlatformHome from './home/reducers/popularPlatform';
import recoHome from './home/reducers/reco';
import topHome from './home/reducers/top';
import trailersHome from './home/reducers/trailers';
import commonsHome from './home/selectors/commons';
import getHomeBlocksHome from './home/selectors/getHomeBlocks';
import getHomeCollectionsHome from './home/selectors/getHomeCollections';
import getHomeLastTopHome from './home/selectors/getHomeLastTop';
import getHomePopularHome from './home/selectors/getHomePopular';
import getHomePopularArticlesHome from './home/selectors/getHomePopularArticles';
import getHomePopularPlatformHome from './home/selectors/getHomePopularPlatform';
import getHomeRecommendationHome from './home/selectors/getHomeRecommendation';
import getHomeRecoReferenceShowHome from './home/selectors/getHomeRecoReferenceShow';
import getHomeTrailersHome from './home/selectors/getHomeTrailers';
import constantsHome from './home/constants';
import doClearMemberNotificationsMembers from './members/actions/doClearMemberNotifications';
import doDeleteNotificationMembers from './members/actions/doDeleteNotification';
import doFetchMemberMembers from './members/actions/doFetchMember';
import doFetchMemberEmailMembers from './members/actions/doFetchMemberEmail';
import doFetchMemberNotificationsMembers from './members/actions/doFetchMemberNotifications';
import doFetchMemberSocioDemoMembers from './members/actions/doFetchMemberSocioDemo';
import doFetchMemberStatsMembers from './members/actions/doFetchMemberStats';
import doFetchMemberYearStatsMembers from './members/actions/doFetchMemberYearStats';
import doFetchUserMembers from './members/actions/doFetchUser';
import doMarkAllNotificationsAsReadMembers from './members/actions/doMarkAllNotificationsAsRead';
import doMarkNotificationAsReadMembers from './members/actions/doMarkNotificationAsRead';
import doPostMemberSocioDemoMembers from './members/actions/doPostMemberSocioDemo';
import doUpdateMemberEmailMembers from './members/actions/doUpdateMemberEmail';
import doUpdateMemberPasswordMembers from './members/actions/doUpdateMemberPassword';
import membersMembers from './members/reducers/members';
import notificationsMembers from './members/reducers/notifications';
import commonsMembers from './members/selectors/commons';
import getMemberMembers from './members/selectors/getMember';
import getMemberSocioDemoMembers from './members/selectors/getMemberSocioDemo';
import getMemberStatsMembers from './members/selectors/getMemberStats';
import getMemberYearStatsMembers from './members/selectors/getMemberYearStats';
import getNotificationsMembers from './members/selectors/getNotifications';
import getUserMembers from './members/selectors/getUser';
import constantsMembers from './members/constants';
import doAddMovieFavoriteMovies from './movies/actions/doAddMovieFavorite';
import doAddMovieTagMovies from './movies/actions/doAddMovieTag';
import doFetchFavoriteMoviesMovies from './movies/actions/doFetchFavoriteMovies';
import doFetchManyMoviesMovies from './movies/actions/doFetchManyMovies';
import doFetchMemberMoviesMovies from './movies/actions/doFetchMemberMovies';
import doFetchMemberMoviesListMovies from './movies/actions/doFetchMemberMoviesList';
import doFetchMovieMovies from './movies/actions/doFetchMovie';
import doFetchMovieArticlesMovies from './movies/actions/doFetchMovieArticles';
import doFetchMovieCharactersMovies from './movies/actions/doFetchMovieCharacters';
import doFetchMovieGenresMovies from './movies/actions/doFetchMovieGenres';
import doFetchTagsListMovies from './movies/actions/doFetchTagsList';
import doRateMovieMovies from './movies/actions/doRateMovie';
import doRemoveMovieFavoriteMovies from './movies/actions/doRemoveMovieFavorite';
import doRemoveMovieMemberMovies from './movies/actions/doRemoveMovieMember';
import doRemoveMovieTagMovies from './movies/actions/doRemoveMovieTag';
import doUpdateMovieStateMovies from './movies/actions/doUpdateMovieState';
import articlesMovies from './movies/reducers/articles';
import charactersMovies from './movies/reducers/characters';
import favoritesMovies from './movies/reducers/favorites';
import genresMovies from './movies/reducers/genres';
import membersMovies from './movies/reducers/members';
import moviesMovies from './movies/reducers/movies';
import tagsMovies from './movies/reducers/tags';
import commonsMovies from './movies/selectors/commons';
import getMemberMoviesMovies from './movies/selectors/getMemberMovies';
import getMemberMoviesFavoriteMovies from './movies/selectors/getMemberMoviesFavorite';
import getMovieMovies from './movies/selectors/getMovie';
import getMovieArticlesMovies from './movies/selectors/getMovieArticles';
import getMovieGenresMovies from './movies/selectors/getMovieGenres';
import getTagsListMovies from './movies/selectors/getTagsList';
import constantsMovies from './movies/constants';
import doFetchPersonPersons from './persons/actions/doFetchPerson';
import doFetchPersonArticlesPersons from './persons/actions/doFetchPersonArticles';
import articlesPersons from './persons/reducers/articles';
import personsPersons from './persons/reducers/persons';
import commonsPersons from './persons/selectors/commons';
import getPersonPersons from './persons/selectors/getPerson';
import getPersonArticlesPersons from './persons/selectors/getPersonArticles';
import constantsPersons from './persons/constants';
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
import getLastPollUnAnswerPolls from './polls/selectors/getLastPollUnAnswer';
import getPollPolls from './polls/selectors/getPoll';
import constantsPolls from './polls/constants';
import doAddReportReports from './reports/actions/doAddReport';
import doAskUpdateReports from './reports/actions/doAskUpdate';
import reportsReports from './reports/reducers/reports';
import updatesReports from './reports/reducers/updates';
import constantsReports from './reports/constants';
import doClearSearchAllSearchs from './searchs/actions/doClearSearchAll';
import doClearSearchMoviesSearchs from './searchs/actions/doClearSearchMovies';
import doClearSearchShowsSearchs from './searchs/actions/doClearSearchShows';
import doSearchAllSearchs from './searchs/actions/doSearchAll';
import doSearchMoviesSearchs from './searchs/actions/doSearchMovies';
import doSearchShowsSearchs from './searchs/actions/doSearchShows';
import doShowsSearchSearchs from './searchs/actions/doShowsSearch';
import allSearchs from './searchs/reducers/all';
import moviesSearchs from './searchs/reducers/movies';
import showsSearchs from './searchs/reducers/shows';
import commonsSearchs from './searchs/selectors/commons';
import getSearchAllSearchs from './searchs/selectors/getSearchAll';
import getSearchMoviesSearchs from './searchs/selectors/getSearchMovies';
import getSearchShowsSearchs from './searchs/selectors/getSearchShows';
import constantsSearchs from './searchs/constants';
import doAddShowShows from './shows/actions/doAddShow';
import doAddShowArchiveShows from './shows/actions/doAddShowArchive';
import doAddShowFavoriteShows from './shows/actions/doAddShowFavorite';
import doAddShowReachShows from './shows/actions/doAddShowReach';
import doAddShowTagShows from './shows/actions/doAddShowTag';
import doClearDiscoverShowsShows from './shows/actions/doClearDiscoverShows';
import doClearDiscoverShowsPlatformsShows from './shows/actions/doClearDiscoverShowsPlatforms';
import doFetchDiscoverShowsShows from './shows/actions/doFetchDiscoverShows';
import doFetchDiscoverShowsPlatformsShows from './shows/actions/doFetchDiscoverShowsPlatforms';
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
import doFetchTagsListShows from './shows/actions/doFetchTagsList';
import doFetchUnratedEpisodesShows from './shows/actions/doFetchUnratedEpisodes';
import doFetchUnratedShowsShows from './shows/actions/doFetchUnratedShows';
import doMarkEpisodeAsDownloadedShows from './shows/actions/doMarkEpisodeAsDownloaded';
import doMarkEpisodeAsHiddenShows from './shows/actions/doMarkEpisodeAsHidden';
import doMarkEpisodeAsRewatchedShows from './shows/actions/doMarkEpisodeAsRewatched';
import doMarkEpisodeAsWatchedShows from './shows/actions/doMarkEpisodeAsWatched';
import doMarkManyEpisodeAsWatchedShows from './shows/actions/doMarkManyEpisodeAsWatched';
import doMarkSeasonAsHiddenShows from './shows/actions/doMarkSeasonAsHidden';
import doMarkSeasonAsRewatchedShows from './shows/actions/doMarkSeasonAsRewatched';
import doMarkSeasonAsWatchedShows from './shows/actions/doMarkSeasonAsWatched';
import doMarkShowAsRewatchedShows from './shows/actions/doMarkShowAsRewatched';
import doMarkShowAsWatchedShows from './shows/actions/doMarkShowAsWatched';
import doRateEpisodeShows from './shows/actions/doRateEpisode';
import doRateSeasonShows from './shows/actions/doRateSeason';
import doRateShowShows from './shows/actions/doRateShow';
import doRemoveShowShows from './shows/actions/doRemoveShow';
import doRemoveShowArchiveShows from './shows/actions/doRemoveShowArchive';
import doRemoveShowFavoriteShows from './shows/actions/doRemoveShowFavorite';
import doRemoveShowTagShows from './shows/actions/doRemoveShowTag';
import doUnmarkEpisodeAsDownloadedShows from './shows/actions/doUnmarkEpisodeAsDownloaded';
import doUnmarkEpisodeAsHiddenShows from './shows/actions/doUnmarkEpisodeAsHidden';
import doUnmarkEpisodeAsRewatchedShows from './shows/actions/doUnmarkEpisodeAsRewatched';
import doUnmarkEpisodeAsWatchedShows from './shows/actions/doUnmarkEpisodeAsWatched';
import doUnmarkManyEpisodeAsWatchedShows from './shows/actions/doUnmarkManyEpisodeAsWatched';
import doUnmarkSeasonAsHiddenShows from './shows/actions/doUnmarkSeasonAsHidden';
import doUnmarkSeasonAsRewatchedShows from './shows/actions/doUnmarkSeasonAsRewatched';
import doUnmarkSeasonAsWatchedShows from './shows/actions/doUnmarkSeasonAsWatched';
import doUnmarkShowAsRewatchedShows from './shows/actions/doUnmarkShowAsRewatched';
import doUnmarkShowAsWatchedShows from './shows/actions/doUnmarkShowAsWatched';
import articlesShows from './shows/reducers/articles';
import charactersShows from './shows/reducers/characters';
import discoverShows from './shows/reducers/discover';
import discoverPlatformsShows from './shows/reducers/discoverPlatforms';
import episodesShows from './shows/reducers/episodes';
import episodesRewatchedShows from './shows/reducers/episodesRewatched';
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
import tagsShows from './shows/reducers/tags';
import unratedEpisodesShows from './shows/reducers/unratedEpisodes';
import unratedShowsShows from './shows/reducers/unratedShows';
import videosShows from './shows/reducers/videos';
import commonsShows from './shows/selectors/commons';
import getCharactersShows from './shows/selectors/getCharacters';
import getDiscoverPlatformsShowsShows from './shows/selectors/getDiscoverPlatformsShows';
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
import getTagsListShows from './shows/selectors/getTagsList';
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
import doFetchNetflixDataSync from './sync/actions/doFetchNetflixData';
import doFetchPlexWebhookSync from './sync/actions/doFetchPlexWebhook';
import doFetchTraktDataSync from './sync/actions/doFetchTraktData';
import doFetchTraktProfileSync from './sync/actions/doFetchTraktProfile';
import doFetchTvTimeDataSync from './sync/actions/doFetchTvTimeData';
import doFetchTvTimeProfilesSync from './sync/actions/doFetchTvTimeProfiles';
import doPostNetflixCredentialsSync from './sync/actions/doPostNetflixCredentials';
import doPostPlexUserSync from './sync/actions/doPostPlexUser';
import doSyncNetflixSync from './sync/actions/doSyncNetflix';
import doSyncTraktSync from './sync/actions/doSyncTrakt';
import doSyncTvTimeSync from './sync/actions/doSyncTvTime';
import doUnsyncNetflixSync from './sync/actions/doUnsyncNetflix';
import doUnsyncTraktSync from './sync/actions/doUnsyncTrakt';
import doUnsyncTvTimeSync from './sync/actions/doUnsyncTvTime';
import constantsSync from './sync/constants';
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
      doPostElevatorBadge: doPostElevatorBadgeBadges,
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
      doClearCategoryPosts: doClearCategoryPostsBlog,
      doClearTagPosts: doClearTagPostsBlog,
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
  collections: {
    actions: {
      doEditCollection: doEditCollectionCollections,
      doFetchCollection: doFetchCollectionCollections,
      doFetchCollectionList: doFetchCollectionListCollections,
      doPostCollection: doPostCollectionCollections,
      doRemoveCollection: doRemoveCollectionCollections,
    },
    reducers: {
      collections: collectionsCollections,
      members: membersCollections,
    },
    selectors: {
      commons: commonsCollections,
      getCollection: getCollectionCollections,
      getCollectionList: getCollectionListCollections,
    },
    constants: constantsCollections,
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
      doCommentArticlePost: doCommentArticlePostComments,
      doCommentEpisode: doCommentEpisodeComments,
      doCommentEpisodePost: doCommentEpisodePostComments,
      doCommentEvent: doCommentEventComments,
      doCommentEventPost: doCommentEventPostComments,
      doCommentMember: doCommentMemberComments,
      doCommentMemberPost: doCommentMemberPostComments,
      doCommentMovie: doCommentMovieComments,
      doCommentMoviePost: doCommentMoviePostComments,
      doCommentPoll: doCommentPollComments,
      doCommentPollPost: doCommentPollPostComments,
      doCommentShow: doCommentShowComments,
      doCommentShowPost: doCommentShowPostComments,
      doCommentSpecificEvent: doCommentSpecificEventComments,
      doEditCommentLocale: doEditCommentLocaleComments,
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
  home: {
    actions: {
      doFetchHomeBanner: doFetchHomeBannerHome,
      doFetchHomeBlocks: doFetchHomeBlocksHome,
      doFetchHomeCollections: doFetchHomeCollectionsHome,
      doFetchHomePopular: doFetchHomePopularHome,
      doFetchHomePopularArticles: doFetchHomePopularArticlesHome,
      doFetchHomePopularPlatform: doFetchHomePopularPlatformHome,
      doFetchHomeRecommendation: doFetchHomeRecommendationHome,
      doFetchHomeTop: doFetchHomeTopHome,
      doFetchHomeTrailers: doFetchHomeTrailersHome,
    },
    reducers: {
      articles: articlesHome,
      blocks: blocksHome,
      collections: collectionsHome,
      popular: popularHome,
      popularPlatform: popularPlatformHome,
      reco: recoHome,
      top: topHome,
      trailers: trailersHome,
    },
    selectors: {
      commons: commonsHome,
      getHomeBlocks: getHomeBlocksHome,
      getHomeCollections: getHomeCollectionsHome,
      getHomeLastTop: getHomeLastTopHome,
      getHomePopular: getHomePopularHome,
      getHomePopularArticles: getHomePopularArticlesHome,
      getHomePopularPlatform: getHomePopularPlatformHome,
      getHomeRecommendation: getHomeRecommendationHome,
      getHomeRecoReferenceShow: getHomeRecoReferenceShowHome,
      getHomeTrailers: getHomeTrailersHome,
    },
    constants: constantsHome,
  },
  members: {
    actions: {
      doClearMemberNotifications: doClearMemberNotificationsMembers,
      doDeleteNotification: doDeleteNotificationMembers,
      doFetchMember: doFetchMemberMembers,
      doFetchMemberEmail: doFetchMemberEmailMembers,
      doFetchMemberNotifications: doFetchMemberNotificationsMembers,
      doFetchMemberSocioDemo: doFetchMemberSocioDemoMembers,
      doFetchMemberStats: doFetchMemberStatsMembers,
      doFetchMemberYearStats: doFetchMemberYearStatsMembers,
      doFetchUser: doFetchUserMembers,
      doMarkAllNotificationsAsRead: doMarkAllNotificationsAsReadMembers,
      doMarkNotificationAsRead: doMarkNotificationAsReadMembers,
      doPostMemberSocioDemo: doPostMemberSocioDemoMembers,
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
      getMemberSocioDemo: getMemberSocioDemoMembers,
      getMemberStats: getMemberStatsMembers,
      getMemberYearStats: getMemberYearStatsMembers,
      getNotifications: getNotificationsMembers,
      getUser: getUserMembers,
    },
    constants: constantsMembers,
  },
  movies: {
    actions: {
      doAddMovieFavorite: doAddMovieFavoriteMovies,
      doAddMovieTag: doAddMovieTagMovies,
      doFetchFavoriteMovies: doFetchFavoriteMoviesMovies,
      doFetchManyMovies: doFetchManyMoviesMovies,
      doFetchMemberMovies: doFetchMemberMoviesMovies,
      doFetchMemberMoviesList: doFetchMemberMoviesListMovies,
      doFetchMovie: doFetchMovieMovies,
      doFetchMovieArticles: doFetchMovieArticlesMovies,
      doFetchMovieCharacters: doFetchMovieCharactersMovies,
      doFetchMovieGenres: doFetchMovieGenresMovies,
      doFetchTagsList: doFetchTagsListMovies,
      doRateMovie: doRateMovieMovies,
      doRemoveMovieFavorite: doRemoveMovieFavoriteMovies,
      doRemoveMovieMember: doRemoveMovieMemberMovies,
      doRemoveMovieTag: doRemoveMovieTagMovies,
      doUpdateMovieState: doUpdateMovieStateMovies,
    },
    reducers: {
      articles: articlesMovies,
      characters: charactersMovies,
      favorites: favoritesMovies,
      genres: genresMovies,
      members: membersMovies,
      movies: moviesMovies,
      tags: tagsMovies,
    },
    selectors: {
      commons: commonsMovies,
      getMemberMovies: getMemberMoviesMovies,
      getMemberMoviesFavorite: getMemberMoviesFavoriteMovies,
      getMovie: getMovieMovies,
      getMovieArticles: getMovieArticlesMovies,
      getMovieGenres: getMovieGenresMovies,
      getTagsList: getTagsListMovies,
    },
    constants: constantsMovies,
  },
  persons: {
    actions: {
      doFetchPerson: doFetchPersonPersons,
      doFetchPersonArticles: doFetchPersonArticlesPersons,
    },
    reducers: {
      articles: articlesPersons,
      persons: personsPersons,
    },
    selectors: {
      commons: commonsPersons,
      getPerson: getPersonPersons,
      getPersonArticles: getPersonArticlesPersons,
    },
    constants: constantsPersons,
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
      getLastPollUnAnswer: getLastPollUnAnswerPolls,
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
      doClearSearchMovies: doClearSearchMoviesSearchs,
      doClearSearchShows: doClearSearchShowsSearchs,
      doSearchAll: doSearchAllSearchs,
      doSearchMovies: doSearchMoviesSearchs,
      doSearchShows: doSearchShowsSearchs,
      doShowsSearch: doShowsSearchSearchs,
    },
    reducers: {
      all: allSearchs,
      movies: moviesSearchs,
      shows: showsSearchs,
    },
    selectors: {
      commons: commonsSearchs,
      getSearchAll: getSearchAllSearchs,
      getSearchMovies: getSearchMoviesSearchs,
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
      doAddShowTag: doAddShowTagShows,
      doClearDiscoverShows: doClearDiscoverShowsShows,
      doClearDiscoverShowsPlatforms: doClearDiscoverShowsPlatformsShows,
      doFetchDiscoverShows: doFetchDiscoverShowsShows,
      doFetchDiscoverShowsPlatforms: doFetchDiscoverShowsPlatformsShows,
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
      doFetchTagsList: doFetchTagsListShows,
      doFetchUnratedEpisodes: doFetchUnratedEpisodesShows,
      doFetchUnratedShows: doFetchUnratedShowsShows,
      doMarkEpisodeAsDownloaded: doMarkEpisodeAsDownloadedShows,
      doMarkEpisodeAsHidden: doMarkEpisodeAsHiddenShows,
      doMarkEpisodeAsRewatched: doMarkEpisodeAsRewatchedShows,
      doMarkEpisodeAsWatched: doMarkEpisodeAsWatchedShows,
      doMarkManyEpisodeAsWatched: doMarkManyEpisodeAsWatchedShows,
      doMarkSeasonAsHidden: doMarkSeasonAsHiddenShows,
      doMarkSeasonAsRewatched: doMarkSeasonAsRewatchedShows,
      doMarkSeasonAsWatched: doMarkSeasonAsWatchedShows,
      doMarkShowAsRewatched: doMarkShowAsRewatchedShows,
      doMarkShowAsWatched: doMarkShowAsWatchedShows,
      doRateEpisode: doRateEpisodeShows,
      doRateSeason: doRateSeasonShows,
      doRateShow: doRateShowShows,
      doRemoveShow: doRemoveShowShows,
      doRemoveShowArchive: doRemoveShowArchiveShows,
      doRemoveShowFavorite: doRemoveShowFavoriteShows,
      doRemoveShowTag: doRemoveShowTagShows,
      doUnmarkEpisodeAsDownloaded: doUnmarkEpisodeAsDownloadedShows,
      doUnmarkEpisodeAsHidden: doUnmarkEpisodeAsHiddenShows,
      doUnmarkEpisodeAsRewatched: doUnmarkEpisodeAsRewatchedShows,
      doUnmarkEpisodeAsWatched: doUnmarkEpisodeAsWatchedShows,
      doUnmarkManyEpisodeAsWatched: doUnmarkManyEpisodeAsWatchedShows,
      doUnmarkSeasonAsHidden: doUnmarkSeasonAsHiddenShows,
      doUnmarkSeasonAsRewatched: doUnmarkSeasonAsRewatchedShows,
      doUnmarkSeasonAsWatched: doUnmarkSeasonAsWatchedShows,
      doUnmarkShowAsRewatched: doUnmarkShowAsRewatchedShows,
      doUnmarkShowAsWatched: doUnmarkShowAsWatchedShows,
    },
    reducers: {
      articles: articlesShows,
      characters: charactersShows,
      discover: discoverShows,
      discoverPlatforms: discoverPlatformsShows,
      episodes: episodesShows,
      episodesRewatched: episodesRewatchedShows,
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
      tags: tagsShows,
      unratedEpisodes: unratedEpisodesShows,
      unratedShows: unratedShowsShows,
      videos: videosShows,
    },
    selectors: {
      commons: commonsShows,
      getCharacters: getCharactersShows,
      getDiscoverPlatformsShows: getDiscoverPlatformsShowsShows,
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
      getTagsList: getTagsListShows,
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
  sync: {
    actions: {
      doFetchNetflixData: doFetchNetflixDataSync,
      doFetchPlexWebhook: doFetchPlexWebhookSync,
      doFetchTraktData: doFetchTraktDataSync,
      doFetchTraktProfile: doFetchTraktProfileSync,
      doFetchTvTimeData: doFetchTvTimeDataSync,
      doFetchTvTimeProfiles: doFetchTvTimeProfilesSync,
      doPostNetflixCredentials: doPostNetflixCredentialsSync,
      doPostPlexUser: doPostPlexUserSync,
      doSyncNetflix: doSyncNetflixSync,
      doSyncTrakt: doSyncTraktSync,
      doSyncTvTime: doSyncTvTimeSync,
      doUnsyncNetflix: doUnsyncNetflixSync,
      doUnsyncTrakt: doUnsyncTraktSync,
      doUnsyncTvTime: doUnsyncTvTimeSync,
    },
    constants: constantsSync,
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
