'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _ApiFetch = require('../../../utils/fetch/ApiFetch');

var _ApiFetch2 = _interopRequireDefault(_ApiFetch);

var _doFetchManyShows = require('./doFetchManyShows');

var _doFetchManyShows2 = _interopRequireDefault(_doFetchManyShows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve similar shows
 *
 * **Dispatch**:
 *
 *  * `FETCH_SIMILAR_SHOWS`
 *  * `FETCH_MANY_SHOWS`
 *
 * @alias module:Shows.doFetchSimilarShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doFetchSimilarShows')({ showId: 1275 });
 *
 * @param {Object}  [obj]         Accept the folling:
 * @param {Number}  [obj.showId]  Show ID
 *
 * @returns {Promise}
 */
var doFetchSimilarShows = function doFetchSimilarShows(_ref) {
  var showId = _ref.showId;
  return function (dispatch) {
    return _ApiFetch2.default.get('/shows/similars', { id: showId }).then(function (response) {
      var similars = response.similars.slice(0, 5);
      var showIds = similars.map(function (similar) {
        return similar.show_id;
      });

      if (showIds.length === 0) {
        return Promise.resolve({ similars: similars });
      }

      return dispatch((0, _doFetchManyShows2.default)({ showIds: showIds })).then(function () {
        return {
          similars: showIds
        };
      });
    }).then(function (response) {
      return dispatch({
        type: _constants2.default.FETCH_SIMILAR_SHOWS,
        payload: {
          showId: showId,
          similars: response.similars
        }
      });
    });
  };
};

exports.default = doFetchSimilarShows;