import { Routes, Route } from "react-router-dom"
import { HomePage } from '../pages/HomePage'
import { ProductListingPage } from '../pages/ProductListingPage'
import { ProductViewPage } from '../pages/ProductViewPage'
import { CreateAccountPage } from './../pages/CreateAccountPage/CreateAccount';


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/viewProduct" element={<ProductViewPage />} />
            <Route path="/register" element={<CreateAccountPage />} />
        </Routes>
    )
}

