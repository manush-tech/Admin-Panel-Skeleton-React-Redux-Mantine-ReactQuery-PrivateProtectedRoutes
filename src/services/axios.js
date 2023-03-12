import axios from 'axios';

// create axios instance

export default (baseURL) => {
  const instance = axios.create({
    baseURL,
  });

  //request interceptor to add the auth token header to requests
  instance.interceptors.request.use((config) => {
    // checking if the access token exist in the localStorage
    //   const accessToken = store.getState().auth.token;
    //   config.headers = {
    //     'Content-Type': config.headers['Content-Type']
    //       ? config.headers['Content-Type']
    //       : 'application/json',
    //     Authorization: `Bearer ${accessToken}`,
    //   };
    return config;
  });

  // response interceptor to refresh token on receiving token expired error
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      //   if (error.response.status === 401) {
      //     // logging user out
      //     store.dispatch(authActions.logout());
      //     return;
      //   }
      //   if (error.response.status === 500) {
      //     errorNoitif(error?.response?.data?.msg);
      //   }
      //   if (error.response.status === 404) {
      //     errorNoitif(error?.response?.data?.msg);
      //   }
      //   if (error.response.status === 400) {
      //     errorNoitif(error?.response?.data?.msg);
      //   }

      //   if (error.response.status === 403) {
      //     errorNoitif(error?.response?.data?.msg);
      //     window.location.replace(UNAUTHORIZED);
      //   }
      //   if (error.response) {
      //     console.error(error.response);
      //   } else if (error.request) {
      //     errorNoitif('Internal server error');
      //   } else {
      //     errorNoitif('Internal server error');
      //   }
      return Promise.reject(error);
    },
  );

  return instance;
};
