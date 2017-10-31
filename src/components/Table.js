import React , { Component } from 'react';
import ReactTable from "react-table";

export default class Table extends Component{
  constructor() {
    super();
    this.state = {
      data: [{}],
      show: 1
    }
    this.change = this.change.bind(this)
  }
  change(){
    if(this.state.show == 1){
      this.setState({show:2})
    }else{
      this.setState({show:1})
    }

  }
  render() {
    var col = [
      {
        Header: "ชื่อยาและเวชภัณฑ์",
        accessor: "Name",
        width: 300
      },
      {
        Header: "รูปแบบ",
        accessor: "Type",
        width: 70
      },
      {
        Header: "ขนาดบรรจุ",
        accessor: "Pack"
      },
      {
        Header: "ราคาต่อหน่วน",
        accessor: "Price",
        width: 110
      },
      {
        Header: <p onClick={this.change}>อัตรากาใช้</p>,
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
            accessor: "S1",
            width: 60
          },
          {
            Header: "งวดที ่2",
            accessor: "S2",
            width: 60
          },
          {
            Header: "งวดที่ 3",
            accessor: "S3",
            width: 60
          },
          {
            Header: "งวดที ่4",
            accessor: "S4",
            width: 60
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
        accessor: "1",
        width: 60
      },
      {
        Header: "Year2",
        accessor: "2",
        width: 60
      },
      {
        Header: "Year3",
        accessor: "3",
        width: 60
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
          defaultPageSize={5}
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
