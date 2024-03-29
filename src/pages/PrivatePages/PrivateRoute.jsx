import { Navigate } from "react-router-dom";
import { UserAuth } from "../../services/firebase/AuthContext";

export default function PrivateRoute({ children }) {
    const { user } = UserAuth()
    if (!user) {
        return <Navigate to="/" />
    }
    return children
}