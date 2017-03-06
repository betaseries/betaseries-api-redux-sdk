'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _trim2 = require('lodash/trim');

var _trim3 = _interopRequireDefault(_trim2);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _ApiFetch = require('../../../utils/fetch/ApiFetch');

var _ApiFetch2 = _interopRequireDefault(_ApiFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultProps = {
  summary: false,
  order: 'title',
  nbpp: 5,
  page: 1
};

/**
 * Search show by title
 *
 * **Dispatch**: `SEARCH_SHOWS`
 *
 * @alias module:Searchs.doSearchShows
 * @category actions
 *
 * @example
 * BetaSeries.getAction('searchs', 'doSearchShows')({ title: 'alking DEA' });
 *
 * @param {Object}  [obj]         Accept the folling:
 * @param {Number}  [obj.title]   Title search
 * @param {Number}  [obj.summary] Returns only summary infos of the series (default `false`)
 * @param {Number}  [obj.order]   Return order (`title`|`popularity`|`followers`), (default `title`)
 * @param {Number}  [obj.nbpp]    Number of results per page (default `5`, maximum `100`)
 * @param {Number}  [obj.page]    Page number (default `1`)
 *
 * @returns {Promise}
 */
var doSearchShows = function doSearchShows(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ['title']);

  return function (dispatch) {
    var titleTrimed = '%' + (0, _trim3.default)(title).toLowerCase() + '%';

    return _ApiFetch2.default.get('shows/search', _extends({ title: titleTrimed }, defaultProps, props)).then(function (response) {
      return dispatch({
        type: _constants2.default.SEARCH_SHOWS,
        payload: _extends({
          title: title,
          titleTrimed: titleTrimed
        }, props, {
          shows: response.shows
        })
      });
    });
  };
};

exports.default = doSearchShows;