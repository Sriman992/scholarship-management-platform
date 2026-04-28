import { Navigate } from "react-router-dom";
import { getAuthSession } from "../services/authService";

export default function ProtectedRoute({ children, requiredRole }) {
  const session = getAuthSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  const { role } = session;

  if (requiredRole && role !== requiredRole) {
    console.warn(
      `Access denied: User has role '${role}' but route requires '${requiredRole}'`
    );
    
    // Redirect to appropriate dashboard
    if (role === "ADMIN") {
      return <Navigate to="/admin" replace />;
    }
    return <Navigate to="/student" replace />;
  }

  return children;
}
