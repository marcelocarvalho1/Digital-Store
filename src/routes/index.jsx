import { Routes, Route } from "react-router-dom"
import { HomePage } from '../pages/HomePage'
import { ProductListingPage } from '../pages/ProductListingPage/ProductListingPage'
import { ProductViewPage } from '../pages/ProductViewPage/ProductViewPage'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/viewProduct" element={<ProductViewPage />} />
        </Routes>
    )
}

