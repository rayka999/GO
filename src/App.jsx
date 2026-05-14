import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DashboardParticipante from "./pages/DashboardParticipante";
import DashboardAdmin from "./pages/dashboardAdmin";
import Apresentacoes from "./pages/apresentacoes";
import DashboardExpositor from "./pages/dashboard_expositor";
import CrudAdmin from "./pages/crud_admin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard_p" element={<DashboardParticipante />} />
      <Route path="/dashboard_a" element={<DashboardAdmin />} />
      <Route path="/apresentacoes" element={<Apresentacoes />} />
      <Route path="/dashboard_e" element={<DashboardExpositor />} />
      <Route path="/crud_admin" element={<CrudAdmin />} />
    </Routes>
  );
}