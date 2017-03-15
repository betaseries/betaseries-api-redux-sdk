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

var _getSelector = require('./utils/func/getSelector');

var _getSelector2 = _interopRequireDefault(_getSelector);

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

/**
 * @module Members
 */

var config = {
  apiHost: null,
  apiKey: null
};

var user = {
  token: null,
  userId: null
};

/**
 * @alias module:BetaSeries.init
 * @category static
 *
 * @param {Object} [obj]          Accept the folling:
 * @param {String} [obj.apiHost]  URI of BetaSeries API
 * @param {String} [obj.apiKey]   API Key of BetaSeries API
 */
var init = function init(_ref) {
  var _ref$apiHost = _ref.apiHost,
      apiHost = _ref$apiHost === undefined ? 'https://api.betaseries.com' : _ref$apiHost,
      apiKey = _ref.apiKey;

  config.apiHost = apiHost;
  config.apiKey = apiKey;
};

/**
 * @alias module:BetaSeries.setUser
 * @category static
 *
 * @param {Object} [obj]          Accept the folling:
 * @param {String} [obj.token]    Authenticated token
 * @param {String} [obj.userId]   User ID
 */
var setUser = function setUser(_ref2) {
  var token = _ref2.token,
      userId = _ref2.userId;

  _ApiFetch2.default.setAuthenticatedHeader(token);

  user.token = token;
  user.userId = parseInt(userId, 10);
};

var BetaSeries = {
  init: init,
  config: config,
  user: user,
  setUser: setUser,
  modules: _modules2.default,
  api: _ApiFetch2.default,
  getAction: (0, _getAction2.default)(_modules2.default),
  getReducer: (0, _getReducer2.default)(_modules2.default),
  getConstants: (0, _getConstants2.default)(_modules2.default),
  getSelector: (0, _getSelector2.default)(_modules2.default)
};

exports.default = BetaSeries;