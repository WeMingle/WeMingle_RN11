export const BASE_URL = 'http://49.172.40.78:8080';

export const axiosPrivate = axios.create({
  BASE_URL: `${BASE_URL}`,
  withCredentials: true,
});
