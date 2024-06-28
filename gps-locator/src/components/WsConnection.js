import React, { useEffect } from 'react';

const WsConnection = ({ setPosition }) => {
  useEffect(() => {
    // Initialize WebSocket connection
    const ws = new WebSocket('ws://localhost:8080/gps');
    
    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      console.log('Received message:', event.data);
      try {
        const data = JSON.parse(event.data);
        if (data.location && Array.isArray(data.location)) {
          setPosition([data.location[0], data.location[1]]);
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Failed to parse message:', error);
      }
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    // Clean up the WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, [setPosition]);

  return null;
};

export default WsConnection;
