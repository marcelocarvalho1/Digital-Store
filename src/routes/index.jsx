import { Routes, Route } from "react-router-dom"
import { HomePage } from '../pages/HomePage/index.jsx'
// import { ProductListingPage } from '../Pages/ProductListingPage/ProductListingPage'
// import { ProductViewPage } from '../Pages/ProductViewPage/ProductViewPage'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/products" element={<ProductListingPage />} />
            <Route path="/viewProduct" element={<ProductViewPage />} /> */}
        </Routes>
    )
}

