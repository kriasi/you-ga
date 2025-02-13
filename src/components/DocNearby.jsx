// import React, { useEffect, useRef } from 'react';

// const DocNearby = () => {
//   const mapRef = useRef(null);
//   const center = { lat: 33.8704, lng: -117.9243 }; // Fullerton, CA coordinates

//   useEffect(() => {
//     const loadMap = () => {
//       const google = window.google;
//       const map = new google.maps.Map(mapRef.current, {
//         center: center,
//         zoom: 14
//       });

//       const service = new google.maps.places.PlacesService(map);
//       const request = {
//         location: center,
//         radius: 5000, // 5km radius
//         type: ['doctor']
//       };

//       service.nearbySearch(request, (results, status) => {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//           results.forEach(place => {
//             const marker = new google.maps.Marker({
//               map: map,
//               position: place.geometry.location,
//               title: place.name
//             });

//             const infoWindow = new google.maps.InfoWindow({
//               content: `<strong>${place.name}</strong><br>${place.vicinity}`
//             });

//             marker.addListener('click', () => {
//               infoWindow.open(map, marker);
//             });
//           });
//         }
//       });
//     };

//     if (!window.google) {
//       const script = document.createElement('script');
//       script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBYEhoSyJR9ZICRALSRkAp-bjok_hKNjSk&libraries=places`;
//       script.async = true;
//       script.defer = true;
//       script.addEventListener('load', loadMap);
//       document.head.appendChild(script);
//     } else {
//       loadMap();
//     }
//   }, []);

//   return (
//     <div className="max-w-8xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Nearby Doctors in Fullerton</h2>
//       <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
//     </div>
//   );
// };

// export default DocNearby;

// import React, { useEffect, useRef } from 'react';

// const DocNearby = () => {
//   const mapRef = useRef(null);
//   const center = { lat: 33.8704, lng: -117.9243 }; // Fullerton, CA coordinates

//   useEffect(() => {
//     const loadMap = () => {
//       const google = window.google;
//       const map = new google.maps.Map(mapRef.current, {
//         center: center,
//         zoom: 14
//       });

//       const service = new google.maps.places.PlacesService(map);
//       const request = {
//         location: center,
//         radius: 5000, // 5km radius
//         type: ['doctor']
//       };

//       service.nearbySearch(request, (results, status) => {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//           results.forEach(place => {
//             const marker = new google.maps.Marker({
//               map: map,
//               position: place.geometry.location,
//               title: place.name
//             });
//           });
//         }
//       });
//     };

//     if (!window.google) {
//       const script = document.createElement('script');
//       script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBYEhoSyJR9ZICRALSRkAp-bjok_hKNjSk&libraries=places`;
//       script.async = true;
//       script.defer = true;
//       script.addEventListener('load', loadMap);
//       document.head.appendChild(script);
//     } else {
//       loadMap();
//     }
//   }, []);

//   return (
//     <div className="max-w-8xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Nearby Doctors in Fullerton</h2>
//       <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
//     </div>
//   );
// };

// export default DocNearby;

// import React, { useEffect, useRef, useState } from 'react';
// import axios from 'axios';

// const DocNearby = () => {
//   const mapRef = useRef(null);
//   const [map, setMap] = useState(null);
//   const [doctors, setDoctors] = useState([]);
//   const center = { lat: 33.8704, lng: -117.9243 }; // Fullerton, CA coordinates

//   useEffect(() => {
//     const loadGoogleMapsScript = () => {
//       const script = document.createElement('script');
//       script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBYEhoSyJR9ZICRALSRkAp-bjok_hKNjSk&libraries=places`;
//       script.async = true;
//       script.defer = true;
//       script.addEventListener('load', initMap);
//       document.head.appendChild(script);
//     };

//     const initMap = () => {
//       const newMap = new window.google.maps.Map(mapRef.current, {
//         center: center,
//         zoom: 14,
//       });
//       setMap(newMap);
//     };

//     if (!window.google) {
//       loadGoogleMapsScript();
//     } else {
//       initMap();
//     }
//   }, []);

//   useEffect(() => {
//     if (map) {
//       fetchNearbyDoctors();
//     }
//   }, [map]);

//   const fetchNearbyDoctors = async () => {
//     try {
//       const response = await axios.get(
//         `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${center.lat},${center.lng}&radius=5000&type=doctor&key=AIzaSyBYEhoSyJR9ZICRALSRkAp-bjok_hKNjSk`
//       );
//       setDoctors(response.data.results);
//       displayDoctors(response.data.results);
//     } catch (error) {
//       console.error('Error fetching nearby doctors:', error);
//     }
//   };

//   const displayDoctors = (doctors) => {
//     doctors.forEach((doctor) => {
//       const marker = new window.google.maps.Marker({
//         position: doctor.geometry.location,
//         map: map,
//         title: doctor.name,
//       });

//       const infoWindow = new window.google.maps.InfoWindow({
//         content: `<h3>${doctor.name}</h3><p>${doctor.vicinity}</p>`,
//       });

//       marker.addListener('click', () => {
//         infoWindow.open(map, marker);
//       });
//     });
//   };

//   return (
//     <div className="max-w-8xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Nearby Doctors in Fullerton</h2>
//       <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
//       <div className="mt-4">
//         <h3 className="text-xl font-semibold mb-2">Doctors List:</h3>
//         <ul>
//           {doctors.map((doctor, index) => (
//             <li key={index} className="mb-2">
//               <strong>{doctor.name}</strong> - {doctor.vicinity}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DocNearby;


import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const DocNearby = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const center = { lat: 33.8704, lng: -117.9243 }; // Fullerton, CA coordinates

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBYEhoSyJR9ZICRALSRkAp-bjok_hKNjSk&libraries=places`;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', initMap);
      document.head.appendChild(script);
    };

    const initMap = () => {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: 14,
      });
      setMap(newMap);
    };

    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      initMap();
    }
  }, []);

  useEffect(() => {
    if (map) {
      fetchNearbyDoctors();
    }
  }, [map]);

  const fetchNearbyDoctors = async () => {
    try {
      const service = new window.google.maps.places.PlacesService(map);
      const request = {
        location: new window.google.maps.LatLng(center.lat, center.lng),
        radius: '5000',
        type: ['doctor'],
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setDoctors(results);
          displayDoctors(results);
        } else {
          console.error('Error fetching nearby doctors:', status);
        }
      });
    } catch (error) {
      console.error('Error fetching nearby doctors:', error);
    }
  };

  const displayDoctors = (doctors) => {
    doctors.forEach((doctor) => {
      const marker = new window.google.maps.Marker({
        position: doctor.geometry.location,
        map: map,
        title: doctor.name,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `<h3>${doctor.name}</h3><p>${doctor.vicinity}</p>`,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  };

  return (
    <div className="max-w-8xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Nearby Doctors in Fullerton</h2>
      <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Doctors List:</h3>
        <ul>
          {doctors.map((doctor, index) => (
            <li key={index} className="mb-2">
              <strong>{doctor.name}</strong> - {doctor.vicinity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocNearby;
