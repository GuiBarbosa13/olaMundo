import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./paginas/Post";
import NaoEncontrada from "./paginas/NaoEncontrada";
import ScrollToTop from "./componentes/ScrollToTop";
import BotaoRolar from "./componentes/BotaoRolar";



function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>

      <Menu /> {/*Se colocar aqui fora do Routes o componente aparece em todas as rotas*/}
      <BotaoRolar/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          
        </Route>
        <Route path ="posts/:id" element={<Post/>}/>
        <Route path="/*" element={<NaoEncontrada/>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
