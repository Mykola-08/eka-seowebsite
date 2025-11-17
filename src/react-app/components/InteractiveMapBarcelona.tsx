import { useEffect, useRef } from 'react';
import { MapPin, Navigation, Car, Train, Clock, Phone } from 'lucide-react';

declare global {
  interface Window {
    google: any;
  }
}

export default function InteractiveMapBarcelona() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      // EKA Balance location coordinates (Carrer Pelai, 12, Barcelona)
      const ekaBalanceLocation = {
        lat: 41.3851,
        lng: 2.1734
      };

      // Initialize map
      const map = new window.google.maps.Map(mapRef.current, {
        center: ekaBalanceLocation,
        zoom: 16,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ weight: "2.00" }]
          },
          {
            featureType: "all",
            elementType: "geometry.stroke",
            stylers: [{ color: "#9c9c9c" }]
          },
          {
            featureType: "all",
            elementType: "labels.text",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }]
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#eeeeee" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#7b7b7b" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }]
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#46bcec" }, { visibility: "on" }]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#c8d7d4" }]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#070707" }]
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          }
        ]
      });

      // Add custom marker for EKA Balance
      const marker = new window.google.maps.Marker({
        position: ekaBalanceLocation,
        map: map,
        title: 'EKA Balance - Centre de Benestar',
        icon: {
          url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#EAB308" stroke="#ffffff" stroke-width="3"/>
              <circle cx="20" cy="20" r="8" fill="#ffffff"/>
              <text x="20" y="25" text-anchor="middle" fill="#EAB308" font-family="Arial" font-size="12" font-weight="bold">EKA</text>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 20)
        }
      });

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; max-width: 300px;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 18px; font-weight: 600;">EKA Balance</h3>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">Centre de Benestar</p>
            <p style="margin: 0 0 8px 0; color: #374151; font-size: 14px;">📍 Carrer Pelai, 12, Barcelona</p>
            <p style="margin: 0 0 12px 0; color: #374151; font-size: 14px;">🚇 A 2 min de Plaça Universitat</p>
            <a href="https://maps.google.com/?q=Carrer+Pelai+12+Barcelona" target="_blank" 
               style="display: inline-block; background: #EAB308; color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;">
              Com arribar
            </a>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      mapInstanceRef.current = map;
    };

    loadGoogleMaps();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
            Com arribar a EKA Balance
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Al cor de Barcelona, a només 2 minuts de Plaça Universitat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="space-y-6">
            <div 
              ref={mapRef}
              className="w-full h-80 lg:h-96 rounded-2xl shadow-lg border border-gray-200"
              style={{ minHeight: '320px' }}
            >
              {/* Fallback content while map loads */}
              <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Carregant mapa...</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="https://maps.google.com/?q=Carrer+Pelai+12+Barcelona"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Obrir a Google Maps
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-yellow-50 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Adreça exacta
                  </h3>
                  <p className="text-gray-700 font-medium">
                    Carrer Pelai, 12<br />
                    08001 Barcelona
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Entre Plaça Universitat i Portal de l'Àngel
                  </p>
                </div>
              </div>
            </div>

            {/* Metro/Transport */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Train className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Transport públic
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-medium">Metro:</span> Universitat (L1, L2)
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Bus:</span> 14, 38, 41, 55, 91, 141
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Renfe:</span> Plaça Catalunya (5 min caminant)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Aparcament
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <span className="font-medium">Bamsa Pelai:</span> Carrer Pelai, 5
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Parkia Universitat:</span> Ronda Universitat, 21
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">SABA:</span> Plaça Universitat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-green-50 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Horaris
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">
                      <span className="font-medium">Dilluns - Divendres:</span> 9:00 - 20:00
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Dissabte:</span> 9:00 - 14:00
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Diumenge:</span> Tancat
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    📞 658 867 133 per cites fora d'horari
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="tel:658867133"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Trucar ara: 658 867 133
            </a>
            
            <a
              href="https://maps.google.com/?q=Carrer+Pelai+12+Barcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Veure ruta completa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
