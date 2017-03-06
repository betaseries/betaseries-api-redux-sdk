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
 * Retrieve show
 *
 * **Dispatch**: `FETCH_SHOW`
 *
 * @alias module:Shows.doFetchShow
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchShow')({ showId: 1275 });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Number}  [obj.showId]    Show ID
 *
 * @returns {Promise}
 */
var doFetchShow = function doFetchShow(_ref) {
  var showId = _ref.showId;
  return function (dispatch) {
    return _ApiFetch2.default.get('shows/display', { id: showId }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_SHOW,
        payload: {
          showId: showId,
          show: response.show
        }
      });
    });
  };
};

exports.default = doFetchShow;