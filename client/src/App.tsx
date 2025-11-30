import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import VisionPage from './pages/VisionPage';
import LightpaperPage from './pages/LightpaperPage';
import Analytics from './Services/Analytics';
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

function App() {
  const { address, isConnected } = useAccount();

  // Session tracking
  useEffect(() => {
    if (isConnected && address) {
      // Track wallet connection
      Analytics.trackWalletConnect(address);
      
      // Start session
      Analytics.startSession(address);

      // End session on page unload
      const handleBeforeUnload = () => {
        Analytics.endSession(address);
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        // Cleanup
        Analytics.endSession(address);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [isConnected, address]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/lightpaper" element={<LightpaperPage />} />
        <Route 
          path="/chat" 
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;