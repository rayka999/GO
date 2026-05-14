import React from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  BarChart3, 
  Radio, 
  Users, 
  FileText, 
  LogOut, 
  Search, 
  Plus, 
  Pencil, 
  Trash2,
  Calendar,
  Monitor,
  Store
} from 'lucide-react';

export default function AdminCRUD() {
  return (
    <div className="flex min-h-screen bg-[#050a18] p-4 font-sans">
      
      {/* SIDEBAR ADMIN */}
      <aside className="w-64 bg-[#1e254d] rounded-3xl flex flex-col p-6 text-white/80">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">P</div>
          <span className="text-xl font-bold tracking-tight text-white uppercase text-sm">PODC <span className="font-light opacity-60">Admin</span></span>
        </div>

        <nav className="flex-1 space-y-1">
          <SideItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <SideItem icon={<Settings size={18} />} label="Gerenciar (CRUD)" active />
          <SideItem icon={<BarChart3 size={18} />} label="Métricas" />
          <SideItem icon={<Radio size={18} />} label="Transmissão" />
          <SideItem icon={<Settings size={18} />} label="Configurações" />
          <SideItem icon={<Users size={18} />} label="Usuários" />
          <SideItem icon={<FileText size={18} />} label="Logs do sistema" />
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 mt-auto hover:text-white transition-colors">
          <LogOut size={18} />
          <span className="font-medium">Sair</span>
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 bg-white ml-4 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
        
        {/* TOP TABS NAVIGATION */}
        <header className="border-b border-slate-100 px-8 pt-6">
          <div className="flex gap-8">
            <TabItem icon={<Calendar size={18} />} label="Eventos" active />
            <TabItem icon={<Users size={18} />} label="Usuários" />
            <TabItem icon={<Store size={18} />} label="Estandes" />
            <TabItem icon={<Monitor size={18} />} label="Apresentações" />
          </div>
        </header>

        {/* CONTENT PANEL */}
        <div className="p-8 flex-1">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800">Eventos</h1>
            <button className="bg-[#5c56ff] hover:bg-[#4a44d4] text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-indigo-100">
              <Plus size={18} /> Novo evento
            </button>
          </div>

          {/* SEARCH BAR */}
          <div className="relative mb-6 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar evento..." 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
            />
          </div>

          {/* CRUD TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-50">
                  <th className="pb-4">Nome do evento</th>
                  <th className="pb-4">Data</th>
                  <th className="pb-4">Local</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <TableRow 
                  name="PODC 2024" 
                  date="12/06/2024 - 14/06/2024" 
                  location="Expo Center Norte - SP" 
                  status="Ativo" 
                  statusColor="text-indigo-600 bg-indigo-50"
                />
                <TableRow 
                  name="Tech Summit 2024" 
                  date="20/07/2024 - 22/07/2024" 
                  location="Centro de Convenções - RJ" 
                  status="Em breve" 
                  statusColor="text-blue-600 bg-blue-50"
                />
                <TableRow 
                  name="Inova Week 2024" 
                  date="15/08/2024 - 17/08/2024" 
                  location="CentroSul - Florianópolis" 
                  status="Rascunho" 
                  statusColor="text-orange-600 bg-orange-50"
                />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper Components
function SideItem({ icon, label, active = false }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
      active ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/20' : 'hover:bg-white/5'
    }`}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function TabItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-2 pb-4 px-2 cursor-pointer transition-all border-b-2 font-bold text-sm ${
      active ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'
    }`}>
      {icon}
      {label}
    </div>
  );
}

function TableRow({ name, date, location, status, statusColor }) {
  return (
    <tr className="border-b border-slate-50 group hover:bg-slate-50/50 transition-colors">
      <td className="py-5 font-bold text-indigo-600 hover:underline cursor-pointer">{name}</td>
      <td className="py-5 text-slate-500 font-medium">{date}</td>
      <td className="py-5 text-slate-500 font-medium">{location}</td>
      <td className="py-5">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="py-5">
        <div className="flex justify-center gap-4">
          <button className="text-indigo-400 hover:text-indigo-600 transition-colors">
            <Pencil size={18} />
          </button>
          <button className="text-rose-400 hover:text-rose-600 transition-colors">
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}