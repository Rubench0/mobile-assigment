import axios, {AxiosResponse} from 'axios';

const url = 'https://rickandmortyapi.com/api/';

export default async function query(
  endpoint: string,
  method: string = 'GET',
  headers: any,
  params: any,
) {
  try {
    let response: AxiosResponse<any>;
    switch (method) {
      case 'GET':
        response = await axios.get(`${url}${endpoint}`);
        return response;
      case 'POST':
        response = await axios.post(`${url}${endpoint}`, params);
        return response;
      default:
        break;
    }
  } catch (error) {
    throw error;
  }
}
