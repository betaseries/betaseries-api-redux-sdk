import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  summary: true
};

/**
 * Retrieve authenticated user infos
 *
 * **Dispatch**: `FETCH_USER`
 *
 * @alias module:Members.doFetchUser
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doFetchUser')();
 *
 * @param {Object}  [obj]          Accept the following:
 * @param {Bool}    [obj.summary]  Display only the information (default `true`)
 * @param {String}  [obj.only]     Display only `movies` or `shows`
 *
 * @returns {Promise}
 */
const doFetchUser = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('members/infos', {
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_USER,
        payload: {
          ...props,
          memberId: response.member.id,
          member: response.member
        }
      }));

export default doFetchUser;
