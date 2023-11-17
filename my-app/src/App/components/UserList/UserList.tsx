import React, {memo, useContext} from 'react';
import {MainContext} from "../../Provider/MainProvider";
import {IClient} from "../Card/interface";
import Card from "../Card/Card";

import './style.css'
import Form from "../Form/Form";
import {BASEURL, USERS} from "../../../module/module";
import {IForm} from "../../Provider/interface";
import {getData} from "../../Function/GetData";
import {bindUser} from "../../Function/BindUser";
import {addUser} from "../../Function/AddUser";

interface IComponentsUserList {

}
const UserList: React.FC<IComponentsUserList> = () => {
  const { clients, formValue, clearForm, addressId, setClients} = useContext(MainContext);

  const isEmpty = () => {
    for (let key in formValue) {
      // @ts-ignore
      if (!Boolean(formValue[key])) {
        return true;
      }
    }
  }

  async function upDateUserList (formValue: IForm) {
    try {
     const {id} = await addUser(formValue);
     const responseBind = await bindUser(addressId, id);
      getData(USERS, addressId).then((response)=>{
        clearForm();
        setClients(response);
      });
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="block-users">
        <div className="header">
          <h3>Список Клиентов</h3>
          <button className="btn btn-secondary" disabled={isEmpty()}
                  onClick={()=> upDateUserList(formValue)}>
            Добавить Клиента
          </button>
        </div>
        <Form/>
        {clients.length ?
          <div className="user-list">
            {clients.map((client: IClient) => <Card key={client.id} data={client}/>)}
          </div>
          : ''
        }
      </div>
    </>
  );
};

// export default memo(UserList);
export default memo(UserList);