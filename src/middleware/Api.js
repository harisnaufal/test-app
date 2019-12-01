import Axios from 'axios';
import Config from '../config/Config';

function __handleApiSuccess(res, resolve) {
  resolve(res.data);
}

function __handleApiError(err, reject) {
  reject(err);
}

function __callApi(url, method = 'GET') {
  const response = new Promise((resolve, reject) => {
    Axios[method.toLowerCase()](url)
      .then(res => {
        __handleApiSuccess(res, resolve);
      })
      .catch(err => {
        __handleApiError(err, reject);
      });
  });
  return response;
}

export const fetchProducts = () => {
  const url = Config.api.host;
  return __callApi(url, 'GET');
};
