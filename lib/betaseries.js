import modules from './modules';
import ApiFetch from './utils/fetch/ApiFetch';
import getAction from './utils/func/getAction';
import getReducer from './utils/func/getReducer';
import getSelector from './utils/func/getSelector';
import getConstants from './utils/func/getConstants';

/**
 * @module BetaSeries
 */

/**
 * @module Shows
 */

/**
 * @module Movies
 */

/**
 * @module Comments
 */

/**
 * @module Searchs
 */

/**
 * @module Members
 */

/**
 * @module Timelines
 */

/**
 * @module Subtitles
 */

/**
 * @module Badges
 */

/**
 * @module Polls
 */

/**
 * @module Planning
 */

const config = {
  apiHost: null,
  apiKey: null
};

const user = {
  token: null,
  userId: null
};

/**
 * @alias module:BetaSeries.init
 * @category static
 *
 * @param {Object} [obj]                   Accept the following:
 * @param {String} [obj.apiHost]           URI of BetaSeries API
 * @param {String} [obj.apiKey]            API Key of BetaSeries API
 * @param {String} [obj.apiExtraHeaders]   API Extra Headers
 */
const init = (
  { apiHost = 'https://api.betaseries.com', apiKey, apiExtraHeaders = {} }
) => {
  config.apiHost = apiHost;
  config.apiKey = apiKey;
  ApiFetch.setExtraHeaders(apiExtraHeaders);
};

/**
 * @alias module:BetaSeries.setUser
 * @category static
 *
 * @param {Object} [obj]          Accept the following:
 * @param {String} [obj.token]    Authenticated token
 * @param {String} [obj.userId]   User ID
 */
const setUser = ({ token, userId }) => {
  ApiFetch.setAuthenticatedHeader(token);

  user.token = token;
  user.userId = parseInt(userId, 10);
};

/**
 * @alias module:BetaSeries.logger
 * @category static
 *
 * @param {Object} [obj]              Accept the following:
 * @param {String} [obj.method]       Method name
 * @param {String} [obj.url]          Base url
 * @param {Object} [obj.querystring]  QueryString object
 * @param {Object} [obj.headers]      Headers object
 */
const logger = null;

const BetaSeries = {
  init,
  config,
  user,
  setUser,
  modules,
  logger,
  api: ApiFetch,
  getAction: getAction(modules),
  getReducer: getReducer(modules),
  getConstants: getConstants(modules),
  getSelector: getSelector(modules)
};

export default BetaSeries;
