import './styles.css';
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [35.65857, 139.745484]; 

export default function App() {
  return <MapContainer center={[35.689487, 139.691711]} zoom={12}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    /> 
    <Marker position={position}>
      <Popup>
        Tokyo Tower 
      </Popup>
    </Marker>
  </MapContainer>
}


