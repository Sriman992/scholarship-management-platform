import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Scholarships from "./pages/Scholarships";
import Apply from "./pages/Apply";
import Applications from "./pages/Applications";
import AdminApplications from "./pages/AdminApplications";
import ScholarshipManagement from "./pages/ScholarshipManagement";
import ProtectedRoute from "./components/ProtectedRoute";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Student Routes - Protected */}
        <Route
          path="/student"
          element={
            <ProtectedRoute requiredRole="STUDENT">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/scholarships"
          element={
            <ProtectedRoute requiredRole="STUDENT">
              <Scholarships />
            </ProtectedRoute>
          }
        />
        <Route
          path="/apply/:id"
          element={
            <ProtectedRoute requiredRole="STUDENT">
              <Apply />
            </ProtectedRoute>
          }
        />
        <Route
          path="/applications"
          element={
            <ProtectedRoute requiredRole="STUDENT">
              <Applications />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes - Protected */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/applications"
          element={
            <ProtectedRoute requiredRole="ADMIN">
              <AdminApplications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/scholarships"
          element={
            <ProtectedRoute requiredRole="ADMIN">
              <ScholarshipManagement />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;