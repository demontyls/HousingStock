import {IForm} from "../Provider/interface";
import axios from "axios";
import {BASEURL} from "../../module/module";

export async function addUser (value: IForm) {
  try {
    const {data} = await axios.post(BASEURL + '/HousingStock/client', {
      "Name": value.name,
      "Phone": value.phone,
      "Email": value.email,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return data;
  } catch (error) {
    console.error(error)
  }
}