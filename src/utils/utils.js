export const isArrayAndHasContent = (arr) => {
  return Array.isArray(arr) && arr.length > 0;
};

export const parseResponseError = (err) => {
  if (err.response) {
    const { data } = err.response;

    if (data.validation && data.validation.body) {
      return data.validation.body.message;
    } else if (data.message) {
      return data.msg;
    } else {
      return data.msg;
    }
  }

  return 'Please try again later.';
};
