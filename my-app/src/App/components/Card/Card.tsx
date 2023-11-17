import React, {memo, useContext} from 'react';
import { IClient } from './interface';
import './style.css'
import {deleteUser} from "../../Function/DeletedUser";
import {MainContext} from "../../Provider/MainProvider";

interface IComponentCard {
  data: IClient
}
const Card: React.FC<IComponentCard> = ({data}) => {
  const { clients, addressId, setClients} = useContext(MainContext);
  async function removeUser (id: number) {
    try {
    const response = deleteUser(id);
    const result = clients.filter((client: IClient) => client.id !== data.id );
    setClients(result)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="card">
      <div className="d-flex justify-content-between align-items-start">
      <div className="avatar">AV</div>
        <div className="d-flex flex-direction-end">
          <button onClick={() => console.log(removeUser(data.bindId))}>
            Удалить
          </button>
        </div>
      </div>
      <div className="d-flex flex-column w-100">
        <span className="mb-1">
          Имя: {data.name ? data.name : '----'}
        </span>
        <span>
          Тел: {data.phone ? data.phone : '----' }
        </span>
        <span className="mb-1">
          Почта: {data.email ? data.email : '----'}
        </span>
      </div>
    </div>
  );
};

export default memo(Card);