import axios from 'axios';

export const searchProductApi = (title) => {
    return axios.get(`/search?q=${title}`)
        .then((response) => response.data.products
        );
}
