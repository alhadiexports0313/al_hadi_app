'use client';

import React, { useState, useCallback, memo } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { MapPin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const COMPANY_LOCATION = { lat: 24.891086, lng: 66.990536 };

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '8px',
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
  gestureHandling: 'cooperative' as const,
  clickableIcons: false,
};

interface GoogleMapComponentProps {
  className?: string;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = memo(({ className = '' }) => {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const isValidApiKey =
    apiKey && apiKey.length > 10 && !apiKey.includes('your-google-maps-api-key-here');

  const handleMarkerClick = useCallback(() => setIsInfoWindowOpen(true), []);
  const handleInfoWindowClose = useCallback(() => setIsInfoWindowOpen(false), []);
  const handleMapLoad = useCallback(() => setIsMapLoaded(true), []);

  const handleError = () => {
    // Google Maps load error - handle silently in production
    setHasError(true);
  };

  const openInGoogleMaps = useCallback(() => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${COMPANY_LOCATION.lat},${COMPANY_LOCATION.lng}`,
      '_blank'
    );
  }, []);

  if (!isValidApiKey || hasError) {
    return (
      <div className={`relative w-full h-64 rounded-lg overflow-hidden ${className}`}>
        <Image
          src="/images/map-fallback.svg"
          alt="AL HADI EXPORTS Map Fallback"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
          <MapPin className="h-10 w-10 mb-2" />
          <p className="font-semibold">AL HADI EXPORTS</p>
          <p className="text-xs mb-3">Karachi, S.I.T.E Industrial Area, Pakistan</p>
          <button
            onClick={openInGoogleMaps}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg"
          >
            View on Google Maps
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-64 rounded-lg overflow-hidden ${className}`}>
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Loading interactive map...</p>
          </div>
        </div>
      )}

      <LoadScript googleMapsApiKey={apiKey!} onError={handleError}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={COMPANY_LOCATION}
          zoom={15}
          onLoad={handleMapLoad}
          options={mapOptions}
        >
          {typeof window !== 'undefined' && (
            <Marker
              position={COMPANY_LOCATION}
              onClick={handleMarkerClick}
              icon={{
                url: '/images/logo/logo_1.png',
                scaledSize: new window.google.maps.Size(45, 45),
              }}
            />
          )}

          {isInfoWindowOpen && (
            <InfoWindow position={COMPANY_LOCATION} onCloseClick={handleInfoWindowClose}>
              <div className="p-2">
                <h3 className="font-semibold text-gray-900 mb-1">AL HADI EXPORTS</h3>
                <p className="text-xs text-gray-600 mb-2">
                  Textile Manufacturing Facility — Karachi, Pakistan
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={openInGoogleMaps}
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded"
                  >
                    <ExternalLink className="h-3 w-3 inline mr-1" />
                    View Larger
                  </button>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
});

GoogleMapComponent.displayName = 'GoogleMapComponent';
export default GoogleMapComponent;
