import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./routes/Home"
import Registro from "./routes/Registro"
import Login from "./routes/Login"
import Sobre from "./routes/Sobre"
import Planos from "./routes/Planos"
import { useState } from "react"


function App() {
  
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  return (
    <BrowserRouter>
      <Header usuario={usuario} setUsuario={setUsuario}/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/registro" element={<Registro />}/>
          <Route path="/login" element={<Login setUsuario={setUsuario}/>}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/planos" element={<Planos />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
