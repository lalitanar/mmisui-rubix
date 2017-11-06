import React , { Component } from 'react';
import ReactTable from "react-table";
import {
  Button,
  Icon
} from '@sketchpixy/rubix';

export default class Table extends Component{
  constructor() {
    super();
    this.state = {
      data: [{
        Name:"Paracetamol",
        Type:"ยา",
        Pack:"1แผง 12เม็ด",
        Price:20,
        Year1:10,
        Year2:20,
        Year3:30,
        Av:20,
        Use:10,
        Stock:1000,
        Buy:30,
        S1:4,
        S2:6,
        S3:8,
        S4:10,
        Q:20,
        B:10,
        Button:<Button bsStyle='danger'><Icon glyph='icon-fontello-bin'/>ลบ</Button>
      }],
      show: 1
    }
    this.change = this.change.bind(this)
    this.renderEditable = this.renderEditable.bind(this)
  }
  change(){
    if(this.state.show == 1){
      this.setState({show:2})
    }else{
      this.setState({show:1})
    }
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
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
        Header: "ราคาต่อหน่วย",
        accessor: "Price",
        width: 110,
        Cell:this.props.editable==true?this.renderEditable
                                      :null
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
            width: 60,
            Cell:this.props.editable==true?this.renderEditable
                                          :null
          },
          {
            Header: "งวดที ่2",
            accessor: "S2",
            width: 60,
            Cell:this.props.editable==true?this.renderEditable
                                          :null
          },
          {
            Header: "งวดที่ 3",
            accessor: "S3",
            width: 60,
            Cell:this.props.editable==true?this.renderEditable
                                          :null
          },
          {
            Header: "งวดที ่4",
            accessor: "S4",
            width: 60,
            Cell:this.props.editable==true?this.renderEditable
                                          :null
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
      },
      {
        Header:"",
        accessor:"Button"
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
          defaultPageSize={this.props.psize}
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
