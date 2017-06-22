export const queryParams = (params) => {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

export const get = (url, options = {}) => {
  options = {
    method: 'GET',
    ...options
  }

  if (options.queryParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(options.queryParams);
    delete options.queryParams;
  }

  return fetch(url, options);
};

export const post = ({url, data}) => {
  const config = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return fetch(url, config);
};

export const put = ({url, data}) => {
  const config = {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return fetch(url, config);
};

