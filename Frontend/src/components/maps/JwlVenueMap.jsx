import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

/**
 * Interactive Leaflet Map for JWL Host Venue (CAG Sports Complex, Hinoo, Ranchi).
 */
const JwlVenueMap = () => {
  const [mounted, setMounted] = useState(false);
  const position = [23.3284, 85.3235]; // CAG Sports Complex, Hinoo, Ranchi

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[360px] md:min-h-[460px] bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center">
        <span className="text-gray-400 text-sm animate-pulse">Loading venue map...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[360px] md:min-h-[460px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      <MapContainer 
        center={position} 
        zoom={14} 
        scrollWheelZoom={false}
        className="w-full h-[360px] md:h-[460px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="p-1 text-[#111111] max-w-[220px]">
              <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-black bg-brand-yellow rounded mb-1">
                JWL 2026 Host Venue
              </span>
              <h4 className="font-heading font-extrabold text-sm mb-1">CAG Sports Complex</h4>
              <p className="text-xs text-gray-600 mb-1 leading-normal">Hinoo, Ranchi, Jharkhand</p>
              <p className="text-[11px] text-gray-500 mb-2 leading-relaxed">
                Free Spectator Entry · 02 to 20 Nov 2026
              </p>
              <a 
                href={`https://www.openstreetmap.org/?mlat=${position[0]}&mlon=${position[1]}#map=16/${position[0]}/${position[1]}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-[11px] font-bold text-yellow-600 hover:text-yellow-700 underline focus:outline-none"
              >
                Get Directions
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default JwlVenueMap;
