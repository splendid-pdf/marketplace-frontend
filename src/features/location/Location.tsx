import React from 'react';
import { fetchLocation } from 'shared/api/fetchLocation';
import useGeolocation from 'shared/hooks/UseGeoLocation';

export const Location = () => {
  const [location, setLocation] = React.useState('');
  const geolocation = useGeolocation();
  const { latitude, longitude } = geolocation.coordinates;

  React.useEffect(() => {
    if (!geolocation.loaded) {
      if ('error' in geolocation) {
        console.log(geolocation.error);
      }
      return;
    }
    fetchLocation(latitude, longitude)
      .then((res) => setLocation(res.data.city))
      .catch(console.warn);
  }, [geolocation]);
  return <div>{location}</div>;
};
