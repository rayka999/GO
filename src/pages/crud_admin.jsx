import React from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  Radio, 
  Users, 
  Search, 
  Plus, 
  Pencil, 
  Trash2,
  Monitor,
  Store,
  LogOut
} from 'lucide-react';

export default function AdminCRUD() {
  return (
    <div className="flex min-h-screen bg-[#050a18] p-4 font-sans">
      
      {/* SIDEBAR ADMIN */}
      <aside className="w-64 bg-[#1e254d] rounded-3xl flex flex-col p-6 text-white/80">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">P</div>
          <span className="text-sm font-bold tracking-tight text-white uppercase">
            POD Tech <span className="font-light opacity-60 italic">Admin</span>
          </span>
        </div>

        <nav className="flex-1 space-y-1">
          <SideItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <SideItem icon={<Settings size={18} />} label="Gerenciar" active />
          <SideItem icon={<Radio size={18} />} label="Transmissão" />
          <SideItem icon={<Settings size={18} />} label="Configurações" />
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
            <TabItem icon={<Monitor size={18} />} label="Apresentações" active />
            <TabItem icon={<Users size={18} />} label="Usuários" />
            <TabItem icon={<Store size={18} />} label="Estandes" />
          </div>
        </header>

        {/* CONTENT PANEL */}
        <div className="p-8 flex-1 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800">Apresentações</h1>
            <button className="bg-[#5c56ff] hover:bg-[#4a44d4] text-white px-5 py-2.5 rounded-xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-indigo-100 active:scale-95">
              <Plus size={18} /> Nova apresentação
            </button>
          </div>

          {/* SEARCH BAR */}
          <div className="relative mb-8 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar evento..." 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
            />
          </div>

          {/* CRUD TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  <th className="pb-4 px-2">Nome da apresentação</th>
                  <th className="pb-4 px-2">Data</th>
                  <th className="pb-4 px-2">Local</th>
                  <th className="pb-4 px-2 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <TableRow 
                  name="PODC 2026" 
                  date="12/06/2026" 
                  location="Estande 08" 
                />
                <TableRow 
                  name="Tech Summit 2026" 
                  date="12/06/2026" 
                  location="Auditório Principal" 
                />
                <TableRow 
                  name="Inova Week 2026" 
                  date="13/06/2026" 
                  location="Estande 05" 
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
      active ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/20' : 'hover:bg-white/5 text-white/60 hover:text-white'
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

function TableRow({ name, date, location }) {
  return (
    <tr className="border-b border-slate-50 group hover:bg-slate-50/80 transition-colors">
      <td className="py-5 px-2 font-bold text-indigo-600 hover:underline cursor-pointer">
        {name}
      </td>
      <td className="py-5 px-2 text-slate-500 font-medium">
        {date}
      </td>
      <td className="py-5 px-2 text-slate-500 font-medium">
        {location}
      </td>
      <td className="py-5 px-2">
        <div className="flex justify-center items-center gap-3">
          <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all" title="Editar">
            <Pencil size={18} />
          </button>
          <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all" title="Excluir">
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}