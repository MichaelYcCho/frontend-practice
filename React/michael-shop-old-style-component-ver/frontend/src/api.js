import axios from "axios";


const baseURL = 'http://127.0.0.1:8000/api/v1';
const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';


export const AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem(ACCESS_TOKEN)
            ? 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

export const LoginAxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem(ACCESS_TOKEN)
            ? 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

LoginAxiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem(ACCESS_TOKEN);
    config.headers.Authorization = "Bearer " + token;

    return config;
});

LoginAxiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const {
            config,
            response: { status },
        } = error;

        const originalRequest = config;

        if (status === 401) {
            const refreshToken = localStorage.getItem(REFRESH_TOKEN);
            axios({
                method: 'post',
                url: `${baseURL}/accounts/token/refresh/`,
                data: { refresh: refreshToken },
            }).then((response) => {
                const accessTokens = response.data.access;

                localStorage.setItem(ACCESS_TOKEN, accessTokens);

                originalRequest.headers = { 'Authorization': 'Bearer ' + accessTokens };
                return axios(originalRequest);
            });
        }
        return Promise.reject(error);
    },
);

export default AxiosInstance;
