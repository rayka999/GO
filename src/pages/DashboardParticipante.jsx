import {
  Bell,
  Search,
  Trophy,
  LogOut,
  MonitorPlay,
  LayoutGrid,
  User,
  Presentation,
} from "lucide-react";

export default function DashboardParticipante() {
  const palestras = [
    {
      hora: "10:00",
      titulo: "O futuro da IA aplicada aos negócios",
      local: "Auditório Principal",
      palestrante: "Carlos Silva",
    },
    {
      hora: "11:30",
      titulo: "Machine Learning na prática",
      local: "Sala 01",
      palestrante: "Juliana Lopes",
    },
    {
      hora: "14:00",
      titulo: "Transformação digital na prática",
      local: "Auditório Principal",
      palestrante: "Ricardo Almeida",
    },
    {
      hora: "16:00",
      titulo: "Cibersegurança em tempos digitais",
      local: "Sala 02",
      palestrante: "Fernando Costa",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1020] flex items-center justify-center p-6">
      <div className="w-full max-w-7xl h-[700px] bg-white rounded-3xl overflow-hidden flex shadow-2xl">
        
        {/* SIDEBAR */}
        <aside className="w-64 bg-gradient-to-b from-[#0F172A] to-[#1E1B4B] text-white flex flex-col justify-between p-6">
          
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-2 mb-10">
              <div className="w-8 h-8 rounded-lg bg-violet-600"></div>
              <h1 className="font-bold text-xl">PODC</h1>
            </div>

            {/* MENU */}
            <nav className="space-y-3">
              <button className="w-full flex items-center gap-3 bg-violet-600 px-4 py-3 rounded-xl text-sm">
                <Presentation size={18} />
                Programação
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:bg-white/10">
                <LayoutGrid size={18} />
                Estandes
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:bg-white/10">
                <MonitorPlay size={18} />
                Transmissão
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:bg-white/10">
                <User size={18} />
                Perfil
              </button>
            </nav>
          </div>

          {/* SAIR */}
          <button className="flex items-center gap-3 text-gray-300 hover:text-white">
            <LogOut size={18} />
            Sair
          </button>
        </aside>

        {/* MAIN */}
        <main className="flex-1 bg-[#F8FAFC] p-8 flex gap-6">
          
          {/* CONTEÚDO */}
          <div className="flex-1">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Programação
              </h2>

              <div className="flex items-center gap-5">
                <Bell className="text-gray-500" size={20} />

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-violet-300"></div>

                  <span className="text-sm font-medium text-gray-700">
                    João Silva
                  </span>
                </div>
              </div>
            </div>

            {/* ABAS */}
            <div className="flex gap-3 mb-6">
              <button className="bg-violet-600 text-white px-5 py-2 rounded-lg text-sm">
                12 JUN
              </button>

              <button className="bg-white px-5 py-2 rounded-lg text-sm text-gray-600 border">
                13 JUN
              </button>
            </div>

            {/* BUSCA */}
            <div className="relative mb-6">
              <Search
                size={18}
                className="absolute left-4 top-3.5 text-gray-400"
              />

              <input
                type="text"
                placeholder="Buscar palestras..."
                className="w-full bg-white border rounded-xl py-3 pl-11 pr-4 outline-none"
              />
            </div>

            {/* LISTA */}
            <div className="space-y-4">
              {palestras.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 flex items-center justify-between border"
                >
                  <div className="flex gap-6">
                    <span className="font-bold text-gray-700">
                      {item.hora}
                    </span>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.titulo}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {item.local}
                      </p>

                      <p className="text-sm text-gray-400">
                        Palestrante: {item.palestrante}
                      </p>
                    </div>
                  </div>

                  <button className="border border-violet-300 text-violet-600 px-4 py-2 rounded-lg text-sm hover:bg-violet-50">
                    Ver detalhes
                  </button>
                </div>
              ))}
            </div>

            {/* FOOTER MENU */}
            <div className="mt-10 flex justify-around text-gray-500 text-sm">
              <div className="flex flex-col items-center gap-1 text-violet-600">
                <Presentation size={20} />
                Programação
              </div>

              <div className="flex flex-col items-center gap-1">
                <LayoutGrid size={20} />
                Estandes
              </div>

              <div className="flex flex-col items-center gap-1">
                <MonitorPlay size={20} />
                Transmissão
              </div>

              <div className="flex flex-col items-center gap-1">
                <User size={20} />
                Perfil
              </div>
            </div>
          </div>

          {/* SIDEBAR DIREITA */}
          <div className="w-80 space-y-6">

            {/* PRÓXIMA PALESTRA */}
            <div className="bg-white rounded-2xl p-5 border">
              <h3 className="font-semibold text-gray-700 mb-4">
                Próxima palestra
              </h3>

              <div className="w-full h-40 rounded-xl bg-gray-300 mb-4"></div>

              <h4 className="font-bold text-gray-800">
                O futuro da IA aplicada aos negócios
              </h4>

              <p className="text-sm text-gray-500 mt-2">
                10:00 • Auditório Principal
              </p>

              <button className="mt-5 w-full border border-violet-300 text-violet-600 py-3 rounded-xl">
                Ver detalhes
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}