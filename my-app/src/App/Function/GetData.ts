import axios from 'axios';
import { BASEURL } from '../../module/module';

export async function getData(name:string, id?: number | string) {
  const url = `${BASEURL}${name}${id ?? ''}`
  try {
    const response = await axios.get(url);
    return response.data
  } catch (error) {
    console.error(error)
  }
}