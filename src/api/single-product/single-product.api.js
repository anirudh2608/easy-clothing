import axios from 'axios';

export const getSingleProduct = (productId) => {
    return axios.get(`/${productId}`)
        .then((response) => response.data);
};