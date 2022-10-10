import axios from 'axios';

/**
 * URLs and other api constants
 */
const constants = {
    api: {
        baseURL: 'https://ascapimgtsrv.azure-api.net/asc-fnapp',
    },
};

/**
 * Create an Axios Client with defaults
 */
export default axios.create({
    baseURL: constants.api.baseURL,
    headers: {'Ocp-Apim-Subscription-Key': 'c4e772c8566f41d5a0e51c499c3bf229' }
});