import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Import Leaflet CSS only once
import 'leaflet/dist/leaflet.css';

// Import default marker images to resolve Vite asset resolution issues
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet's default marker icon paths in build outputs
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

/**
 * Rebuilt Interactive Map following React-Leaflet v4 compatibility patterns.
 * Ensures rendering only after client mount to prevent hydration mismatch.
 */
const InteractiveMap = () => {
  const [mounted, setMounted] = useState(false);
  const position = [23.3441, 85.3096]; // Ranchi, Jharkhand coordinates

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[350px] md:min-h-[450px] bg-gray-50 border border-gray-100 rounded-[20px] flex items-center justify-center">
        <span className="text-gray-400 text-sm animate-pulse">Loading map...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[450px] rounded-[20px] overflow-hidden shadow-sm border border-gray-100">
      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={true}
        className="w-full h-[350px] md:h-[480px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="p-1 text-[#111111] max-w-[200px]">
              <h4 className="font-heading font-extrabold text-sm mb-1">Salience Foundation</h4>
              <p className="text-xs text-gray-600 mb-1 leading-normal">Ranchi, Jharkhand, India</p>
              <p className="text-[11px] italic text-gray-500 mb-2 leading-relaxed">
                "Empowering rural youth through sport & education."
              </p>
              <a 
                href={`https://www.openstreetmap.org/?mlat=${position[0]}&mlon=${position[1]}#map=15/${position[0]}/${position[1]}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-[11px] font-bold text-yellow-600 hover:text-yellow-700 underline focus:outline-none"
              >
                Open in OpenStreetMap
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
