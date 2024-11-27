import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./layouts/Layout"

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="*" element={<Navigate to="/" />} />

        </Routes>
    )
}

export default AppRoute