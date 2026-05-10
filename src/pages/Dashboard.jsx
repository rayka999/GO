export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-dark text-white">

      {/* SIDEBAR */}
      <div className="w-64 bg-black p-6">
        <h1 className="text-primary font-bold text-xl mb-6">PODC</h1>

        <div className="space-y-4 text-gray-300">
          <p>Programação</p>
          <p>Estandes</p>
          <p>Ranking</p>
          <p>Perfil</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-10">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-card p-4 rounded-xl">Usuários: 1.250</div>
          <div className="bg-card p-4 rounded-xl">Estandes: 86</div>
          <div className="bg-card p-4 rounded-xl">Engajamento: 78%</div>
        </div>

        <div className="mt-8 h-64 bg-gradient-to-r from-primary to-blue-500 rounded-xl"></div>
      </div>

    </div>
  );
}