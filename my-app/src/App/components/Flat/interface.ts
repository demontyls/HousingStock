export interface IFlat {
  accounts: IAccounts[];
  addressId: number;
  building: string;
  clients: [];
  flat: string;
  houseId: number;
  streetId: number;
  streetName: string
}

export interface IAccounts {
  account: string;
  bindId: number
}