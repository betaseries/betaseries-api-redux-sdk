import constants from '../constants';
import ApiFetch from '../../../utils/fetch/ApiFetch';

/**
 * Send blog analytics
 *
 * **Dispatch**: `SEND_WP_ANALYTICS`
 *
 * @alias module:Blog.doSendBlogAnalytics
 * @category actions
 *
 * @example
 * BetaSeries.getAction('blog', 'doSendBlogAnalytics')({ timestamp: 0, ua: 'mozilla/…', url: 'https://www.betaseries.com/blog/2019/12/attention-greve-des-series/' });
 *
 * @param {Object}  [obj]            Accept the following:
 * @param {String}  [obj.timestamp]  Unix timestamp
 * @param {String}  [obj.ua]         User agent
 * @param {String}  [obj.url]        Url of article to analyse
 * @param {String}  [obj.referred]   (Optional) url source from which we come
 *
 * @returns {Promise}
 */
const doSendBlogAnalytics = ({ timestamp, ua, url, referred }) =>
  dispatch => {
    let request = `${ApiFetch.getBlogAnalyticsURL()}/hit?_=${timestamp}&wp_statistics_hit_rest=yes&ua=${ua}&url=${url}`;
    if (referred) {
      request += `&referred=${referred}`;
    }

    return fetch(
      'https://www.betaseries.com/article/wp-json/betaseries/v1/nonce'
    ).then(result => result.text().then(nonce =>
        fetch(`${request}&_wpnonce=${nonce.replace(/"/g, '')}`).then(response =>
          response.json().then(json =>
            dispatch({
              type: constants.SEND_WP_ANALYTICS,
              payload: {
                timestamp,
                nonce,
                ua,
                url,
                referred,
                result: json || undefined
              }
            })))));
  };

export default doSendBlogAnalytics;
