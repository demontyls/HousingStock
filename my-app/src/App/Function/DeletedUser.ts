import axios from "axios";
import {BASEURL} from "../../module/module";

export async function deleteUser (id:number) {
  try {
    const {data} = await axios.delete(BASEURL + 'HousingStock/bind_client/' + id);
    return data;
  } catch (error) {
    console.error(error)
  }
};