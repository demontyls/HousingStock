import React, {memo, useEffect, useState} from 'react';
import Street from "../Street/Street";
import {IStreet} from "../Street/interface";
import {getData} from "../../Function/GetData";
import {STREETS} from "../../../module/module";
import './style.css'

interface ITree {

}
const Tree: React.FC<ITree> = () => {
  const [data, setData] = useState<IStreet[]>([]);

  useEffect(()=>{
    getData(STREETS).then((response)=> {
      setData(response);
    });
  },[]);

  return (
    <div className="tree">
      {data.map((street)=>{
        return (
          <Street key={street.id} data={street}/>
        )
      })}
    </div>
  );
};
export default memo(Tree);