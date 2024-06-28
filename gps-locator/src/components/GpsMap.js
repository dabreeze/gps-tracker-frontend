import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Create custom icon
const customIcon = new L.Icon({
  iconUrl: '../images/bus.png', // Path to your pin image
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [26, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
});

const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 16); // Set the view to the new position with a zoom level of 16
  }, [center, map]);
  return null;
};

const GpsMap = ({ position }) => {
  return (
    <div>
      <h1>Yaba Bus Tracker</h1>
      <MapContainer center={position} zoom={16} style={{ height: "80vh", width: "100%" }}>
        <ChangeView center={position} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            Current location: {position[0]}, {position[1]}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GpsMap;
