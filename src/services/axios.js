import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    // const admin = JSON.parse(localStorage.getItem('admin'));
    // if (admin) {
    //   config.headers.Authorization = `Bearer ${admin.token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    // const newAccessToken = response.headers['x-access-token'];

    // if (newAccessToken) {
    //   const admin = JSON.parse(localStorage.getItem('admin'));
    //   localStorage.setItem('admin', JSON.stringify({ ...admin, token: newAccessToken }));
    //   window.document.dispatchEvent(new Event('tokenUpdated'));
    // }

    return response;
  },
  (error) => {
    // if (error.response.status === 401) {
    //   localStorage.removeItem('admin');
    //   window.location.replace('/');
    // }
    // if (error.response.status === 403) {
    //   window.location.replace('/unauthorized');
    // }
    return Promise.reject(error);
  },
);

export default instance;
