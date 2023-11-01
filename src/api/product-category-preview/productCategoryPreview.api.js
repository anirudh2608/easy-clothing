import axios from 'axios';

import { getCategories } from '../categories/categories.api';


const productsPreviewByCategoryApi = (category) => {
    return axios.get(`category/${category}`
        , {
            params: {
                limit: 4
            }
        }
    ).then((response) => response.data);
}

export const getProductsPreviewByCategory = async () => {
    const categories = await getCategories()

    var productsPreview = []

    for (const category of categories) {
        let categoryPreview = await productsPreviewByCategoryApi(category)
        productsPreview.push({ category: category, ...categoryPreview })
    }
    return productsPreview
};