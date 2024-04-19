import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";



function App() {
  return (
    <BrowserRouter>
      <Menu/> {/*Se colocar aqui fora do Routes o componente aparece em todas as rotas*/}
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobremim" element={<SobreMim/>}/>
        <Route path="/*" element ={<div>Página não encontrada :/ ...</div>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
