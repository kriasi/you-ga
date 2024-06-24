// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const center = {
//   lat: 33.8704, // Latitude for Fullerton, CA
//   lng: -117.9243 // Longitude for Fullerton, CA
// };

// const DocNearby = () => {
//   return (
//     <div className="max-w-8xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Nearby Doctors in Fullerton</h2>
//       <LoadScript googleMapsApiKey="AIzaSyBYEhoSyJR9ZICRALSRkAp-bjok_hKNjSk">
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={12}
//         >
//           <Marker position={center} />
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default DocNearby;

import React from 'react';

const containerStyle = {
  width: '100%',
  height: '100%' // Set to '100%' to fill the parent container
};

const center = {
  lat: 33.8704, // Latitude for Fullerton, CA
  lng: -117.9243 // Longitude for Fullerton, CA
};

const DocNearby = () => {
  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBYEhoSyJR9ZICRALSRkAp-bjok_hKNjSk&center=${center.lat},${center.lng}&zoom=12`;

  return (
    <div className="max-w-8xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Nearby Doctors in Fullerton</h2>
      <div style={{ width: '100%', height: '400px' }}>
        <iframe
          src={mapUrl}
          style={containerStyle}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default DocNearby;

