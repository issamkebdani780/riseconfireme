import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Demande from './pages/Demande';
import BlogPage from './pages/BlogPage';
import EspaceClient from './pages/EspaceClient';
import Legals from './components/policy/legals';
import Confidenialities from './components/policy/confidenialities';
import CGV from './components/policy/cgv';
import ScrollToTop from './components/ui/ScrollToTop';
import ChatBot from './components/sections/ChatBot';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Dashboard from './app/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { ToastProvider } from './components/ui/toast';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <ToastProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demande" element={<Demande />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/espace-client" element={<EspaceClient />} />
          <Route path="/mentions-legales" element={<Legals />} />
          <Route path="/politique-de-confidentialite" element={<Confidenialities />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Home />} />
        </Routes>
        <ChatBot />
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App
