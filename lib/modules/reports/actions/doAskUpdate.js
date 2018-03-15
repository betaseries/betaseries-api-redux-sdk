import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Ask for an update for a media
 *
 * **Dispatch**: ``
 *
 * @alias module:Polls.doAskUpdate
 * @category actions
 *
 * @example
 * BetaSeries.getAction('reports', 'doAskUpdate')({
 *   id: 120,
 *   type: 'show'
 * });
 *
 * @param {Object}  [obj]       Accept the following:
 * @param {Number}  [obj.id]    Media ID for the report
 * @param {String}  [obj.type]  Type of media: show or film
 *
 * @returns {Promise}
 */
const doAskUpdate = ({ id, type }) =>
  dispatch =>
    ApiFetch.post('reports/update', {
      id,
      type
    }).then(response =>
      dispatch({
        type: constants.UPDATE,
        payload: {
          id,
          type,
          response
        }
      }));

export default doAskUpdate;
