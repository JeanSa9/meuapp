import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold text-center">Planos de Internet + TV</h1>
      <div className="flex justify-center gap-4">
        {Object.keys(planos).map((plano) => (
          <Button
            key={plano}
            variant={plano === planoSelecionado ? "default" : "outline"}
            onClick={() => setPlanoSelecionado(plano)}
          >
            {plano}
          </Button>
        ))}
      </div>

      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-center">{planoSelecionado}</h2>
          <p className="text-center text-lg">Velocidade: {plano.velocidade}</p>
          <p className="text-center text-lg">Canais: {plano.canais}</p>

          <div>
            <h3 className="font-semibold">Categorias:</h3>
            <ul className="list-disc list-inside">
              {plano.categorias.map((cat, idx) => (
                <li key={idx}>{cat}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Destaques:</h3>
            <ul className="list-disc list-inside">
              {plano.destaques.map((canal, idx) => (
                <li key={idx}>{canal}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
