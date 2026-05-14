import React from 'react';
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  Star, 
  MessageSquare, 
  User, 
  LogOut, 
  Edit3, 
  Plus 
} from 'lucide-react';

export default function ExhibitorPanel() {
  return (
    <div className="flex min-h-screen bg-[#050a18] p-4 font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#1e254d] rounded-3xl flex flex-col p-6 text-white/80">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">POD Tech</span>
        </div>

        <nav className="flex-1 space-y-2">
          <p className="text-xs font-semibold text-white/40 uppercase px-2 mb-4">Painel do Expositor</p>
          
          <NavItem icon={<LayoutDashboard size={20} />} label="Meu Estande" active />
          <NavItem icon={<LayoutDashboard size={20} />} label="Minha Apresentação" />
          <NavItem icon={<Star size={20} />} label="Avaliações" />
          <NavItem icon={<User size={20} />} label="Perfil" />
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 mt-auto hover:text-white transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Sair</span>
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-white ml-4 rounded-3xl p-8 overflow-hidden">
        <h1 className="text-2xl font-bold text-slate-800 mb-8">Meu Estande</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* CARD 1: Perfil da Empresa */}
          <section className="border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
            <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl rotate-12 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white"></div>
              </div>
            </div>
            <h2 className="text-xl font-bold text-slate-800">TechSolutions</h2>
            <p className="text-sm font-semibold text-slate-500 mb-4">Soluções digitais inovadoras</p>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Oferecemos soluções completas em tecnologia para transformar negócios e impulsionar resultados.
            </p>
            <button className="mt-auto flex items-center gap-2 text-indigo-600 font-bold text-sm hover:underline">
              <Edit3 size={16} /> Editar informações
            </button>
          </section>

          {/* CARD 2: Mídias */}
          <section className="border border-slate-100 rounded-3xl p-6 flex flex-col shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Mídias do estande</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="col-span-2 h-32 bg-slate-200 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400" className="w-full h-full object-cover" alt="Estande principal" />
              </div>
              <div className="h-24 bg-slate-200 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1505373630103-892744917ad5?w=200" className="w-full h-full object-cover" alt="Detalhe 1" />
              </div>
              <div className="h-24 bg-slate-200 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1531050171669-011123e80a58?w=200" className="w-full h-full object-cover" alt="Detalhe 2" />
              </div>
            </div>
            <button className="mt-auto w-full border-2 border-dashed border-indigo-100 rounded-xl py-3 flex items-center justify-center gap-2 text-indigo-600 font-bold text-sm hover:bg-indigo-50 transition-colors">
              <Plus size={18} /> Adicionar mídia
            </button>
          </section>

          {/* CARD 3: Avaliações */}
          <section className="border border-slate-100 rounded-3xl p-6 flex flex-col shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-800">Avaliações (42)</h3>
            </div>
            
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-black text-slate-800">4,7</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <RatingBar star="5" width="w-[85%]" count="32" />
              <RatingBar star="4" width="w-[20%]" count="7" />
              <RatingBar star="3" width="w-[8%]" count="2" />
              <RatingBar star="2" width="w-[4%]" count="1" />
              <RatingBar star="1" width="w-[0%]" count="0" />
            </div>

            <button className="mt-auto w-full border border-indigo-200 rounded-xl py-3 text-indigo-600 font-bold text-sm hover:bg-indigo-50 transition-colors">
              Ver todas avaliações
            </button>
          </section>

        </div>
      </main>
    </div>
  );
}

// Subcomponentes para organização
function NavItem({ icon, label, active = false }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active ? 'bg-white/10 text-white shadow-lg' : 'hover:bg-white/5 hover:text-white'
    }`}>
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
}

function RatingBar({ star, width, count }) {
  return (
    <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
      <span className="w-2">{star}</span>
      <Star size={12} fill="currentColor" className="text-yellow-400" />
      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full bg-yellow-400 rounded-full ${width}`}></div>
      </div>
      <span className="w-4 text-right">{count}</span>
    </div>
  );
}