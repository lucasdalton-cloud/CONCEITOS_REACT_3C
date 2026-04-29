import { useState } from 'react'
import './App.css'
import Login from './Login'
import Cadastro from './Cadastro'
import Usuarios from './Usuarios'

function App() {
  const [tela, setTela] = useState('Login')

  const trocarDeTela = (pagina) => {
    setTela(pagina)
  }

  const renderizar = () => {
    if(tela === 'login'){
      return <Login/>
    } else if(tela === 'cadastro') {
      return <Cadastro/>
    } else if(tela === 'usuarios') {
      return <Usuarios/>
    } else{
      return <Login/>
    }
  }

  return (
    <>
      <button onClick={() => trocarDeTela('cadastro')}>Cadastro</button>
      <button onClick={() => trocarDeTela('login')}>Login</button>
      <button onClick={() => trocarDeTela('usuarios')}>Usuarios</button>
      <hr />
      {renderizar()}
    </>
  )

}

export default App
