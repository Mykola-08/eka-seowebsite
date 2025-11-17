import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Car, Train, Bus, Navigation } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  fullAddress: string;
  coordinates: { lat: number; lng: number };
  hours: {
    [key: string]: string;
  };
  phone: string;
  email: string;
  parking: string[];
  transport: {
    metro?: string[];
    bus?: string[];
    train?: string[];
  };
  description: string;
  image: string;
}

const locations: Location[] = [
  {
    id: 'barcelona',
    name: 'EKA Balance Barcelona',
    address: 'Plaça Universitat, 5',
    fullAddress: 'Plaça Universitat, 5, 2º 3ª, 08007 Barcelona',
    coordinates: { lat: 41.3851, lng: 2.1734 },
    hours: {
      'Dilluns': '9:00 - 20:00',
      'Dimarts': '9:00 - 20:00',
      'Dimecres': '9:00 - 20:00',
      'Dijous': '9:00 - 20:00',
      'Divendres': '9:00 - 20:00',
      'Dissabte': '9:00 - 14:00',
      'Diumenge': 'Tancat'
    },
    phone: '658 867 133',
    email: 'contact@ekabalance.com',
    parking: [
      'Pàrking SABA Plaça Universitat',
      'Pàrking NN Universitat',
      'Zona verda (pagament)'
    ],
    transport: {
      metro: ['L1, L2 Universitat', 'L3, L4 Passeig de Gràcia (5 min)'],
      bus: ['Múltiples línies urbanes', 'Estació Nord (autobús interurbà)']
    },
    description: 'El nostre centre al cor de Barcelona, amb excel·lent accés en transport públic.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&auto=format'
  }
];

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);
  const [activeTab, setActiveTab] = useState<'info' | 'transport' | 'hours'>('info');

  const openInMaps = (location: Location) => {
    const query = encodeURIComponent(location.fullAddress);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(googleMapsUrl, '_blank');
  };

  const getDirections = (location: Location) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const origin = `${position.coords.latitude},${position.coords.longitude}`;
        const destination = encodeURIComponent(location.fullAddress);
        const directionsUrl = `https://www.google.com/maps/dir/${origin}/${destination}`;
        window.open(directionsUrl, '_blank');
      });
    } else {
      openInMaps(location);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
            La nostra ubicació
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Centre estratègicament ubicat al cor de Barcelona
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Selector & Info */}
          <div className="space-y-6">
            {/* Location Cards */}
            <div className="space-y-4">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 ${
                    selectedLocation.id === location.id
                      ? 'border-yellow-400 bg-yellow-50'
                      : 'border-gray-200 hover:border-yellow-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {location.name}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {location.address}
                      </p>
                      <p className="text-sm text-gray-500">
                        {location.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Detailed Info */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center space-x-1 mb-6">
                {(['info', 'transport', 'hours'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab
                        ? 'bg-yellow-400 text-gray-900'
                        : 'text-gray-600 hover:bg-yellow-100'
                    }`}
                  >
                    {tab === 'info' && 'Informació'}
                    {tab === 'transport' && 'Transport'}
                    {tab === 'hours' && 'Horaris'}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'info' && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900">Telèfon</p>
                      <a href={`tel:${selectedLocation.phone.replace(/\s/g, '')}`} className="text-yellow-600 hover:text-yellow-700">
                        {selectedLocation.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href={`mailto:${selectedLocation.email}`} className="text-yellow-600 hover:text-yellow-700">
                        {selectedLocation.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Aparcament</p>
                      <ul className="space-y-1">
                        {selectedLocation.parking.map((parking, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {parking}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'transport' && (
                <div className="space-y-4">
                  {selectedLocation.transport.metro && (
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
                        <span className="text-red-600 text-xs font-bold">M</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Metro</p>
                        {selectedLocation.transport.metro.map((line, index) => (
                          <p key={index} className="text-sm text-gray-600">{line}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedLocation.transport.train && (
                    <div className="flex items-start space-x-3">
                      <Train className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Tren</p>
                        {selectedLocation.transport.train.map((line, index) => (
                          <p key={index} className="text-sm text-gray-600">{line}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedLocation.transport.bus && (
                    <div className="flex items-start space-x-3">
                      <Bus className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Autobús</p>
                        {selectedLocation.transport.bus.map((line, index) => (
                          <p key={index} className="text-sm text-gray-600">{line}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'hours' && (
                <div className="space-y-3">
                  {Object.entries(selectedLocation.hours).map(([day, hours]) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{day}</span>
                      <span className={`text-sm ${
                        hours === 'Tancat' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {hours}
                      </span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        Les cites es poden programar fora d'horari sota petició
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => openInMaps(selectedLocation)}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Obrir en Maps
                </button>
                <button
                  onClick={() => getDirections(selectedLocation)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Com arribar
                </button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative">
              <img
                src={selectedLocation.image}
                alt={`Vista exterior de ${selectedLocation.name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Location Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-medium mb-2">
                  {selectedLocation.name}
                </h3>
                <p className="text-gray-200 mb-4">
                  {selectedLocation.fullAddress}
                </p>
                <div className="flex space-x-4 text-sm">
                  <a
                    href={`tel:${selectedLocation.phone.replace(/\s/g, '')}`}
                    className="flex items-center space-x-1 hover:text-yellow-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Trucar</span>
                  </a>
                  <a
                    href={`mailto:${selectedLocation.email}`}
                    className="flex items-center space-x-1 hover:text-yellow-400 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              {/* Interactive Map Button */}
              <button
                onClick={() => openInMaps(selectedLocation)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-xl shadow-lg transition-colors duration-200"
                title="Obrir mapa interactiu"
              >
                <MapPin className="w-5 h-5" />
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-2">Fàcil accés</h4>
                <p className="text-sm text-gray-600">
                  Al centre de Barcelona amb accés a múltiples línies de transport públic
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-2">Aparcament</h4>
                <p className="text-sm text-gray-600">
                  Múltiples pàrkings públics a menys de 200m
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
