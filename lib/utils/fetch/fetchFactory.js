import parseQS from 'qs/lib/parse';
import BetaSeries from '../../betaseries';

const RETRY_TIMEOUT = 15000;
const RETRY_MAX_LIMIT = 5;

/**
 * @returns {Promise}
 */
const doRequest = (url, options, retries) => {
  if (BetaSeries.getUserConnection() === 'none') {
    if (retries < RETRY_MAX_LIMIT) {
      setTimeout(
        () => {
          doRequest(url, options, retries + 1);
        },
        RETRY_TIMEOUT
      );
    }

    return Promise.reject();
  }

  if (BetaSeries.logger) {
    BetaSeries.logger({
      method: options.method || 'GET',
      url: url.split('?')[0],
      querystring: url.indexOf('?') === -1
        ? null
        : parseQS(url.substring(url.indexOf('?') + 1)),
      headers: options.headers
    });
  }

  return fetch(url, options);
};

export default (url, options) => doRequest(url, options, 0);
