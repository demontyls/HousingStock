import React, {memo, useEffect, useState} from 'react';
import House from '../House/House';
import {IStreet} from './interface';
import './style.css'
import {HOUSES} from "../../../module/module";
import useControlChildren from "../../Hooks/UseControllChildren";

interface IComponentStreet {
  data: IStreet;
}
const Street: React.FC<IComponentStreet> = ({data}) => {
  const [show, setShow,children, setChildren, showChildren] = useControlChildren();

  useEffect(()=>{
    console.log(children);
  },[children])
  return (
    <div className="street">
      <a role="button" className="street-name" onClick={()=> showChildren(data, HOUSES)}>
        Улица - {data.name}
      </a>
      {show &&
        <div className="houses">
          {show && children.map((house)=> {
            return (
            <House key={house.id} data={house} streetId={data.id}/>
              )
          })}
        </div>
      }
    </div>
  );
};

export default memo(Street);