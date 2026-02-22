import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import "./styles/main.css";
import Scholarships from "./pages/Scholarships";
import Apply from "./pages/Apply";
import Applications from "./pages/Applications";
import AdminApplications from "./pages/AdminApplications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/scholarships" element={<Scholarships />} />
<Route path="/apply/:id" element={<Apply />} />
<Route path="/applications" element={<Applications />} />
<Route path="/admin/applications" element={<AdminApplications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;