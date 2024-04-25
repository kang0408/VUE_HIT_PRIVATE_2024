import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.phuonghight.click',
    headers: {
        'Content-Type': 'application/json'
    }
})

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
    // Do something before request is sent
        const token = 
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwYTQzMDFiMy1lYjYwLTRjZGQtODQ4Mi1iZDliN2I0MjJhY2EiLCJhdXRoIjoiUk9MRV9BRE1JTiIsInR5cGUiOiJhY2Nlc3MiLCJleHAiOjE3MTI3NTk4NzQsImlhdCI6MTcxMjY3MzQ3NCwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ._fCgFiq5TkjJlvCuiakpb9dRMEc6ZcopssK1YWFUzDU';
        config.headers.Authorization = `Bearer ${token}`;
    },
    function (error) {
    // Do something with request error
    return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
    },
    function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
    }
);