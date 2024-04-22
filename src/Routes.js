import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";



function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu /> {/*Se colocar aqui fora do Routes o componente aparece em todas as rotas*/}
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>
        <Route path="/*" element={<div>Página não encontrada :/ ...</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
