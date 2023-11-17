import React, {useEffect, useState} from 'react';
import './App.css';
import Tree from "./components/Tree/Tree";
import UserList from "./components/UserList/UserList";
import {getData} from "./Function/GetData";
import {BASEURL} from "../module/module";
import axios from "axios";

function App() {


  async function getData4(name:string, id?: number | string) {
    const url = `${BASEURL}${name}${id ?? ''}`
    try {
      const {data} = await axios.get('https://dispex.org/api/vtest/HousingStock?streetId=281&houseId=764', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

   async function getData2(name:string, id?: number | string) {
    const url = `${BASEURL}${name}${id ?? ''}`
    try {
      const {data} = await axios.post(url, {
        "Name": "222",
        "Phone": "4444",
        "Email": "2222",
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  const test2 = (name: string) => {
    getData2(name).then((resp)=>{
      console.log(resp)
    })
  }

  return (
    <>
    <div className="main-content">
      <Tree/>
      <UserList/>
    </div>
    </>
  );
}

export default App;
