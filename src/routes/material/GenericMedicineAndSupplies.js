import React , { Component } from 'react';
import ReactTable from "react-table";
import Detail from '../../components/Detail'
import {
  Row,
  Col,
  PanelContainer,
  Panel,
  PanelBody,
  Grid,
  Button,
  Icon,
  PanelHeader,
  ButtonGroup,
} from '@sketchpixy/rubix';
import AddGenericMedicine from '../../components/AddGenericMedicineAndSupplies';
class Buttombar extends React.Component {
  render(){
      return (
          <div>
            <Button bsStyle='success' onClick={this.props.showadd}>
              <Icon glyph='icon-fontello-plus' /> เพิ่มข้อมูลผลิตภัณฑ์
            </Button>
            <ButtonGroup className='pull-right'>
              <Button bsStyle='primary'>
              <Icon glyph='icon-fontello-download' /> นำออก EXCEL
            </Button>
            <Button bsStyle='defalt'>
              <Icon glyph='icon-fontello-print' /> พิมพ์
            </Button>
            </ButtonGroup>
          </div>
      );
  }
}
class GenericTable extends Component {
  render(){
    const submit = this.props
    var data = [
      {strGenericID:"6447286249",strGenericName:"test",strGenericType:"A",type:"ยา",Remark:<ButtonGroup>
                        <Button bsStyle='info' onClick={this.props.showdetail} submit={submit}>  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>},
      {strGenericID:"1175263402",strGenericName:"test",strGenericType:"A",type:"เวชภัณฑ์",Remark:<ButtonGroup>
                        <Button bsStyle='info'>  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>},
      {strGenericID:"7150887353",strGenericName:"test",strGenericType:"A",type:"ยา",Remark:<ButtonGroup>
                        <Button bsStyle='info'>  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>},
      {strGenericID:"9515712644",strGenericName:"test",strGenericType:"A",type:"เวชภัณฑ์",Remark:<ButtonGroup>
                        <Button bsStyle='info'>  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>},
      {strGenericID:"5359871986",strGenericName:"test",strGenericType:"A",type:"ยา",Remark:<ButtonGroup>
                        <Button bsStyle='info'>  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>},
      {strGenericID:"3383735316",strGenericName:"test",strGenericType:"A",type:"เวชภัณฑ์",Remark:<ButtonGroup>
                        <Button bsStyle='info'>  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>},
      {strGenericID:"7749582384",strGenericName:"test",strGenericType:"A",type:"ยา",Remark:<ButtonGroup>
                        <Button bsStyle='info'>  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>},
      {strGenericID:"8015573222",strGenericName:"test",strGenericType:"A",type:"ยา",Remark:<ButtonGroup>
                        <Button bsStyle='info'>  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>},
      {strGenericID:"9766126177",strGenericName:"test",strGenericType:"A",type:"เวชภัณฑ์",Remark:<ButtonGroup>
                        <Button bsStyle='info'>  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>},
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
            },
            {
              Header: "เพิ่มเติม",
              accessor: "Remark",
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
    this.setState({detail:false});
  }
  showdetail(){
    console.log("call")
    this.setState({detail:true});
  }
  constructor(props){
    super(props);

    this.state = {
      addshow: false,
      detail: false
    };
    this.showadd = this.showadd.bind(this);
    this.submit = this.submit.bind(this);
    this.showdetail = this.showdetail.bind(this);
  }
  render(){
    var obj ={title:"ข้อมูลยา test",head:"",nav:{key:"home",title:"รายละเอียด"},content:<div>
        <Row>
            <Col xs={6}>
                <address>
                    รหัสเวชภัณฑ์: 6447286249<br />
                    ชื่อสามัญ: test<br />
                    ประเภทเวชภัณฑ์: A<br />
                    ชื่อย่อ: t<br />
                    รหัสกลุ่มยา: Gastro-intestinal system<br />
                    ส่วนประกอบ/ความแรง: A<br />
                    รูปแบบยา: A<br />
                    คำค้นหา: A<br />
                </address>
            </Col>
          </Row>
    </div>}
    var table =<PanelContainer>
      <Panel>
        <PanelHeader className='bg-blue'>
           <Grid>
             <Row>
              <Col xs={12} className='fg-white'>
                <h4>ข้อมูลยาและเวชภัณฑ์</h4>
              </Col>
             </Row>
           </Grid>
          </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col xs={12}>
                <Buttombar showadd={this.showadd}/>
                <br/>
                <GenericTable showdetail={this.showdetail} submit={this.submit}/>
              </Col>
            </Row>
          </Grid>
        </PanelBody>
      </Panel>
    </PanelContainer>;
    var show;
    if(this.state.addshow == true){
      show = <AddGenericMedicine submit={this.submit}/>;
    }
    if(this.state.detail == true){
      show = <Detail objd={obj} submit={this.submit}/>;
    }
    if(this.state.addshow == false && this.state.detail == false){
      show= table;
    }

    return(
      <Row>
        <Col xs={12}>
          {show}
        </Col>
      </Row>
    );
  }
}
export default GenericMedicineAndSupplies;
