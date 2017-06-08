import parseQS from 'qs/lib/parse';
import BetaSeries from '../../betaseries';

/**
*/
function timeoutPromise(timeout, err, promise) {
  return new Promise((resolve, reject) => {
    promise.then(resolve, reject);
    setTimeout(reject.bind(null, err), timeout);
  });
}

export default (url, options) => {
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

  return timeoutPromise(5000, new Error(`Timeout - ${url}`), fetch(url, options));
};
