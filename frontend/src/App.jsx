import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./routes/Home"
import Registro from "./routes/Registro"
import Login from "./routes/Login"


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/registro" element={<Registro />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
