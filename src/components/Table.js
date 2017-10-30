import React from 'react';
import ReactTable from "react-table";
import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider
} from '@sketchpixy/rubix';

export default class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{}],
      show: 1
    }
  }
  log(){
    console.log("Tset");
  }
  render() {
    var col = [
      {
        Header: "ชื่อยาและเวชภัณฑ์",
        accessor: "Name"
      },
      {
        Header: "รูปแบบ",
        accessor: "Type"
      },
      {
        Header: "ขนาดบรรจุ",
        accessor: "Pack"
      },
      {
        Header: "ราคาต่อหน่วน",
        accessor: "Price"
      },
      {
        Header: "อัตรากาใช้",
        onClick: (e, handleOriginal) => {
          console.log("Test");
          if (handleOriginal) {
            handleOriginal()
          }
        },
        columns: [
          {
            Header: "Year1",
            accessor: "1"
          },
          {
            Header: "Year2",
            accessor: "2"
          },
          {
            Header: "Year3",
            accessor: "3"
          }
        ]
      },
      {
        Header: 'ปริมาณการใช้',
        accessor: "Use"
      },
      {
        Header: 'ปริมาณคงคลัง',
        accessor: "Stock"
      },
      {
        Header: 'ปริมาณการซื้อ',
        accessor: "Buy"
      },
      {
        Header: "ปริมาณการจัดซื้อ",
        columns: [
          {
            Header: "งวดที ่1",
            accessor: "S1"
          },
          {
            Header: "งวดที ่2",
            accessor: "S2"
          },
          {
            Header: "งวดที่ 3",
            accessor: "S3"
          },
          {
            Header: "งวดที ่4",
            accessor: "S4"
          }
        ]
      },
      {
        Header: "ยอดรวมการจัดซื้อ",
        columns: [
          {
            Header: "(จำนวน)",
            accessor: "Q"
          },
          {
            Header: "(บาท)",
            accessor: "B"
          }
        ]
      }
    ];
    var show1 = [
      {
        Header: "Year1",
        accessor: "1"
      },
      {
        Header: "Year2",
        accessor: "2"
      },
      {
        Header: "Year3",
        accessor: "3"
      }
    ]
    var show2 = [{
      Header: "เฉลี่ย",
      accessor: "Av"
    }]
    if(this.state.show == 1){
      col[4].columns = show2;
    }else{
      col[4].columns = show1;
    }
    return (
      <ReactTable
          data={this.state.data}
          columns={col}
          defaultPageSize={10}
          className="-striped -highlight"
          getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, handleOriginal) => {
                  console.log("Test");
                  if (handleOriginal) {
                    handleOriginal()
                  }
                }
              }
            }}
        />
    );
  }
}
