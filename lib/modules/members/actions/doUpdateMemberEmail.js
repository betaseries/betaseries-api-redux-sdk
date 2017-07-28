import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Update member email
 *
 * **Dispatch**: `UPDATE_MEMBER_EMAIL`
 *
 * @alias module:Members.doUpdateMemberEmail
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doUpdateMemberEmail')({
 *   email: toto@toto.toto,
 * });
 *
 * @param {Object}  [obj]             Accept the following:
 * @param {String}  [obj.email]       New email
 *
 * @returns {Promise}
 */
const doUpdateMemberEmail = ({ email }) =>
  dispatch =>
    ApiFetch.post('members/email', {
      email
    }).then(response =>
      dispatch({
        type: constants.UPDATE_MEMBER_EMAIL,
        payload: {
          email: response.email,
          errors: response.errors || []
        }
      }));

export default doUpdateMemberEmail;
