import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  summary: true
};

/**
 * Retrieve authenticated user infos
 *
 * **Dispatch**: `FETCH_MEMBER`
 *
 * @alias module:Members.doFetchMember
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doFetchMember')();
 *
 * @param {Object}  [obj]          Accept the folling:
 * @param {Bool}    [obj.memberId] Member ID
 * @param {Bool}    [obj.summary]  Display only the information
 * @param {String}  [obj.only]     Display only `movies` or `shows`
 *
 * @returns {Promise}
 */
const doFetchMember = ({ memberId, ...props }) =>
  dispatch =>
    ApiFetch.get('members/infos', {
      id: memberId,
      ...defaultProps,
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_MEMBER,
        payload: {
          ...props,
          memberId,
          member: response.member
        }
      }));

export default doFetchMember;
