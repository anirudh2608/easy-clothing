import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"

import CategoriesPreview from "../../routes/categories-preview/CategoriesPreview.comonent"
import Category from "../../routes/category/Category.component"


import "./shop.styles.jsx"

const Shop = () => {
   

    useEffect(() => {
        document.title = "Easy Clothing - Shop"
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

export default Shop