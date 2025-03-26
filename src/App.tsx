import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { WaveShader } from './pages/WaveShader';
import { CircleShader } from './pages/CircleShader';
import { NoiseShader } from './pages/NoiseShader';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <h1>GLSL Shader Showcase</h1>
            <div className="card-grid">
              <Link to="/wave" className="card">
                <h2>Wave Shader</h2>
                <p>A simple wave animation effect</p>
              </Link>
              <Link to="/circle" className="card">
                <h2>Circle Shader</h2>
                <p>An animated circle pattern</p>
              </Link>
              <Link to="/noise" className="card">
                <h2>Noise Shader</h2>
                <p>A dynamic noise pattern</p>
              </Link>
            </div>
          </div>
        } />
        <Route path="/wave" element={<WaveShader />} />
        <Route path="/circle" element={<CircleShader />} />
        <Route path="/noise" element={<NoiseShader />} />
      </Routes>
    </Router>
  );
}

export default App;
