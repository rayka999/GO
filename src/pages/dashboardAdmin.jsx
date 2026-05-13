import {
  LayoutDashboard,
  Users,
  BarChart3,
  Radio,
  Settings,
  FileText,
  LogOut,
  Plus,
} from "lucide-react";

export default function DashboardAdmin() {
  const cards = [
    {
      titulo: "Usuários",
      valor: "1.250",
    },
    {
      titulo: "Estandes",
      valor: "86",
    },
    {
      titulo: "Avaliações",
      valor: "3.452",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1020] flex items-center justify-center p-6">
      <div className="w-full max-w-7xl h-[700px] bg-white rounded-3xl overflow-hidden flex shadow-2xl">

        {/* SIDEBAR */}
        <aside className="w-72 bg-gradient-to-b from-[#0F172A] to-[#1E1B4B] text-white flex flex-col justify-between p-6">
          
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-2 mb-10">
              <div className="w-8 h-8 rounded-lg bg-violet-600"></div>

              <div>
                <h1 className="font-bold text-lg">PODC</h1>
                <p className="text-xs text-gray-300">ADMIN</p>
              </div>
            </div>

            {/* MENU */}
            <nav className="space-y-3">
              <button className="w-full flex items-center gap-3 bg-violet-600 px-4 py-3 rounded-xl text-sm">
                <LayoutDashboard size={18} />
                Dashboard
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:bg-white/10">
                <Users size={18} />
                Gerenciar
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:bg-white/10">
                <Radio size={18} />
                Transmissão
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:bg-white/10">
                <Settings size={18} />
                Configurações
              </button>
            </nav>
          </div>

          {/* SAIR */}
          <button className="flex items-center gap-3 text-gray-300 hover:text-white">
            <LogOut size={18} />
            Sair
          </button>
        </aside>

        {/* CONTEÚDO */}
        <main className="flex-1 bg-[#F8FAFC] p-8 overflow-auto">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h2>

            <div className="bg-white border rounded-xl px-4 py-2 text-sm text-gray-500">
              01/06/2024 - 14/06/2024
            </div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-5 gap-5 mb-8">

            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border p-5 shadow-sm"
              >
                <p className="text-sm text-gray-500 mb-2">
                  {card.titulo}
                </p>

                <h3 className="text-3xl font-bold text-gray-800">
                  {card.valor}
                </h3>
              </div>
            ))}

            {/* STATUS */}
            <div className="bg-white rounded-2xl border p-5 shadow-sm">
              <p className="text-sm text-gray-500 mb-2">
                Status da Live
              </p>

              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                <span className="text-green-600 font-bold">
                  AO VIVO
                </span>
              </div>

              <p className="text-sm text-green-500">
                Excelente
              </p>
            </div>
          </div>

          {/* GRID INFERIOR */}
          <div className="grid grid-cols-3 gap-6">
            {/* AÇÕES */}
            <div className="bg-white rounded-2xl border p-6 shadow-sm">
              <h3 className="font-semibold text-gray-700 mb-6">
                Ações rápidas
              </h3>

              <div className="space-y-4">
                <button className="w-full border-2 border-violet-300 text-violet-600 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-violet-50">
                  <Plus size={18} />
                  Criar evento
                </button>

                <button className="w-full border-2 border-violet-300 text-violet-600 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-violet-50">
                  <Plus size={18} />
                  Adicionar estande
                </button>

                <button className="w-full border-2 border-red-300 text-red-500 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-50">
                  <Plus size={18} />
                  Adicionar apresentação
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}