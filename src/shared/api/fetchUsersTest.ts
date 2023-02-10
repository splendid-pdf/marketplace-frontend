import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsersTest = () => {
 
  const fetching = async (api: string) => {
    const response = await axios.get(api);
    return response.data;
  };

  return fetching(url);
};