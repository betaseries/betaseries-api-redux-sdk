import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';
import fetchFactory from '../../../utils/fetch/fetchFactory';

/**
 * Send blog analytics
 *
 * **Dispatch**: `SEND_WP_ANALYTICS`
 *
 * @alias module:Blog.doSendBlogAnalytics
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doSendBlogAnalytics')({ timestamp: 0, ua: 'mozilla/…', base: 'https://www.betaseries.com/blog/2019/12/attention-greve-des-series/' });
 *
 * @param {Object}  [obj]                   Accept the following:
 * @param {String}  [obj.browser]           Browser (Chrome, Safari, App…)
 * @param {String}  [obj.platform]          Platform (OS X, iPhone 8, Android X…)
 * @param {String}  [obj.version]           App or web version
 * @param {String}  [obj.referred]          Url source from which we come
 * @param {String}  [obj.ip]                Client IP
 * @param {String}  [obj.current_page_type] Page type: post_tag, home, or post
 * @param {String}  [obj.current_page_id]   Page Id
 * @param {String}  [obj.ua]                User Agent
 * @param {String}  [obj.timestamp]         Timestamp
 * @param {String}  [obj.page_uri]          Page Uri (/10216-autopsie-des-series-la-casa-de-papel)
 * @param {String}  [obj.base]              Url of article
 *
 * @returns {Promise}
 */
const doSendBlogAnalytics = ({ ...props }) =>
  dispatch => {
    const body = {
      browser: props.browser || null,
      platform: props.platform || null,
      version: props.version || null,
      referred: props.referred || undefined,
      ip: props.ip || null,
      current_page_type: props.current_page_type || null,
      current_page_id: props.current_page_id || null,
      ua: props.ua || null,
      timestamp: props.timestamp || null,
      page_uri: props.page_uri || null,
      track_all: '1',
      api: 'wp-json',
      base: props.base || null
    };

    return fetchFactory(
      `${ApiFetch.getBlogAnalyticsURL()}?_=${props.timestamp}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `wp_statistics_hit=${JSON.stringify(body)}`
      }
    ).then(response =>
      dispatch({
        type: constants.SEND_WP_ANALYTICS,
        payload: {
          ...props,
          statusCode: response.status
        }
      }));
  };

export default doSendBlogAnalytics;
