import { useState } from "react";
import { Star, Calendar, Clock, MapPin, ChevronLeft } from "lucide-react";

export default function EventDetails() {
  const [comment, setComment] = useState("");

  return (
    <div className="min-h-screen bg-[#050a18] flex items-center justify-center p-4 md:p-6 font-sans">
      {/* Container principal */}
      <div className="w-full max-w-6xl bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl overflow-hidden">
        
        {/* Topo: Ação de Voltar fora do fluxo das colunas para manter alinhamento */}
        <div className="mb-6 md:mb-10">
          <button className="flex items-center text-[#5c56ff] font-bold text-sm hover:translate-x-[-4px] transition-transform">
            <ChevronLeft size={18} strokeWidth={3} className="mr-1" /> Voltar
          </button>
        </div>

        {/* Grid Principal */}
        <div className="flex flex-col lg:flex-row items-start gap-12 xl:gap-20">
          
          {/* LADO ESQUERDO: Conteúdo Informativo */}
          <div className="flex-1 w-full">
            <h1 className="text-3xl md:text-5xl font-[900] text-slate-900 mb-8 leading-[1.1] tracking-tight">
              O futuro da IA aplicada aos negócios
            </h1>

            <div className="space-y-4 mb-12">
              <h2 className="text-xl font-bold text-slate-900">Descrição</h2>
              <p className="text-slate-500 leading-relaxed text-base md:text-lg">
                Nesta palestra, vamos explorar como a Inteligência Artificial está
                transformando negócios, aumentando produtividade e criando novas
                oportunidades no mercado.
              </p>
            </div>

            {/* Ações/Informações Alinhadas em Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-slate-50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-50 rounded-2xl">
                  <Calendar className="text-[#5c56ff]" size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-sm">Data</span>
                  <span className="text-xs text-slate-400 font-medium">12 de junho de 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-50 rounded-2xl">
                  <Clock className="text-[#5c56ff]" size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-sm">Horário</span>
                  <span className="text-xs text-slate-400 font-medium">10:00 - 11:00</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-50 rounded-2xl">
                  <MapPin className="text-[#5c56ff]" size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-sm">Local</span>
                  <span className="text-xs text-slate-400 font-medium">Auditório Principal</span>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Card de Ação (Avaliação) */}
          <div className="w-full lg:w-[360px] sticky top-6">
            <div className="bg-[#f8fafc] rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-xl mb-4">Avalie esta palestra</h3>

              <div className="flex flex-col gap-4">
                {/* Estrelas e Nota alinhadas */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-slate-900">4,8</span>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">256 avaliações</p>
                  </div>
                </div>

                <textarea
                  className="w-full p-4 rounded-2xl bg-white border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-[#5c56ff]/20 focus:border-[#5c56ff] transition-all resize-none min-h-[140px] placeholder:text-slate-300"
                  placeholder="O que achou do conteúdo?"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />

                <button className="w-full bg-[#5c56ff] hover:bg-[#4a44d4] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-100 active:scale-95 flex items-center justify-center gap-2">
                  Enviar avaliação
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}