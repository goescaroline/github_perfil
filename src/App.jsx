import { useState } from 'react'
import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import ReposList from './components/ReposList'


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  
  return (
    <>
      <Perfil nomeUsuario="goescaroline"/>
      <ReposList nomeUsuario="goescaroline"/>

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>toggle form</button> */}
    </>   
  )
}

export default App
