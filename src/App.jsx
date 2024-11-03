import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import NavBar from "./components/NavBar";
import FinalSupportPage from './components/FinalSupportPage';
import Footer from './components/Footer';

// Lazy load the components
const FinalPage = lazy(() => import('./components/FinalPage'));
const FinalChatbotPage = lazy(() => import('./components/FinalChatbotPage'));
const FinalVoiceAgentPage = lazy(() => import('./components/FinalVoiceAgentPage'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Set loading state when the route changes
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 150); // Simulated delay, adjust as needed

    // Cleanup the timeout
    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen"></div>;
  }

  return (
    <>
      <div className="flex justify-center">
        <NavBar />
      </div>
      <Suspense fallback={<div className="flex justify-center items-center h-screen"></div>}>
        <Routes>
          <Route path="/" element={<FinalPage />} />
          <Route path="/aitextchatbot" element={<FinalChatbotPage />} />
          <Route path="/aivoiceagent" element={<FinalVoiceAgentPage />} />
          <Route path="/supportpage" element={<FinalSupportPage />} />

        </Routes>
      </Suspense>
      <Footer/>
    </>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
