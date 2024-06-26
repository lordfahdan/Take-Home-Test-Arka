import './App.css';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Ketupat from './pages/Ketupat';
import Pendidikan from './pages/Pendidikan';
import Avatar from './pages/Avatar';
import { useEffect, useState } from 'react';

const App = ()  => {
  const [state, setState] = useState('');
  const location = useLocation();

  useEffect(() => {
    setState(location.pathname)
  }, [location])

  return (
    <div className="app__container">
      {state != '/' && (
        <div className="back">
          <NavLink to="/" className="back__link">
            {'< Back to Dashboard'}
          </NavLink>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ketupat" element={<Ketupat />} />
        <Route path="/pendidikan" element={<Pendidikan />} />
        <Route path="/avatar" element={<Avatar />} />
      </Routes>
    </div>
  );
}

export default App;
