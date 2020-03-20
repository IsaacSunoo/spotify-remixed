import { isObject, isEmpty } from 'lodash';

const authParams = (url, query) => {
  let authParamsdUrl = url;

  if (isObject(query) && !isEmpty(query)) {
    authParamsdUrl +=
      '?' +
      Object.keys(query)
        .map(k => {
          return encodeURIComponent(k) + '=' + encodeURIComponent(query[k]);
        })
        .join('&');
  }

  return authParamsdUrl;
};

export default authParams;
