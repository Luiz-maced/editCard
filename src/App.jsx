import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative text-center py-24 px-6 overflow-hidden">

  {/* IMAGEM DE FUNDO */}
  <div className="absolute inset-0 opacity-20">
    <img
      src="/Studio-One.avif"
      alt="Edição de áudio"
      className="w-full h-full object-cover"
    />
  </div>

  {/* CONTEÚDO */}
  <div className="relative z-10">
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl font-bold leading-tight"
    >
      Seu conteúdo perde qualidade por causa do
      <span className="text-purple-500"> áudio.</span>
    </motion.h1>

    <p className="text-gray-400 mt-6 text-lg">
      Edição e tratamento profissional de áudio para podcasts e conteúdos de alto nível.
    </p>

    <a href="https://wa.me/seunumero" target="_blank">
      <button className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl text-lg">
        Melhorar meu áudio 🎧
      </button>
    </a>
  </div>
</section>

      {/* PROBLEMA */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Problemas comuns de áudio:
        </h2>

        <div className="space-y-3 text-gray-400">
          <p>❌ Ruídos e chiados</p>
          <p>❌ Volume inconsistente</p>
          <p>❌ Voz abafada ou sem clareza</p>
          <p>❌ Qualidade amadora</p>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-10">
          O que eu faço por você:
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "🎧 Tratamento de Áudio",
              desc: "Remoção de ruídos, limpeza e clareza profissional",
            },
            {
              title: "🎚️ Equalização e Mixagem",
              desc: "Ajuste fino para voz equilibrada e agradável",
            },
            {
              title: "🎬 Edição de Vídeo (opcional)",
              desc: "Cortes simples com foco na qualidade do conteúdo",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900 p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 flex flex-col md:flex-row items-center gap-10">

  <img
    src="/Equipamentos.webp"
    alt="Edição de áudio profissional"
    className="w-full md:w-1/2 rounded-2xl shadow-lg"
  />

  <div className="md:w-1/2">
    <h2 className="text-3xl font-bold mb-4">
      Áudio limpo muda tudo
    </h2>

    <p className="text-gray-400">
      Um bom tratamento de áudio transforma completamente a percepção do seu conteúdo. 
      Mais clareza, mais profissionalismo e mais retenção.
    </p>
  </div>

</section>

      {/* DIFERENCIAL */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Qualidade de áudio faz diferença
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Um áudio limpo e profissional aumenta a credibilidade do seu conteúdo, melhora a experiência do público e mantém a atenção por mais tempo.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Seu conteúdo merece um áudio profissional
        </h2>

        <p className="text-gray-400 mb-6">
          Vamos elevar a qualidade do seu som.
        </p>

        <a href="https://wa.me/11946691016" target="_blank">
          <button className="bg-purple-600 hover:bg-purple-700 px-10 py-5 rounded-2xl text-lg">
            Falar comigo 🎧
          </button>
        </a>
      </section>

    </div>
  );
}

export default App;