import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, Impressum, AGB } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
