import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requiredRole }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // No token = not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Token exists but wrong role
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

  // All checks passed
  return children;
}
