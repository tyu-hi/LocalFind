import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

let map: google.maps.Map;
const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

const NearbySearch = () => {
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    script.onload = () => setApiLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {apiLoaded && (
        <LoadScript googleMapsApiKey="YOUR_API_KEY" libraries={['places']}>
          <GoogleMap
            center={center}
            zoom={17}
            mapContainerStyle={{ width: '100%', height: '400px' }}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default NearbySearch;