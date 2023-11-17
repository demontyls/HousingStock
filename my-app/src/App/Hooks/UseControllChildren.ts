import React, { useContext, useEffect, useState } from 'react';
import {IHouses} from "../components/House/interface";
import {IStreet} from "../components/Street/interface";
import {getData} from "../Function/GetData";
import {IFlat} from "../components/Flat/interface";


type TUseControlChildren = () => [
  show: boolean,
  setShow: React.Dispatch<any>,
  children: IHouses[] | IStreet[],
  setChildren: React.Dispatch<any>,
  showChildren: (parent: any, url: string, streetId?:number) => void,
];

const useControlChildren: TUseControlChildren = () => {
  const [show, setShow] = useState(false);
  const [children, setChildren] = useState<IHouses[] | IStreet[]>([]);

  const showChildren = (parent: IHouses | IStreet, url: string, streetId?: number) => {

    const param = streetId ? `?streetId=${streetId}&houseId=${parent.id}` : parent.id;
    if (Boolean(children.length)) {
      setShow(!show);
    } else {
      setShow(true);
      getData(url, param).then((response) => {
        setChildren(response);
      });
    }
  }

  return [show, setShow,children, setChildren, showChildren];
};

export default useControlChildren;
