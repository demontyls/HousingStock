import React, {createContext, JSX, useEffect, useState} from 'react';
import {IForm} from "./interface";

export interface IMainProvider {
  clients: any;
  setClients: (value: any) => void;
  handlerSetFormValue: (field: string, value: string) => void;
  formValue: IForm;
  clearForm: () => void;
  addressId: number,
  setAddressId: (value: number) => void,
}

export const defaultValue = {}
export const MainContext = createContext<IMainProvider>(defaultValue as IMainProvider);

export const MainProvider = ({children} : {
  children: React.ReactElement
} ) : JSX.Element => {
  const config = useMainContext();
  return (
    <MainContext.Provider value={config}>
      {children}
      </MainContext.Provider>
  )
}

export const useMainContext = ():IMainProvider => {
  const [clients, setClients] = useState([]);
  const [addressId, setAddressId] = useState(0);
  const [formValue, setFormValue] = useState<any>({
    name:'',
    phone: '',
    email: '',
  });

  const handlerSetFormValue = (field: string, value: string) => {
    setFormValue({...formValue, [field]: value});
  }

  const clearForm = () => {
    setFormValue({
      name:'',
      phone: '',
      email: '',
    })
  }

  return {
    clients,
    setClients,
    handlerSetFormValue,
    formValue,
    clearForm,
    addressId,
    setAddressId,
  }
}