import modules from './modules';
import ApiFetch from './utils/fetch/ApiFetch';
import getAction from './utils/func/getAction';
import getReducer from './utils/func/getReducer';
import getConstants from './utils/func/getConstants';

const config = {
  apiHost: null,
  apiKey: null,
};

const init = ({ apiHost = 'https://api.betaseries.com', apiKey }) => {
  config.apiHost = apiHost;
  config.apiKey = apiKey;
};

const setToken = (token) => {
  ApiFetch.setAuthenticatedHeaders(token);
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
