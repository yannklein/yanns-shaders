import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { WaveShader } from './pages/WaveShader';
import { CircleShader } from './pages/CircleShader';
import { NoiseShader } from './pages/NoiseShader';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-8 text-center">
          <Routes>
            <Route path="/" element={
              <div className="w-full min-h-screen flex flex-col items-center p-8">
                <h1 className="text-5xl leading-tight mb-8 text-gray-800 py-20">Yann's Shader Showcase</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                  <Link to="/wave" className="bg-white rounded-xl p-8 no-underline text-inherit transition-all duration-200 shadow-xl hover:-translate-y-1 hover:shadow-lg">
                    <h2 className="m-0 mb-4 text-gray-800">Wave Shader</h2>
                    <p className="m-0 text-gray-600">A simple wave animation effect</p>
                  </Link>
                  <Link to="/circle" className="bg-white rounded-xl p-8 no-underline text-inherit transition-all duration-200 shadow-xl hover:-translate-y-1 hover:shadow-lg">
                    <h2 className="m-0 mb-4 text-gray-800">Circle Shader</h2>
                    <p className="m-0 text-gray-600">An animated circle pattern</p>
                  </Link>
                  <Link to="/noise" className="bg-white rounded-xl p-8 no-underline text-inherit transition-all duration-200 shadow-xl hover:-translate-y-1 hover:shadow-lg">
                    <h2 className="m-0 mb-4 text-gray-800">Noise Shader</h2>
                    <p className="m-0 text-gray-600">A dynamic noise pattern</p>
                  </Link>
                </div>
              </div>
            } />
            <Route path="/wave" element={<WaveShader />} />
            <Route path="/circle" element={<CircleShader />} />
            <Route path="/noise" element={<NoiseShader />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
