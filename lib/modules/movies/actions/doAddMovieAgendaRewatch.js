import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Manage agenda_rewatch option for a movie
 *
 * **Dispatch**: `ADD_MOVIE_AGENDA_REWATCH`
 *
 * @alias module:Movies.doAddMovieAgendaRewatch
 * @category actions
 *
 * @example
 * BetaSeries.getAction('movies', 'doAddMovieAgendaRewatch')({
 *   id: 438,
 *   value: 1
 * });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Number}  [obj.id]      Movie ID
 * @param {Number}  [obj.value]   Either 1 to activate agenda rewatch for the movie or 0 to deactivate
 *
 * @returns {Promise}
 */
const doAddMovieAgendaRewatch = ({ id, value }) =>
  dispatch =>
    ApiFetch.post('movies/agenda_rewatch', {}, { id, value }).then(response =>
      dispatch({
        type: constants.ADD_MOVIE_AGENDA_REWATCH,
        payload: {
          id,
          value,
          movie: response.movie
        }
      }));

export default doAddMovieAgendaRewatch;
