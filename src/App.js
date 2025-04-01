import Home from './components/Home';
// import Header from './components/header';
import Contact from './components/Contact';
import Connexion from './components/connexion';
import Inscription from './components/Inscription';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/header" element={<Header />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
