import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Retrieve wordpress related posts for parent post
 *
 * **Dispatch**: `FETCH_WP_RELATED_POSTS`
 *
 * @alias module:Blog.doFetchBlogRelatedPosts
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doFetchBlogRelatedPosts')({ parentId: 1, relatedPosts: [{...}] });
 *
 * @param {Object}  [obj]                Accept the following:
 * @param {Number}  [obj.parentId]       Id of the parent post
 * @param {Number}  [obj.relatedPosts]   Related Posts info to fetch
 *
 * @returns {Promise}
 */
const doFetchBlogRelatedPosts = ({ parentId, relatedPosts }) =>
  dispatch => {
    const relatedIds = relatedPosts.map(element => element.id);

    let suffix = '';
    relatedIds.map(id => {
      suffix += `include[]=${id}&`;
      return id;
    });

    fetch(
      `${ApiFetch.getBlogURL()}/posts?categories_exclude=2848&${suffix}`
    ).then(response => response.json().then(json =>
        dispatch({
          type: constants.FETCH_WP_RELATED_POSTS,
          payload: {
            parentId,
            relatedPosts: json || []
          }
        })));
  };

export default doFetchBlogRelatedPosts;
