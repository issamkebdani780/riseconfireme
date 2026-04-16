import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Demande from './pages/Demande';
import BlogPage from './pages/BlogPage';
import EspaceClient from './pages/EspaceClient';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demande" element={<Demande />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/espace-client" element={<EspaceClient />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
