import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Unauthorized from './Unauthorized/Unauthorized';
import Layout from './Layout/Layout';
import About from './About/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route
          estrict path="/"
          element={<Navigate to="/home" replace />}
        />
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='*' element={<Unauthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
