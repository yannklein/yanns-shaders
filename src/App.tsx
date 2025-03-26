import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { WaveShader } from './pages/WaveShader';
import { CircleShader } from './pages/CircleShader';
import { NoiseShader } from './pages/NoiseShader';
import { ShaderCard } from './components/ShaderCard';

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
                  <ShaderCard
                    to="/wave"
                    title="Wave Shader"
                    description="A simple wave animation effect"
                    preview={<WaveShader className="w-full h-[300px] mb-4" />}
                  />
                  <ShaderCard
                    to="/circle"
                    title="Circle Shader"
                    description="An animated circle pattern"
                    preview={<CircleShader className="w-full h-[300px] mb-4" />}
                  />
                  <ShaderCard
                    to="/noise"
                    title="Noise Shader"
                    description="A dynamic noise pattern"
                    preview={<NoiseShader className="w-full h-[300px] mb-4" />}
                  />
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
