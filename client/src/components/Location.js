import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Box, Typography } from '@mui/material';

// Fix for the marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Location = () => {
  // Cheshire Home Mumbai coordinates
  const position = [19.1173, 72.8750]; // Andheri East coordinates

  return (
    <Box sx={{ height: '500px', width: '100%' }}>
      <MapContainer 
        center={position} 
        zoom={16} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          attribution='&copy; Google Maps'
        />
        <Marker position={position}>
          <Popup>
            <Typography variant="body1" fontWeight={500}>Cheshire Homes India</Typography>
            <Typography variant="body2">
              Bethlehem House, Mahakali Caves Rd,<br />
              Andheri East, Mumbai, Maharashtra 400093
            </Typography>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default Location;