'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _difference2 = require('lodash/difference');

var _difference3 = _interopRequireDefault(_difference2);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _ApiFetch = require('../../../utils/fetch/ApiFetch');

var _ApiFetch2 = _interopRequireDefault(_ApiFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve many shows
 *
 * **Dispatch**: `FETCH_MANY_SHOWS`
 *
 * @alias module:Shows.doFetchManyShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchManyShows')({ showIds: [1275, 481] });
 *
 * @param {Object}  [obj]           Accept the folling:
 * @param {Array}   [obj.showIds]    List of shows ID
 *
 * @returns {Promise}
 */
var doFetchManyShows = function doFetchManyShows(_ref) {
  var showIds = _ref.showIds;
  return function (dispatch, getState) {
    var state = getState();

    // fetch shows only if does not exist on reducers
    var cleanShowIds = (0, _difference3.default)(showIds, Object.keys(state.shows).map(function (show) {
      return parseInt(show, 10);
    }));

    if (cleanShowIds.length === 0) {
      return Promise.resolve();
    }

    return _ApiFetch2.default.get('shows/display', { id: cleanShowIds.join(',') }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_MANY_SHOWS,
        payload: {
          showIds: cleanShowIds,
          shows: cleanShowIds.length === 1 ? [response.show] : response.shows
        }
      });
    });
  };
};

exports.default = doFetchManyShows;