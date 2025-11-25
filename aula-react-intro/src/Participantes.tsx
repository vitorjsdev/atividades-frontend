import { useState } from 'react';

type Participante = {
  nome: string;
  idade: number;
};

export function Participantes() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [lista, setLista] = useState<Participante[]>([]);
  const [filtro, setFiltro] = useState('todas');

  const adicionar = () => {
    if (!nome || !idade) return alert("Preencha tudo!");
    setLista([...lista, { nome, idade: Number(idade) }]);
    limpar();
  };

  const limpar = () => {
    setNome('');
    setIdade('');
  };

  const remover = (index: number) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  // Lógica de filtro e contadores
  const listaFiltrada = lista.filter(p => {
    if (filtro === 'maiores') return p.idade >= 18;
    if (filtro === 'menores') return p.idade < 18;
    return true;
  });

  const totalMaiores = lista.filter(p => p.idade >= 18).length;

  return (
    <div style={{ fontFamily: 'Arial', padding: 20, maxWidth: 500, margin: '0 auto', background: '#fff', borderRadius: 8 }}>
      <h2>Cadastro de Participantes</h2>
      
      <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
        <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
        <input placeholder="Idade" type="number" value={idade} onChange={e => setIdade(e.target.value)} />
      </div>
      
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <button onClick={adicionar}>Adicionar</button>
        <button onClick={limpar}>Limpar</button>
      </div>

      <div style={{ marginBottom: 10, borderTop: '1px solid #ccc', paddingTop: 10 }}>
        Filtros: 
        <button onClick={() => setFiltro('todas')} style={{marginLeft: 5}}>Todas</button>
        <button onClick={() => setFiltro('maiores')} style={{marginLeft: 5}}>Maiores</button>
        <button onClick={() => setFiltro('menores')} style={{marginLeft: 5}}>Menores</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {listaFiltrada.map((p, i) => (
          <li key={i} style={{ background: '#f9f9f9', margin: '5px 0', padding: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>
              {p.nome} ({p.idade} anos) 
              {p.idade >= 18 && <span style={{ background: 'green', color: 'white', padding: '2px 6px', borderRadius: 4, marginLeft: 5, fontSize: '0.8em' }}>Maior</span>}
            </span>
            <button onClick={() => remover(i)} style={{ color: 'red', border: 'none', background: 'transparent', cursor: 'pointer' }}>X</button>
          </li>
        ))}
      </ul>

      <p><strong>Total:</strong> {lista.length} | <strong>Maiores de idade:</strong> {totalMaiores}</p>
    </div>
  );
}