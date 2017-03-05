import trimStart from 'lodash/trimStart';
import stringifyQS from 'qs/lib/stringify';
import RestError from '../error/RestError';
import BetaSeries from '../../betaseries';

/**
 * ApiFetch class
 */
class ApiFetch {
  /**
   * @param {Object} headers  Headers key, value
   */
  constructor(headers = {}) {
    this.headers = headers;
  }

  /**
   * @returns {Headers}
   */
  getHeaders() {
    return new Headers({
      'Content-Type': 'application/json',
      'X-BetaSeries-Version': '2.4',
      'X-BetaSeries-Key': BetaSeries.config.apiKey,
      ...this.headers,
    });
  }

  setAuthenticatedHeader = (token) => {
    this.headers = {
      ...this.headers,
      'X-BetaSeries-Token': token,
    };
  }

  getUrl = (endPoint, params = {}) => {
    let paramString = stringifyQS(params);
    if (paramString.length > 0) {
      paramString = `?${paramString}`;
    }

    return `${BetaSeries.config.apiHost}/${trimStart(endPoint, '/')}${paramString}`;
  }

  promiseHandler = request => request
    .then(response => this.handleResponse(response))

  handleResponse = (response) => {
    if (response.ok && response.status === 204) {
      return Promise.resolve(null);
    }

    return response.json().then((json) => {
      if (response.ok) {
        return json;
      }

      throw new RestError(json.errors[0].code, json.errors[0].text);
    });
  }

  withFormData = () => new this.constructor({
    ...this.headers,
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  })

  get = (endPoint, params = {}) => (
    this.promiseHandler(fetch(this.getUrl(endPoint, params), {
      method: 'GET',
      headers: this.getHeaders(endPoint),
    }))
  )

  post = (endPoint, params = {}, body = {}) => (
    this.promiseHandler(fetch(this.getUrl(endPoint, params), {
      method: 'POST',
      headers: this.getHeaders(endPoint),
      body: JSON.stringify(body),
    }))
  )

  patch = (endPoint, params = {}, body = {}) => (
    this.promiseHandler(fetch(this.getUrl(endPoint, params), {
      method: 'PATCH',
      headers: this.getHeaders(endPoint),
      body: JSON.stringify(body),
    }))
  )

  upload = (endPoint, params = {}, picture = {}, body = {}) => {
    const formdata = new FormData();

    formdata.append(picture.key, {
      uri: picture.uri,
      type: 'image/jpg',
      name: `${picture.key}.jpg`,
    });

    formdata.append('body', JSON.stringify(body));

    return this
      .withFormData()
      .promiseHandler(fetch(this.getUrl(endPoint, params), {
        method: 'POST',
        headers: this.getHeaders(endPoint),
        body: formdata,
      }));
  }

  remove = (endPoint, params = {}) => (
    this.promiseHandler(fetch(this.getUrl(endPoint, params), {
      method: 'DELETE',
      headers: this.getHeaders(endPoint),
    }))
  )
}

export default (new ApiFetch());
