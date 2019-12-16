import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve wordpress tags
 *
 * **Dispatch**: `FETCH_WP_TAGS`
 *
 * @alias module:Blog.doFetchBlogTags
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doFetchBlogTags')({ tagIds: ['18', '19', '20'] });
 *
 * @param {Object}  [obj]         Accept the following:
 * @param {Array}   [obj.tagIds]  Tags ids to fetch
 *
 * @returns {Promise}
 */
const doFetchBlogTags = ({ tagIds }) =>
  dispatch => {
    let suffix = '';
    tagIds.map(id => {
      suffix += `include[]=${id}&`;
      return id;
    });

    fetch(`${ApiFetch.getBlogURL()}/tags?${suffix}`).then(response =>
      response.json().then(json =>
        dispatch({
          type: constants.FETCH_WP_TAGS,
          payload: {
            tagIds,
            tags: json || []
          }
        })));
  };

export default doFetchBlogTags;
