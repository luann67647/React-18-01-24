import {Routes, Route} from "react-router-dom";
import {Header} from "./Components/Header";
import Home from "./Components/Home";
import Missao from "./Components/Missao";
import Historia from "./Components/Historia";
import { Contact } from "./Components/Contact";
import Footer  from './Components/Footer';
import Produto from './Components/Produto';

import './index.css';
function App() 

{ 
 return (
<div>
  <Header />
  <Routes >
   <Route path="/" element={<Home nomePagina='Pagina Inicial'
   paginaPrincipal= 'Detalhamento de toda Pagina Home'/>} />
   <Route path="/Missao" element={<Missao nomePagina= 'Pagina inicial'
   paginaPrincipal='Detalhamento de toda Pagina Missao'   />} />
   <Route path="/Historia" element={<Historia nomePagina='Pagina Inicial' 
   paginaPrincipal='Detalhamento de toda Pagina Historia'  />} />
   <Route path="/Contact" element={<Contact nomePagina='Pagina Inicial'
   paginaPrincipal='Detalhamento de toda Pagina  Contact'   />} />
   <Route path="/Produto" element={<Produto nomePagina='Pagina inicial'
   paginaPrincipal='Detalhamento de toda Pagina  Produto'/>} />
  </Routes>
  <Footer nomePagina='Pagina inicial'
  paginaPrincipal='Detalhamento de toda Pagina Footer' />
</div>

  ) 
 }

export default App
