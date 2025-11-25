import { useState } from 'react';

export function Contador() {
  const [contagem, setContagem] = useState(0);

  const aumentar = () => setContagem(contagem + 1);
  const diminuir = () => setContagem(contagem - 1);
  const zerar = () => setContagem(0);

  return (
    <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: 20, borderRadius: 10, marginBottom: 20, background: '#fff' }}>
      <h2>Atividade Aula 20 - Contador</h2>
      <div style={{ fontSize: '3rem', margin: '20px', fontWeight: 'bold' }}>
        {contagem}
      </div>
      <div>
        <button onClick={aumentar}>Aumentar (+)</button>
        <button onClick={zerar}>Zerar</button>
        <button onClick={diminuir}>Diminuir (-)</button>
      </div>
    </div>
  );
}