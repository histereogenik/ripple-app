import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootReducer } from "../../store";

interface AuthRouteProps {
    children: JSX.Element;
}

const AuthRoute = ({ children }: AuthRouteProps) => {
    const token = useSelector((state: RootReducer) => state.auth.token);

    return token ? <Navigate to="/newsfeed" replace /> : children;
};

export default AuthRoute;
