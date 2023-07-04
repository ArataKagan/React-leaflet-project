import './styles.css';
import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';

export default function App() {
  return <MapContainer center={[35.689487, 139.691711]} zoom={12}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
  </MapContainer>
}


