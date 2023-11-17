import React, {memo, useContext, useEffect} from 'react';
import {IFlat} from './interface';
import {MainContext} from "../../Provider/MainProvider";
import {BASEURL, USERS} from "../../../module/module";
import axios from "axios";
import {getData} from "../../Function/GetData";

interface IComponentFlat {
  data: IFlat;
}
const Flat: React.FC<IComponentFlat> = ({data}) => {
  const { clients, setClients, setAddressId , addressId} = useContext(MainContext);
  const isActive = data.addressId === addressId ? 'text-primary' : '';

  const getUsers = (id:number) => {
    setAddressId(id);
    getData(USERS, id).then((response)=>{
      console.log(response)
      setClients(response);
    });
  }

  return (
    <div className="flat">
      <a role="button" className={isActive} onClick={()=>getUsers(data.addressId)}>
        Квартира: {data.flat}
      </a>
    </div>
  );
};

export default memo(Flat);