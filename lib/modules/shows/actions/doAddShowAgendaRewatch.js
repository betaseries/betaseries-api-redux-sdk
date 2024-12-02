import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Manage agenda_rewatch option for a show
 *
 * **Dispatch**: `ADD_SHOW_AGENDA_REWATCH`
 *
 * @alias module:Shows.doAddShowAgendaRewatch
 * @category actions
 *
 * @example
 * BetaSeries.getAction('shows', 'doAddShowAgendaRewatch')({
 *   id: 438,
 *   value: 1
 * });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.id]      Show ID
 * @param {Number}  [obj.value]   Either 1 to activate agenda rewatch for the show or 0 to deactivate
 *
 * @returns {Promise}
 */
const doAddShowAgendaRewatch = ({ id, value }) =>
  dispatch =>
    ApiFetch.post('shows/agenda_rewatch', {}, { id, value }).then(response =>
      dispatch({
        type: constants.ADD_SHOW_AGENDA_REWATCH,
        payload: {
          id,
          value,
          show: response.show
        }
      }));

export default doAddShowAgendaRewatch;
