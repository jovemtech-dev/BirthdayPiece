import Card from './components/card/card';
import InputDate from './components/input/input';
import Welcome from './components/welcome/welcome';
import episodios from './data/episodes_local.json';
import { useState } from 'react';

function App() {
  const [filtrados, setFiltrados] = useState([]);

  const handleBuscar = (dia, mes) => {
    console.log("HandleBuscar:", dia, mes);  // <-- PRECISA aparecer!

    if (!dia || !mes) {
      return alert("Escolha dia e mês!");
    }

    const results = episodios.filter(ep => {
      if (!ep.air_date) return false;

      const [year, m, d] = ep.air_date.split("-");
      return m === mes && d === dia;
    });

    console.log("Encontrados:", results);

    setFiltrados(results);
  };
  

  return (
    <div className="container">
      <Welcome />

      <InputDate onBuscar={handleBuscar} />

      <div className="cards">
        {filtrados.map((ep) => (
          <Card key={ep.episode} ep={ep} />
        ))}
      </div>
    </div>
  );
}

export default App;