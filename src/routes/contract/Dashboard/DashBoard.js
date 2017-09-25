import React , { Component } from 'react';
import ReactTable from "react-table";
import {
  Row,
  Col,
  Panel,
  PanelBody,
  PanelContainer,
  FormGroup,
  ControlLabel,
  option,
  FormControl,
} from '@sketchpixy/rubix';
class ChartContainer extends React.Component {
  render() {
    return (
          <div style={{padding: 25}} className='text-center'>
            <h4>{this.props.name}</h4>
            <div><div id={this.props.id}></div></div>
          </div>
    );
  }
}
class ChartDetail extends Component {
  render(){
    let data = [
      {a:123,b:345435,c:234234,d:0}
    ]
    return(
      <ReactTable
        data={data}
        noDataText="ไม่พบข้อมูล"
        showPaginationBottom = {false}
        defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value ||
            row[filter.id].includes(filter.value)}
        columns={[
            {
                Header: "งบ ก",
                accessor: "a"
            },
            {
                Header: "งบ ข",
                accessor: "b"
            },
            {
                Header: "งบ ค",
                accessor: "c"
            },
            {
                Header: "งบ ง",
                accessor: "d"
            }
        ]}
        defaultPageSize={5}
        className="-striped -highlight"
        />
    );
  }
}
class DashBoard extends Component {
  componentDidMount() {
    (() => {
      var chart = c3.generate({
        bindto: '#pie-chart1',
        data: {
          columns: [
            ['รออนุมัติ', 30],
            ['รอทำสัญญา', 120],
            ['สัญญา', 120],
          ],
          type : 'pie',
          onclick: function (d, i) { console.log("onclick", d, i); }
        }
      });
    })();
    (() => {
      var chart = c3.generate({
        bindto: '#pie-chart2',
        data: {
          columns: [
            ['จัดซื้อแล้ว', 30],
            ['ยังไม่จัดซื้อ', 120],
          ],
          type : 'pie',
          onclick: function (d, i) { console.log("onclick", d, i); }
        }
      });
    })();
  }
  render(){
    return(
      <div>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <FormGroup>
                <ControlLabel >แสดง</ControlLabel>
                  <FormControl componentClass="select" placeholder="1"  >
                    <option value="0">ยา</option>
                    <option value="1">เวชภัณฑ์</option>
                    <option value="2">ทั้งหมด</option>
                </FormControl>
            </FormGroup>
            <FormGroup>
                <ControlLabel >ของปี</ControlLabel>
                  <FormControl componentClass="select" placeholder="1"  >
                    <option value="0">2560</option>
                    <option value="1">2561</option>
                    <option value="2">2562</option>
                    <option value="3">2563</option>
                    <option value="4">2564</option>
                </FormControl>
            </FormGroup>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={6}><ChartContainer id='pie-chart1' name='ประเภทสัญญา' /></Col>
          <Col md={6}><ChartContainer id='pie-chart2' name='การจัดซื้อ' /></Col>
        </Row>
        <br/>
        <ChartDetail/>
      </div>
    );
  }
}

export default DashBoard
