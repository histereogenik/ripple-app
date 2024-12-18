import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { RootReducer } from "../../store"

interface ProtectedRouteProps {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = useSelector((state: RootReducer) => state.auth.token)

  return token ? children : <Navigate to="/login" replace />
}
export default ProtectedRoute
