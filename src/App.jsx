import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DashboardParticipante from "./pages/DashboardParticipante";
import DashboardAdmin from "./pages/dashboardAdmin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard_p" element={<DashboardParticipante />} />
      <Route path="/dashboard_a" element={<DashboardAdmin />} />
    </Routes>
  );
}