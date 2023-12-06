import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/header/Header'
import Login from './Components/login-cadastro/Login'
import Home from './Components/Home'
import Masculina from './Components/nav/produtos/Masculina';
import Feminina from './Components/nav/produtos/Feminina';
import Esportivo from './Components/nav/produtos/Esportivo';
import Jeans from './Components/nav/produtos/Jeans';
import Novidades from './Components/nav/produtos/Novidades';
import Infantil from './Components/nav/produtos/Infantil';
import Acessorios from './Components/nav/produtos/Acessorios';
import Footer from './Components/footer/Footer';

function App() {
  return (
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />}/>
        <Route path="/masculina" element={<Masculina />} />
        <Route path="/feminina" element={<Feminina />} />
        <Route path="/esportivo" element={<Esportivo />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/novidades" element={<Novidades />} />
        <Route path="/infantil" element={<Infantil />} />
        <Route path="/acessorios" element={<Acessorios />} />
      </Routes>
      <Footer />
     </BrowserRouter>
  );
}

export default App;
