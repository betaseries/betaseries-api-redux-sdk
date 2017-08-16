import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Update member password
 *
 * **Dispatch**: `UPDATE_MEMBER_PASSWORD`
 *
 * @alias module:Members.doUpdateMemberPassword
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doUpdateMemberPassword')({
 *   current_password: aaaa,
 *   new_password: bbbb,
 *   confirmed_password: bbbb,
 * });
 *
 * @param {Object}  [obj]                    Accept the following:
 * @param {String}  [obj.current_password]   Current password
 * @param {String}  [obj.new_password]       New password
 * @param {String}  [obj.confirmed_password] Confirmed new password
 *
 * @returns {Promise}
 */
const doUpdateMemberPassword = ({ ...props }) =>
  dispatch =>
    ApiFetch.post('members/password', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.UPDATE_MEMBER_PASSWORD,
        payload: {
          ...props,
          errors: response.errors || []
        }
      }));

export default doUpdateMemberPassword;
