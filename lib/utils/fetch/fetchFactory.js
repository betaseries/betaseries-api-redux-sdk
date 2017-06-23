import parseQS from 'qs/lib/parse';
import BetaSeries from '../../betaseries';

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

  return fetch(url, options);
};
