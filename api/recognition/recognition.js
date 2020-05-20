import { jsonApi, fileUploadApi } from '../main';

export function fetchInfoIdol(payload) {
    return fileUploadApi.post('ai/recognizing', payload)
    .then(res=> res)
    .catch(error=> error.response);
}
