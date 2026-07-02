/* eslint-disable require-jsdoc, class-methods-use-this */
import trimStart from 'lodash/trimStart';
import stringifyQS from 'qs/lib/stringify';
import RestError from '../error/RestError';
import BetaSeries from '../../betaseries';
import fetchFactory from './fetchFactory';

/**
 * API provider
 *
 * @alias module:BetaSeries.api
 * @category static
 */
class ApiFetch {
  /**
   * @param {Object} headers  Headers key, value
   * @param {String} blogUrl  Blog url
   */
  constructor(headers = {}) {
    this.netinfo = 'wifi';
    this.headers = headers;
    this.blogUrl = 'https://www.betaseries.com/article/wp-json/wp/v2';
    this.blogMenuUrl = 'https://www.betaseries.com/article/wp-json/menus/v1';
    this.blogUrlNonce = 'https://www.betaseries.com/article/wp-json/betaseries/v1/nonce';
    this.blogAnalyticsUrl = 'https://www.betaseries.com/article/view';
  }

  getHeaders() {
    return {
      'Content-Type': 'application/json',
      'X-BetaSeries-Version': BetaSeries.config.apiVersion || '3.0',
      'X-BetaSeries-Key': BetaSeries.config.apiKey,
      ...this.headers
    };
  }

  getBlogURL() {
    return this.blogUrl;
  }

  getBlogMenuURL() {
    return this.blogMenuUrl;
  }

  getBlogNonceURL() {
    return this.blogUrlNonce;
  }

  getBlogAnalyticsURL() {
    return this.blogAnalyticsUrl;
  }

  getUserConnection() {
    return this.netinfo;
  }

  setAuthenticatedHeader(token) {
    this.setExtraHeaders({
      'X-BetaSeries-Token': token
    });
  }

  setExtraHeaders(extraHeaders) {
    this.headers = {
      ...this.headers,
      ...extraHeaders
    };
  }

  setUserConnection(netinfo) {
    this.netinfo = netinfo;
  }

  getUrl(endPoint, params = {}) {
    let paramString = stringifyQS(params);
    if (paramString.length > 0) {
      paramString = `?${paramString}`;
    }

    return `${BetaSeries.config.apiHost}/${trimStart(endPoint, '/')}${paramString}`;
  }

  promiseHandler(request) {
    return request.then(response => this.handleResponse(response));
  }

  handleError(statusCode, json, url) {
    throw new RestError(
      statusCode,
      ((json || {}).errors[0] || {}).code,
      `${((json || {}).errors[0] || {}).text}${url ? ` / url = ${url}` : ''}`,
      json
    );
  }

  handleResponse(response) {
    if (!response || (response.ok && response.status === 204)) {
      return Promise.resolve(null);
    }

    /* If content is not json, throw error */
    const contentType = response &&
      response.headers &&
      response.headers.get('content-type');

    if (contentType && contentType.indexOf('application/json') === -1) {
      return response.text().then(text => {
        throw new RestError(
          response.status,
          null,
          `${text}${(response || {}).url ? ` / url = ${(response || {}).url}` : ''}`,
          {}
        );
      });
    }

    return response &&
      response
        .json()
        .then(json => {
          if (contentType && contentType.indexOf('application/json') !== -1) {
            if (response.ok) {
              return json;
            }

            if (json.errors.length > 0) {
              return this.handleError(
                (response || {}).status,
                json,
                (response || {}).url
              );
            }

            return null;
          }

          return response.text();
        })
        .catch(error => {
          if (
            error &&
            error.json &&
            error.json.errors &&
            error.json.errors.length > 0
          ) {
            return this.handleError(
              error.statusCode,
              error.json,
              (response || {}).url
            );
          }

          return Promise.resolve(null);
        });
  }

  withFormData() {
    return new this.constructor({
      ...this.headers,
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json'
    });
  }

  get(endPoint, params = {}) {
    return this.promiseHandler(
      fetchFactory(this.getUrl(endPoint, params), {
        method: 'GET',
        headers: this.getHeaders(endPoint)
      })
    );
  }

  post(endPoint, params = {}, body = {}) {
    return this.promiseHandler(
      fetchFactory(this.getUrl(endPoint, params), {
        method: 'POST',
        headers: this.getHeaders(endPoint),
        body: JSON.stringify(body)
      })
    );
  }

  patch(endPoint, params = {}, body = {}) {
    return this.promiseHandler(
      fetchFactory(this.getUrl(endPoint, params), {
        method: 'PATCH',
        headers: this.getHeaders(endPoint),
        body: JSON.stringify(body)
      })
    );
  }

  upload(endPoint, params = {}, picture = {}, body = {}) {
    const formdata = new FormData();

    formdata.append(picture.key, {
      uri: picture.uri,
      type: 'image/jpg',
      name: `${picture.key}.jpg`
    });

    formdata.append('body', JSON.stringify(body));

    return this.withFormData().promiseHandler(
      fetchFactory(this.getUrl(endPoint, params), {
        method: 'POST',
        headers: this.getHeaders(endPoint),
        body: formdata
      })
    );
  }

  remove(endPoint, params = {}) {
    return this.promiseHandler(
      fetchFactory(this.getUrl(endPoint, params), {
        method: 'DELETE',
        headers: this.getHeaders(endPoint)
      })
    );
  }

  uploadFile(endPoint, params = {}, file = {}, body = {}) {
    const formdata = new FormData();

    formdata.append(file.key, {
      uri: file.uri,
      type: file.type || 'application/zip',
      name: file.name || `${file.key}.zip`
    });

    if (Object.keys(body).length > 0) {
      formdata.append('body', JSON.stringify(body));
    }

    const headers = this.getHeaders(endPoint);

    delete headers['Content-Type'];

    return this.promiseHandler(
      fetchFactory(this.getUrl(endPoint, params), {
        method: 'POST',
        headers,
        body: formdata
      })
    );
  }
}

export default new ApiFetch();
