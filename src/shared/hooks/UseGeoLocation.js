import React from 'react';

const useGeolocation = () => {
  const [location, setLocation] = React.useState({
    loaded: false,
    coordinates: { latitude: '', longitude: '' },
  });

  const onSuccess = ({ coords }) => {
    setLocation({
      loaded: true,
      coordinates: {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      ...location,
      loaded: false,
      error,
    });
  };

  React.useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocation;
