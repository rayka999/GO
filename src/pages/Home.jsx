import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-slate-900">
      {/* --- HERO SECTION --- */}
      <header className="bg-[#0a0b2e] text-white pb-20">
        <nav className="flex items-center justify-between px-10 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md rotate-45 flex items-center justify-center">
              <span className="text-xs font-bold -rotate-45 text-white">P</span>
            </div>
            <span className="text-xl font-bold tracking-tight">POD Tech</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-white transition">Início</a>
            <a href="#" className="hover:text-white transition">Programação</a>
            <a href="#" className="hover:text-white transition">Estandes</a>
            <a href="#" className="hover:text-white transition">Transmissão</a>
            <a href="#" className="hover:text-white transition">Sobre o evento</a>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-semibold transition" href='/login'>
            Entrar
          </button>
        </nav>

        <div className="max-w-7xl mx-auto px-10 mt-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Inovação que <br /> conecta pessoas
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              Participe do maior evento de tecnologia, inovação e transformação digital.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-bold transition">
                Entrar na plataforma
              </button>
              <button className="border border-slate-600 hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition">
                Assistir transmissão
              </button>
            </div>
          </div>
          
          <div className="relative w-full max-w-md mx-auto">
            <div className="aspect-square bg-gradient-to-tr from-blue-900/40 to-purple-900/40 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center">
               <span className="text-blue-500 text-6xl opacity-50">🕶️</span>
            </div>
          </div>
        </div>
      </header>

      {/* --- AGENDA SECTION --- */}
      <section className="max-w-7xl mx-auto px-10 py-16">
        <h2 className="text-2xl font-bold mb-8">Agenda resumida</h2>
        
        <div className="flex gap-4 mb-10 overflow-x-auto pb-2">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold whitespace-nowrap">12 JUN</button>
          <button className="bg-slate-100 text-slate-500 px-6 py-2 rounded-lg font-bold hover:bg-slate-200 transition whitespace-nowrap">13 JUN</button>
          <button className="bg-slate-100 text-slate-500 px-6 py-2 rounded-lg font-bold hover:bg-slate-200 transition whitespace-nowrap">14 JUN</button>
        </div>

        <div className="space-y-4">
          {[
            { time: "10:00", title: "O futuro da IA aplicada aos negócios", local: "📍 Auditório Principal" },
            { time: "14:00", title: "Transformação digital na prática", local: "📍 Auditório Principal" },
            { time: "16:00", title: "Cibersegurança em tempos digitais", local: "📍 Sala 02" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border border-slate-100 rounded-xl hover:shadow-md transition gap-4">
              <div className="flex gap-6 md:gap-12 items-center">
                <span className="font-bold text-lg min-w-[60px] text-blue-600">{item.time}</span>
                <div>
                  <h4 className="font-bold text-slate-800">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.local}</p>
                </div>
              </div>
              <button className="text-blue-600 font-semibold text-sm bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 self-start sm:self-center">
                Ver detalhes
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- ESTANDES SECTION --- */}
      <section className="max-w-7xl mx-auto px-10 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold">Estandes em destaque</h2>
          <a href="#" className="text-blue-600 text-sm font-bold">Ver todos</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "TechSolutions", desc: "Soluções digitais inovadoras", color: "bg-blue-500" },
            { name: "CloudNet", desc: "Infraestrutura em nuvem", color: "bg-cyan-500" },
            { name: "DataWorks", desc: "Dados que transformam", color: "bg-indigo-500" },
            { name: "DevPro", desc: "Ferramentas para desenvolvedores", color: "bg-sky-500" }
          ].map((stand, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-slate-100 rounded-xl mb-4 border border-slate-200 flex items-center justify-center">
                 <span className="text-slate-300 group-hover:scale-110 transition">🖼️</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-3 h-3 rounded-full ${stand.color}`}></div>
                <h3 className="font-bold text-slate-800">{stand.name}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{stand.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0a0b2e] text-white pt-20 pb-10 mt-20">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-md rotate-45 flex items-center justify-center">
                <span className="text-xs font-bold -rotate-45">P</span>
              </div>
              <span className="text-xl font-bold tracking-tight">POD Tech</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Plataforma oficial do evento de inovação e tecnologia que conecta pessoas, empresas e ideias.
            </p>
            <div className="flex gap-4 text-xl">
              <span className="cursor-pointer opacity-70 hover:opacity-100">🔵</span>
              <span className="cursor-pointer opacity-70 hover:opacity-100">📸</span>
              <span className="cursor-pointer opacity-70 hover:opacity-100">💼</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Navegação</h4>
            <ul className="text-slate-400 text-sm space-y-3">
              <li><a href="#" className="hover:text-white">Início</a></li>
              <li><a href="#" className="hover:text-white">Programação</a></li>
              <li><a href="#" className="hover:text-white">Estandes</a></li>
              <li><a href="#" className="hover:text-white">Sobre o evento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Suporte</h4>
            <ul className="text-slate-400 text-sm space-y-3">
              <li><a href="#" className="hover:text-white">Central de ajuda</a></li>
              <li><a href="#" className="hover:text-white">Fale conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contato</h4>
            <ul className="text-slate-400 text-sm space-y-3">
              <li>📧 contato@podtech.com.br</li>
              <li>📞 (11) 99999-9999</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-slate-500 text-xs">
            © 2026 POD Tech - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;