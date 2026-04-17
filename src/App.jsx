import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Demande from './pages/Demande';
import BlogPage from './pages/BlogPage';
import EspaceClient from './pages/EspaceClient';
import Legals from './components/policy/legals';
import Confidenialities from './components/policy/confidenialities';
import CGV from './components/policy/cgv';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demande" element={<Demande />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/espace-client" element={<EspaceClient />} />
        <Route path="/mentions-legales" element={<Legals />} />
        <Route path="/politique-de-confidentialite" element={<Confidenialities />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
