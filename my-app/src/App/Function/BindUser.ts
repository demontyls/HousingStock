import axios from "axios";
import {BASEURL} from "../../module/module";

export async function bindUser (AddressId: number, ClientId: number ) {
  try {
    const response = await axios.put( BASEURL + 'HousingStock/bind_client', {
      "AddressId": AddressId,
      "ClientId": ClientId
    }, {
      headers: {
        "Content-Type": "application/json-patch+json"
      }
    })
    return response
  } catch (error) {
    console.error(error)
  }
}