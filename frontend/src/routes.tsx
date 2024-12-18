import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import Registration from "./components/Registration"
import DashboardPage from "./components/DashboardPage"
import ProtectedRoute from "./components/ProtectedRoute"
import AuthRoute from "./components/AuthRoute"

const RoutesComponent = () => (
  <Routes>
    <Route
      path="/login"
      element={
        <AuthRoute>
          <LoginPage />
        </AuthRoute>
      }
    />
    <Route
      path="/register"
      element={
        <AuthRoute>
          <Registration />
        </AuthRoute>
      }
    />
    <Route
      path="/newsfeed"
      element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
)

export default RoutesComponent
