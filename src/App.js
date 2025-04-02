import Home from './pages/Home';
import Header from './components/header';
import Contact from './pages/Contact';
import Connexion from './pages/connexion';
import Inscription from './pages/Inscription';
import Profil from './pages/profil';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
