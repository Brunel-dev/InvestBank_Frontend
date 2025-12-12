import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingView from './components/LandingView';
import LoginView from './components/LoginView';      // ✅ nouveau
import RegisterView from './components/RegisterView'; // ✅ nouveau
import MyAccount from './components/BalanceCard';
import { User } from './types'; // ✅ on ne déstructure plus AppView (inutilisé)

const App: React.FC = () => {
  const [user, setUser] = React.useState<User | null>(null);

  return (
    <Router>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<LandingView />} />

        {/* 🔑 Login */}
        <Route 
          path="/login" 
          element={<LoginView setUser={setUser} />} 
        />

        {/* ✍️ Inscription */}
        <Route 
          path="/register" 
          element={<RegisterView setUser={setUser} />} 
        />

        {/* 💼 Mon compte */}
        <Route 
          path="/myAccount" 
          element={<MyAccount setUser={setUser} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;