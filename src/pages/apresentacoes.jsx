import { useState } from "react";
import { Star, Calendar, Clock, MapPin, ChevronLeft } from "lucide-react";

export default function EventDetails() {
  const [comment, setComment] = useState("");

  return (
    // Fundo principal escuro como na imagem
    <div className="min-h-screen bg-[#050a18] p-4 md:p-8 flex justify-center">
      <div className="max-w-5xl w-full">
        
        {/* Card Branco Principal */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl text-slate-900">
          
          {/* Botão Voltar */}
          <button className="flex items-center text-indigo-600 font-medium text-sm mb-6 hover:underline">
            <ChevronLeft size={18} /> Voltar
          </button>

          {/* Título Principal */}
          <h1 className="text-3xl font-extrabold mb-4 text-slate-900">
            O futuro da IA aplicada aos negócios
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* LADO ESQUERDO: Imagem e Info */}
            <div className="md:col-span-8 space-y-6">
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74dea327912?q=80&w=1000" 
                alt="Palestra"
                className="rounded-2xl w-full h-[350px] object-cover shadow-sm"
              />

              <div className="space-y-4">
                <h2 className="text-xl font-bold">Descrição</h2>
                <p className="text-slate-600 leading-relaxed">
                  Nesta palestra, vamos explorar como a Inteligência Artificial está
                  transformando negócios, aumentando produtividade e criando novas
                  oportunidades no mercado.
                </p>

                {/* Grid de Detalhes com Ícones */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <Calendar className="text-indigo-600" size={20} />
                    <div>
                      <p className="font-bold text-sm">Data</p>
                      <p className="text-sm text-slate-500">12 de junho de 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-indigo-600" size={20} />
                    <div>
                      <p className="font-bold text-sm">Horário</p>
                      <p className="text-sm text-slate-500">10:00 - 11:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-indigo-600" size={20} />
                    <div>
                      <p className="font-bold text-sm">Local</p>
                      <p className="text-sm text-slate-500">Auditório Principal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LADO DIREITO: Sidebar de Avaliação */}
            <div className="md:col-span-4 space-y-6">

              {/* Box de Avaliação */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
                <h2 className="font-bold text-lg">Avalie esta palestra</h2>

                {/* Estrelas */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={22} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-slate-800">
                    4,8 <span className="text-slate-400 font-normal">(256 avaliações)</span>
                  </p>
                </div>

                <textarea
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  rows="3"
                  placeholder="Deixe seu comentário..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />

                <button className="w-full bg-[#5c56ff] hover:bg-[#4a44d4] text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-indigo-200">
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