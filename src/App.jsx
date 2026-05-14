import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"; //ok
import DashboardParticipante from "./pages/DashboardParticipante"; //ok
import DashboardAdmin from "./pages/dashboardAdmin"; //ok
import Apresentacoes from "./pages/apresentacoes";
import DashboardExpositor from "./pages/dashboard_expositor"; //ok
import CrudAdmin from "./pages/crud_admin"; //ok

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