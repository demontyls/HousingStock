import React, {memo, useState} from 'react';
import {IHouses} from "./interface";
import useControlChildren from "../../Hooks/UseControllChildren";
import {HOUSINGSTOCK} from "../../../module/module";
import Flat from "../Flat/Flat";
import './style.css'

interface IComponentHouse {
  data: IHouses;
  streetId: number
}
const House: React.FC<IComponentHouse> = ({data, streetId}) => {
  const [show, setShow,children, setChildren, showChildren] = useControlChildren();

  return (
    <div className="street">
      <a role="button" className="house-name" onClick={()=> showChildren(data, HOUSINGSTOCK , streetId)}>
        Дом - {data.name}
      </a>
      {show &&
        <div className="flats">
          {children.map((flat: any, i)=> {
            return (
              <Flat key={`${i}-${flat.houseId} `} data={flat}/>
            )
          })}
        </div>
      }

    </div>
  );
};

export default memo(House);