import axios from 'axios';

let host = 'http://192.168.98.1:3001/';
// let host = 'http://localhost:3001/';
let prefix = "api/v1";
const jsonApi = axios.create({
    baseURL: host + prefix,
    timeout:10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

const fileUploadApi = axios.create({
    baseURL: host + prefix,
    timeout:10000,
    headers: {
        'Content-Type': 'mutipart/formdata'
    }
})

export { jsonApi, fileUploadApi };