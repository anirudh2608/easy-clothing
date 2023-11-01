import axios from 'axios';

export const getGetProductsByCategory = (category) => {
    return axios.get(`category/${category}`)
        .then((response) => response.data.products);
};