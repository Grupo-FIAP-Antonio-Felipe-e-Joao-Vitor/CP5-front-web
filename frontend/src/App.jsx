import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./routes/Home"
import Registro from "./routes/Registro"
import Login from "./routes/Login"
import Sobre from "./routes/Sobre"
import Planos from "./routes/Planos"
import Treinos from "./routes/Treinos"
import { useState } from "react"
import CriarPlano from "./routes/CriarPlano"
import EditarPlano from "./routes/EditarPlano"
import Error from "./routes/Error"
import Footer from "./components/Footer"
import CriarTreino from "./routes/CriarTreino"

function App() {
  
  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  const [token, setToken] = useState(() => {
    const tokenSalvo = localStorage.getItem("token");
    return tokenSalvo ? tokenSalvo : null;
  })

  return (
    <BrowserRouter>
      <Header usuario={usuario} setUsuario={setUsuario}/>
      <main>
        <Routes>
          <Route path="*" element={<Error />}/>
          <Route path="/" element={<Home usuario={usuario}/>}/>
          <Route path="/registro" element={<Registro />}/>
          <Route path="/login" element={<Login setUsuario={setUsuario} setToken={setToken}/>}/>
          <Route path="/sobre" element={<Sobre />}/>
          <Route path="/planos" element={<Planos usuario={usuario} setUsuario={setUsuario} token={token} setToken={setToken} />}/>
          <Route path="/treinos" element={<Treinos usuario={usuario} setUsuario={setUsuario} token={token} setToken={setToken} />}/>
          <Route path="/criarPlano" element={<CriarPlano usuario={usuario} setUsuario={setUsuario} token={token} setToken={setToken}/>} />
          <Route path="/editarPlano" element={<EditarPlano usuario={usuario} setUsuario={setUsuario} token={token} setToken={setToken}/>}/>
          <Route path="/criarTreino" element={<CriarTreino usuario={usuario} setUsuario={setUsuario} token={token} setToken={setToken}/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
