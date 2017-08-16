import React , { Component } from 'react';
import ReactTable from "react-table";
import {
  Row,
  Col,
  PanelContainer,
  Panel,
  PanelBody,
  Grid,
  Button,
} from '@sketchpixy/rubix';
import AddGenericMedicine from '../components/AddGenericMedicineAndSupplies';

class Buttombar extends React.Component {
  render(){
      return (
          <div>
              <Button bsStyle='primary' onClick={this.props.showadd}>เพิ่ม ข้อมูลยา/ข้อมูลเวชภัณฑ์</Button>
          </div>
      );
  }
}
class GenericTable extends Component {
  render(){
    var data = [
      {strGenericID:"6447286249",strGenericName:"test",strGenericType:"A",type:"ยา"},
      {strGenericID:"1175263402",strGenericName:"test",strGenericType:"A",type:"เวชภัณฑ์"},
      {strGenericID:"7150887353",strGenericName:"test",strGenericType:"A",type:"ยา"},
      {strGenericID:"9515712644",strGenericName:"test",strGenericType:"A",type:"เวชภัณฑ์"},
      {strGenericID:"5359871986",strGenericName:"test",strGenericType:"A",type:"ยา"},
      {strGenericID:"3383735316",strGenericName:"test",strGenericType:"A",type:"เวชภัณฑ์"},
      {strGenericID:"7749582384",strGenericName:"test",strGenericType:"A",type:"ยา"},
      {strGenericID:"8015573222",strGenericName:"test",strGenericType:"A",type:"ยา"},
      {strGenericID:"9766126177",strGenericName:"test",strGenericType:"A",type:"เวชภัณฑ์"},
    ];
    return(
      <div>
        <ReactTable
          data={data}
          noDataText="ไม่พบข้อมูล"
          filterable

          columns={[
            {
              Header: "รหัสเวชภัณฑ์",
              accessor: "strGenericID"
            },
            {
              Header: "ชื่อสามัญ",
              accessor: "strGenericName"
            },
            {
              Header: "ประเภทของ ยา/เวชภัณฑ์",
              accessor: "strGenericType"
            },
            {
              Header: "ยา/เวชภัณฑ์",
              accessor: "type",
              id:"type",
              filterMethod: (filter, row) => {
                if (filter.value === "All") {
                  return true;
                }
                if (filter.value === "Medicine") {
                  return row[filter.id] == "ยา";
                }
                return row[filter.id] == "เวชภัณฑ์";
              },
              Filter: ({ filter, onChange }) =>
                <select
                  onChange={event => onChange(event.target.value)}
                  style={{ width: "100%" }}
                  value={filter ? filter.value : "all"}
                >
                  <option value="All">แสดงทั้งหมด</option>
                  <option value="Medicine">ยา</option>
                  <option value="MedicalSupplies">เวชภัณฑ์</option>
                </select>
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
class GenericMedicineAndSupplies extends Component {
  showadd(){
    this.setState({addshow:true});
  }
  submit(){
    this.setState({addshow:false});
  }
  constructor(props){
    super(props);

    this.state = {
      addshow: false
    };
    this.showadd = this.showadd.bind(this);
    this.submit = this.submit.bind(this);
  }
  render(){
    var show =<div><Buttombar showadd={this.showadd}/><br/><GenericTable/></div>;
    if(this.state.addshow == true){
      show = <AddGenericMedicine submit={this.submit}/>;
    }
    return(
      <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      {show}
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Col>
      </Row>
    );
  }
}
export default GenericMedicineAndSupplies;
