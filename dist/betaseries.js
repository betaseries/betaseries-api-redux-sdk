'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modules = require('./modules');

var _modules2 = _interopRequireDefault(_modules);

var _ApiFetch = require('./utils/fetch/ApiFetch');

var _ApiFetch2 = _interopRequireDefault(_ApiFetch);

var _getAction = require('./utils/func/getAction');

var _getAction2 = _interopRequireDefault(_getAction);

var _getReducer = require('./utils/func/getReducer');

var _getReducer2 = _interopRequireDefault(_getReducer);

var _getConstants = require('./utils/func/getConstants');

var _getConstants2 = _interopRequireDefault(_getConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var config = {
  apiHost: null,
  apiKey: null
};

/**
 * @alias module:BetaSeries.init
 * @category static
 *
 * @param {Object} obj
 * @param {String} obj.apiHost  URI of BetaSeries API
 * @param {String} obj.apiKey   API Key of BetaSeries API
 */
var init = function init(_ref) {
  var _ref$apiHost = _ref.apiHost,
      apiHost = _ref$apiHost === undefined ? 'https://api.betaseries.com' : _ref$apiHost,
      apiKey = _ref.apiKey;

  config.apiHost = apiHost;
  config.apiKey = apiKey;
};

/**
 * @alias module:BetaSeries.setToken
 * @category static
 *
 * @param {String} token Authenticated token
 */
var setToken = function setToken(token) {
  _ApiFetch2.default.setAuthenticatedHeader(token);
};

var BetaSeries = {
  init: init,
  config: config,
  setToken: setToken,
  modules: _modules2.default,
  api: _ApiFetch2.default,
  getAction: (0, _getAction2.default)(_modules2.default),
  getReducer: (0, _getReducer2.default)(_modules2.default),
  getConstants: (0, _getConstants2.default)(_modules2.default)
};

exports.default = BetaSeries;