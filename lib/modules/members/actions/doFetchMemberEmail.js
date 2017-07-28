import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve member email
 *
 * **Dispatch**: `FETCH_MEMBER_EMAIL`
 *
 * @alias module:Members.doFetchMemberEmail
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doFetchMemberEmail')();
 *
 *
 * @returns {Promise}
 */
const doFetchMemberEmail = () =>
  dispatch =>
    ApiFetch.get('members/email', {}).then(response =>
      dispatch({
        type: constants.FETCH_MEMBER_EMAIL,
        payload: {
          email: response.email,
          errors: response.errors || []
        }
      }));

export default doFetchMemberEmail;
