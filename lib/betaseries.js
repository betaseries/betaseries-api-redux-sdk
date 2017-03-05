import modules from './modules';
import ApiFetch from './utils/fetch/ApiFetch';
import getAction from './utils/func/getAction';
import getReducer from './utils/func/getReducer';
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

const config = {
  apiHost: null,
  apiKey: null,
};


/**
 * @alias module:BetaSeries.init
 * @category static
 *
 * @param {Object} obj
 * @param {String} obj.apiHost  URI of BetaSeries API
 * @param {String} obj.apiKey   API Key of BetaSeries API
 */
const init = ({ apiHost = 'https://api.betaseries.com', apiKey }) => {
  config.apiHost = apiHost;
  config.apiKey = apiKey;
};

/**
 * @alias module:BetaSeries.setToken
 * @category static
 *
 * @param {String} token Authenticated token
 */
const setToken = (token) => {
  ApiFetch.setAuthenticatedHeader(token);
};

const BetaSeries = {
  init,
  config,
  setToken,
  modules,
  getAction: getAction(modules),
  getReducer: getReducer(modules),
  getConstants: getConstants(modules),
};

export default BetaSeries;
