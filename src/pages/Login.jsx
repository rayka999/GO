import React, { useState } from "react";

export default function LoginPage() {
  // Estado para controlar se mostra Login ou Cadastro
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex bg-[#0b1020] text-white">
      {/* Lado esquerdo - Formulário */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white text-gray-800 rounded-2xl shadow-lg p-8">
          
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">P</div>
            <h1 className="text-xl font-bold">POD Tech</h1>
          </div>

          <h2 className="text-lg font-semibold mb-1">
            {isLogin ? "Bem-vindo(a) de volta!" : "Crie sua conta"}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            {isLogin ? "Faça login para acessar sua conta." : "Preencha os dados abaixo para começar."}
          </p>

          {/* Tabs (Abas) */}
          <div className="flex gap-4 mb-6 border-b">
            <button 
              onClick={() => setIsLogin(true)}
              className={`pb-2 font-medium transition-all ${isLogin ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-400"}`}
            >
              Entrar
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`pb-2 font-medium transition-all ${!isLogin ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-400"}`}
            >
              Criar conta
            </button>
          </div>

          {/* Inputs Dinâmicos */}
          <div className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
            
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Senha"
              className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            {isLogin && (
              <div className="flex justify-end text-sm text-blue-600 cursor-pointer hover:underline">
                Esqueci minha senha
              </div>
            )}

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition-colors">
              {isLogin ? "Entrar" : "Cadastrar agora"}
            </button>
          </div>

          {/* Social login */}
          <div className="flex items-center gap-2 my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-xs text-gray-400">ou</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="flex gap-3 justify-center">
            <button className="p-2 border rounded-lg hover:bg-gray-50 w-10 text-center">G</button>
            <button className="p-2 border rounded-lg hover:bg-gray-50 w-10 text-center">in</button>
            <button className="p-2 border rounded-lg hover:bg-gray-50 w-10 text-center">⊞</button>
          </div>

          <p className="text-sm text-center mt-6 text-gray-500">
            {isLogin ? "Não tem uma conta?" : "Já possui uma conta?"}{" "}
            <span 
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 cursor-pointer font-bold hover:underline"
            >
              {isLogin ? "Criar conta" : "Fazer login"}
            </span>
          </p>
        </div>
      </div>

      {/* Lado direito - Painel informativo */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-10 items-center justify-center">
        <div className="max-w-md text-white space-y-6">
          <h2 className="text-3xl font-bold leading-tight">
            Uma experiência completa de evento na palma da sua mão.
          </h2>
          <ul className="space-y-4 text-lg opacity-90">
            <li className="flex items-center gap-2"><span>✔</span> Acesse conteúdos exclusivos</li>
            <li className="flex items-center gap-2"><span>✔</span> Interaja com expositores</li>
            <li className="flex items-center gap-2"><span>✔</span> Participe de palestras ao vivo</li>
            <li className="flex items-center gap-2"><span>✔</span> Ganhe pontos e prêmios</li>
          </ul>
        </div>
      </div>
    </div>
  );
}