import { useState } from "react";

const planos = {
  Express: {
    velocidade: "400MB",
    canais: 37,
    categorias: ["Notícias", "Filmes e Séries", "Esportes", "Infantis"],
    destaques: [
      "CNN Brasil", "Jovem Pan News", "FOX News", "Warner", "Sony", "FX",
      "ESPN", "TNT", "Cartoon Network"
    ]
  },
  Master: {
    velocidade: "600MB",
    canais: 52,
    categorias: [
      "Notícias", "Filmes e Séries", "Esportes", "Infantis", "Cultura", "HBO"
    ],
    destaques: [
      "Todos do Express", "HBO (completo)", "Cine Brasil TV", "Film & Arts"
    ]
  },
  United: {
    velocidade: "800MB",
    canais: 63,
    categorias: [
      "Notícias", "Filmes e Séries", "Esportes Avançado", "Infantil Premium",
      "Discovery (completo)", "Nacional"
    ],
    destaques: [
      "Todos do Master e Express", "CNN Espanhol", "Telesur", "National Geographic",
      "Discovery World", "Fish TV", "ESPN 1 a 6"
    ]
  }
};

export default function PainelPlanosTV() {
  const [planoSelecionado, setPlanoSelecionado] = useState("Express");
  const plano = planos[planoSelecionado];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
        Planos de Internet + TV
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1rem 0' }}>
        {Object.keys(planos).map((plano) => (
          <button
            key={plano}
            onClick={() => setPlanoSelecionado(plano)}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: plano === planoSelecionado ? '#4f46e5' : 'white',
              color: plano === planoSelecionado ? 'white' : 'black',
              cursor: 'pointer'
            }}
          >
            {plano}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>{planoSelecionado}</h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>Velocidade: {plano.velocidade}</p>
        <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>Canais: {plano.canais}</p>

        <div>
          <h3 style={{ fontWeight: 'bold', marginTop: '1rem' }}>Categorias:</h3>
          <ul>
            {plano.categorias.map((cat, idx) => (
              <li key={idx}>{cat}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ fontWeight: 'bold', marginTop: '1rem' }}>Destaques:</h3>
          <ul>
            {plano.destaques.map((canal, idx) => (
              <li key={idx}>{canal}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
