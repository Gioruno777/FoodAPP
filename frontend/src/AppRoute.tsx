import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./layouts/Layout"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoute from "./auth/ProtectedRoute"

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero><HomePage /></Layout>} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />

            <Route element={<ProtectedRoute />}>
                <Route path="user-profile" element={<Layout><UserProfilePage /></Layout>} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoute