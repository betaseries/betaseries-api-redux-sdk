import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve authenticated user socio demo infos
 *
 * **Dispatch**: `FETCH_MEMBER_SOCIO_DEMO`
 *
 * @alias module:Members.doFetchMemberSocioDemo
 * @category actions
 *
 * @example
 * BetaSeries.getAction('members', 'doFetchMemberSocioDemo')();
 *
 * @param {Object}  [obj]          Accept the following:
 *
 * @returns {Promise}
 */
const doFetchMemberSocioDemo = ({ ...props }) =>
  dispatch =>
    ApiFetch.get('members/sociodemo', {
      ...props
    }).then(response =>
      dispatch({
        type: constants.FETCH_MEMBER_SOCIO_DEMO,
        payload: {
          ...props,
          sociodemo: response.sociodemo || {}
        }
      }));

export default doFetchMemberSocioDemo;
