import { Contador } from './Contador';
import { Participantes } from './Participantes';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#eee', padding: 20, fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Portfólio de Atividades React</h1>
      <hr style={{ margin: '20px 0' }} />
      
      {/* Aqui exibimos a Aula 20 */}
      <Contador />
      
      <hr style={{ margin: '40px 0' }} />
      
      {/* Aqui exibimos a Aula 23 */}
      <Participantes />
    </div>
  );
}

export default App;