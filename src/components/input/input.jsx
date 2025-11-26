import { useState } from 'react';

function InputDate({ onBuscar }) {
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');

  const handleClick = () => {
    onBuscar(dia, mes);
  };
  console.log(dia,mes)

  return (
    <div className="inputs">
      <select value={dia} onChange={(e) => setDia(e.target.value)}>
        <option value="">Dia</option>
        {[...Array(31)].map((_, i) => (
          <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
            {i + 1}
          </option>
        ))}
      </select>

      <select value={mes} onChange={(e) => setMes(e.target.value)}>
        <option value="">Mês</option>
        {[...Array(12)].map((_, i) => (
          <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
            {i + 1}
          </option>
        ))}
      </select>

      <button onClick={handleClick}>Buscar</button>
    </div>
  );
}

export default InputDate;
