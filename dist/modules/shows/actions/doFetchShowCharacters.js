'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _ApiFetch = require('../../../utils/fetch/ApiFetch');

var _ApiFetch2 = _interopRequireDefault(_ApiFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve characters of the show
 *
 * **Dispatch**: `FETCH_SHOW_CHARACTERS`
 *
 * @alias module:Shows.doFetchShowCharacters
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShowCharacters')({ showId: 1275 });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.showId]    Show ID
 *
 * @returns {Promise}
 */
var doFetchShowCharacters = function doFetchShowCharacters(_ref) {
  var showId = _ref.showId;
  return function (dispatch) {
    return _ApiFetch2.default.get('shows/characters', { id: showId }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_SHOW_CHARACTERS,
        payload: {
          showId: showId,
          characters: response.characters
        }
      });
    });
  };
};

exports.default = doFetchShowCharacters;