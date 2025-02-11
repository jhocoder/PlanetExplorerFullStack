'use client';

import { useEffect, useState } from 'react';

interface Planet {
  nombre: string;
  temperatura: number;
  composicion: string;
  gravedad: number;
  habitabilidad: boolean;
  imagen_id: string;
}

export default function Planets() {
  const [planetsData, setPlanetsData] = useState<Planet[]>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('planetsData');
    if (storedData) {
      setPlanetsData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="min-h-screen bg-black flex justify-center py-10 px-5">
      <div className="w-full text-center text-white flex flex-col items-center min-h-screen">
        <h1 className="text-4xl font-extrabold mb-12 text-white tracking-widest">
          🌎 PLANETAS EXPLORADOS 🚀
        </h1>

        <ul className="w-[90%] max-w-[1600px] flex flex-wrap gap-10 justify-center">
          {planetsData.map((planet, index) => (
            <div 
              key={index} 
              className="border border-gray-700 flex flex-col items-center w-[70vh] bg-gray-800 p-6 rounded-xl shadow-md transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-white">{planet.nombre}</h2>
              <img
                src={planet.imagen_id ?? "default_image_url"}
                alt={planet.nombre ?? "Planeta desconocido"}
                className="max-w-xs h-[30vh] object-cover mt-4 rounded-lg"
              />
              <button
                className="bg-gray-600 p-3 mt-4 text-white hover:bg-gray-500 hover:text-white rounded-md transition-all"
                onClick={() => setSelectedPlanet(planet)}
              >
                Ver Características
              </button>
            </div>
          ))}
        </ul>
      </div>


      {selectedPlanet && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-gray-900 text-white p-6 rounded-lg w-[90%] max-w-md shadow-xl border border-gray-700 relative">
            <h2 className="text-2xl font-semibold text-indigo-500">{selectedPlanet.nombre}</h2>
            <p className="mt-2"><strong>🌡️ Temperatura:</strong> {selectedPlanet.temperatura}°C</p>
            <p className="mt-2"><strong>🔬 Composición:</strong> {selectedPlanet.composicion}</p>
            <p className="mt-2"><strong>🪐 Gravedad:</strong> {selectedPlanet.gravedad} m/s²</p>
            <p className="mt-2"><strong>🌍 Habitabilidad:</strong> {selectedPlanet.habitabilidad ? 'Sí' : 'No'}</p>

            <button
              className="absolute top-2 right-2 text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition-all"
              onClick={() => setSelectedPlanet(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
