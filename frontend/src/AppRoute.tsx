import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./layouts/Layout"
import AuthCallbackPage from "./pages/AuthCallbackPage"

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path="*" element={<Navigate to="/" />} />

        </Routes>
    )
}

export default AppRoute