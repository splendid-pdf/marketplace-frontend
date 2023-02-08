import axios from 'axios';

/**
 * @description Fetch the location data from the external API
 * @returns Promise with location object
 */

const base_url = 'https://api.bigdatacloud.net/data/';

export const fetchLocation = (latitude: string, longitude: string) => {
  const geoApiUrl =
    base_url +
    `reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ru`;

  const fetching = async (api: string) => {
    const response = await axios.get(api);
    return response;
  };

  return fetching(geoApiUrl);
};
