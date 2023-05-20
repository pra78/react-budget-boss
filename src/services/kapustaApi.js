import axios from 'axios';

const baseUrl = 'https://kapusta-backend.goit.global';

axios.defaults.baseURL = baseUrl;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/* ================== AUTHORIZATION & AUTHENTICATION =========================== */

export const registerUserApi = userForm => {
  return axios.post('/auth/register', { ...userForm }).then(res => res);
};

export const loginUserApi = userForm => {
  return axios.post('/auth/login', { ...userForm }).then(res => res);
};

export const logoutUserApi = () => {
  return axios.post('/auth/logout').then(res => res);
};

export const refreshTokenApi = sid => {
  return axios.post('/auth/refresh', { sid }).then(res => res);
};

/* ================== GOOGLE AUTHORIZATION ======================= */
// const queryString = require('query-string');
// const URL = require("url");

// exports.googleAuth = async (req, res) => {
//   const stringifiedParams = queryString.stringify({
//     client_id: process.env.GOOGLE_CLIENT_ID,
//     redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
//     scope: [
//       'https://www.googleapis.com/auth/userinfo.email',
//       'https://www.googleapis.com/auth/userinfo.profile',
//     ].join(' '),
//     response_type: 'code',
//     access_type: 'offline',
//     prompt: 'consent',
//   });
//   return res.redirect(
//     `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`
//   );
// };

// exports.googleRedirect = async (req, res) => {
//   const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
//   const urlObj = new URL(fullUrl);
//   const urlParams = queryString.parse(urlObj.search);
//   const code = urlParams.code;
//   const tokenData = await axios({
//     url: `https://oauth2.googleapis.com/token`,
//     method: 'post',
//     data: {
//       client_id: process.env.GOOGLE_CLIENT_ID,
//       client_secret: process.env.GOOGLE_CLIENT_SECRET,
//       redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
//       grant_type: 'authorization_code',
//       code,
//     },
//   });
//   const userData = await axios({
//     url: 'https://www.googleapis.com/oauth2/v2/userinfo',
//     method: 'get',
//     headers: {
//       Authorization: `Bearer ${tokenData.data.access_token}`,
//     },
//   });
//   // userData.data.email
//   // ...
//   // ...
//   // ...
//   return res.redirect(
//     `${process.env.FRONTEND_URL}?email=${userData.data.email}`
//   );
// };

/* ================== TRANSACTIONS =========================== */
export const addTransactionIncomeApi = transactionForm => {
  return axios
    .post('/transaction/income', { ...transactionForm })
    .then(res => res);
};

export const getTransactionIncomeApi = () => {
  return axios.get('/transaction/income').then(res => res);
};

export const addTransactionExpenseApi = transactionForm => {
  return axios
    .post('/transaction/expense', { ...transactionForm })
    .then(res => res);
};

export const getTransactionExpenseApi = () => {
  return axios.get('/transaction/expense').then(res => res);
};

export const deleteTransactionApi = transactionId => {
  return axios.delete(`/transaction/${transactionId}`).then(res => res);
};

export const getTransactionIncomeCategoriesApi = () => {
  return axios.get('/transaction/income-categories').then(res => res);
};

export const getTransactionExpenseCategoriesApi = () => {
  return axios.get('/transaction/expense-categories').then(res => res);
};

export const getTransactionPeriodDataApi = date => {
  return axios.get(`/transaction/period-data?date=${date}`).then(res => res);
};

/* ================== USER =========================== */
export const updateUserBalanceApi = newBalance => {
  return axios.patch('/user/balance', { ...newBalance }).then(res => res);
};

export const getUserInfoApi = () => {
  return axios.get('/user').then(res => res);
};
