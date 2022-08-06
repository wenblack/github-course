import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Página de Exemplo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          O contador é  {count}
        </button>
        <p>
          Edite o arquivo <code>src/App.tsx</code> e salve para testar
        </p>
      </div>
      <p className="read-the-docs">
        Clique nos logos do Vite e do React para aprender mais
        </p>
    </div>
  )
}

export default App
