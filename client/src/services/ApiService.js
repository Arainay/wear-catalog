const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';
const JSON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export default class ApiService {
  constructor() {
    this.baseUrl = 'http://localhost:4200';
    this.options = {};
  }

  query(url = '', { headers = {}, ...options } = {}) {
    return fetch(`${this.baseUrl}${url}`, {
      ...this.options,
      ...options,
      headers: {
        ...JSON_HEADERS,
        ...headers
      },
      mode: 'cors'
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(`${response.status}. ${response.statusText}`);
      });
  }

  get(url = '', options = {}) {
    return this.query(url, { ...options, method: GET });
  }

  post(url = '', body = {}, options = {}) {
    return this.query(url, { ...options, method: POST, data: JSON.stringify(body) });
  }

  put(url = '', body = {}, options = {}) {
    return this.query(url, { ...options, method: PUT, data: JSON.stringify(body) });
  }

  delete(url = '', options = {}) {
    return this.query(url, { ...options, method: DELETE });
  }
}
