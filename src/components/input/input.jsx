import { useState } from 'react';

function InputDate({ onBuscar }) {
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');

  const handleClick = () => {
    onBuscar(dia, mes);
  };
  console.log(dia, mes)

  return (
    <div className="row mb-4 justify-content-center text-center m-5">
      <div className='col-sm-4 col-md-4 mb-2'>
        <select className='form-control text-center' value={dia} onChange={(e) => setDia(e.target.value)}>
          <option value="">Dia</option>
          {[...Array(31)].map((_, i) => (
            <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className='col-sm-4 col-md-4 mb-2'>
        <select className='form-control text-center' value={mes} onChange={(e) => setMes(e.target.value)}>
          <option value="">Mês</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className='col-sm-4 col-md-4 mb-2'>
        <button className='btn btn-primary w-100' onClick={handleClick}>Buscar</button>
      </div>
    </div>
  );
}

export default InputDate;
