import React from "react";
import namor from "namor";
import Timestamp from 'react-timestamp';
import { Text , a, Radio,  } from '@sketchpixy/rubix';
var phones = require('phones')



const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const Chance = Math.floor(Math.random() *5);
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return {
    ID: String(Math.floor(Math.floor(Math.random() * 9000000000) + 1000000000)),
    Name: namor.generate({ words: 4, numbers: 0 }),
    Phone: phones.format(String(Math.floor(Math.floor(Math.random() * 9000000000) + 1000000000))),
    NIN: String(Math.floor(Math.floor(Math.random() * 9000000000) + 1000000000)),
    Address: namor.generate({ words: 4, numbers: 0 }),
    Remark: <a href="/supplier/detail"> รายละเอียด</a>,
    Add: <Radio inline name='inline'/>,
    LabelerType:
      Chance % 3 > 1
        ? "บุคคล"
        : "นิติบุคคล" 
    ,
    LocalType:
      Chance % 4 > 1
        ? "ยา"
        : "เวชภัณฑ์" 
    ,

  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}


export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
    For more examples, visit {''}
  <br />
    <a href="https://github.com/react-tools/react-table" target="_blank">
      <img
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>;

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;
