import React, {memo, useContext} from 'react';
import {MainContext} from "../../Provider/MainProvider";

interface IComponentForm {

}

const Form: React.FC<IComponentForm> = () => {
  const {formValue, handlerSetFormValue} = useContext(MainContext);

  return (
    <div className="d-flex flex-row py-2">
      <div className="mr-1">
        <input value={formValue.name} className="form-control" placeholder="Введите имя"
               onChange={(e)=> handlerSetFormValue('name', e.target.value)}/>
      </div>
      <div className="mr-1">
        <input value={formValue.phone} className="form-control" placeholder="Введите номер"
               onChange={(e)=> handlerSetFormValue('phone', e.target.value)}/>
      </div>
      <div>
        <input value={formValue.email} className="form-control" placeholder="Введите email"
               onChange={(e)=> handlerSetFormValue('email', e.target.value)}/>
      </div>
    </div>
  );
};

export default memo(Form);