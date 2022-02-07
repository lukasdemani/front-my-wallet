import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);

  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

function registerTransaction(body) {
  const promise = axios.post(`${BASE_URL}/transactions`, body);

  return promise;
}

function getTransactions(token) {

  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/transactions`, config);

  return promise;
}

function getTotal(token) {
  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/total`, config);

  return promise;
}

const api = {
  login,
  signUp,
  registerTransaction,
  getTransactions,
  getTotal
}

export default api;