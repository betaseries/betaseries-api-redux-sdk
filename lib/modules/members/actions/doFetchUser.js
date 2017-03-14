import BetaSeries from '../../../betaseries';
import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

const defaultProps = {
  summary: true,
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
 * @param {Object}  [obj]          Accept the folling:
 * @param {Bool}    [obj.summary]  Display only the information (default `true`)
 * @param {String}  [obj.only]     Display only `movies` or `shows`
 *
 * @returns {Promise}
 */
const doFetchUser = ({ ...props }) => dispatch => (
  ApiFetch.get('members/infos', { memberId: BetaSeries.user.userId, ...defaultProps, ...props })
    .then(response => (
      dispatch({
        type: constants.FETCH_MEMBER,
        payload: {
          ...props,
          memberId: BetaSeries.user.userId,
          member: response.member,
        },
      })
    ))
);

export default doFetchUser;
