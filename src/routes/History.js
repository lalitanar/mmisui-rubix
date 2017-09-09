import React from "react";
import { render } from "react-dom";

import { Link, withRouter } from 'react-router';
// Import React Table
import ReactTable from "react-table";
import {
    Radio,
    SidebarNavItem,
    Checkbox,
    Row,
    Col,
    Grid,
    Panel,
    Table,
    PanelBody,
    PanelHeader,
    FormControl,
    PanelContainer,
    DropdownButton,
    DropdownHoverButton,
    MenuItem,
    ButtonToolbar,
    ButtonGroup,
    Button,
    Modal,
    Form,
    FormGroup,
    InputGroup,
    ControlLabel,
    Icon,
} from '@sketchpixy/rubix';
import ViewHistory from '../routes/ViewHistory';
import Detail from '../components/Detail'
class Historytable extends React.Component {
    constructor() {
        super();
        this.state = {
        };
      }

    render() {
      var data = [
        {
          selection:<Checkbox inline/>,
          date:"01/09/2017",
          time:"18:57:25",
          act_id:"5881079",
          activity:"Mapping รหัส TMT กับ DC-24 ของยา A",
          username:"admin_test",
          system:"NMPCD",
          view:<Button bsStyle='green' onClick={this.props.showinfo}>
               <Icon glyph='icon-fontello-search'/> ดูรายละเอียด
               </Button>
        }
    ];
        return (
            <ReactTable
            data={data}
            noDataText="ไม่พบข้อมูล"
            filterable
            defualtFilterMethod={(filter, row)=>
                String(row[filter.id])===filter.value ||
                row[filter.id].includes(filter.value)}
            columns={[
              {
                Header: "",
                accessor: "selection",
                width:30
              },
              {
                Header: "วันที่",
                accessor: "date",
                width:105
              },
              {
                Header: "เวลา",
                accessor:"time",
                width:90
              },
              {
                Header: "รหัสกิจกรรม",
                accessor:"act_id",
                width:95
              },
              {
                Header: "กิจกรรม",
                accessor:"activity",
                width:800
              },
              {
                Header: "ชื่อผู้ใช้งาน",
                accessor:"username"
              },
              {
                Header: "ระบบ",
                accessor:"system",
                width:90
              },
              {
                Header: "",
                accessor:"view"
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        );
    }
}
export default class HistoryTable extends React.Component {
  showinfo(){
    this.setState({showmore:true});
    console.log("testset");
  }
  back(){
    this.setState({showmore:false});
  }
  constructor(props){
    super(props);

    this.state = {
      showmore: false
    };
    this.showinfo = this.showinfo.bind(this);
    this.back = this.back.bind(this);
  }
    render() {
          var show=<PanelContainer>
            <Panel>
            <PanelHeader className='bg-blue'>
                <Grid>
                <Row>
                <Col xs={12} className='fg-white'>
                    <h3>บันทึกการใช้งาน</h3>
                </Col>
                </Row>
                </Grid>
            </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <br/>
                      <Historytable showinfo={this.showinfo}/>
                      <br/>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>;
           var obj ={edit :"false",title:"ประวัติการใช้งาน",head:"กิจกรรมรหัส 5881079",nav:{key:"home",title:"รายละเอียด"},content:<div>
           <Row>
               <Col xs={6}>
                  <h4>กิจกรรม</h4>
                   <div>วันที่: 01/09/2017</div>
                   <div>เวลา: 18:57:25</div>
                   <div>รหัสกิจกรรม: 5881079</div>
                   <div>กิจกรรม: Mapping รหัส TMT กับ DC-24 ของยา A</div>

                   <h4>บัญชีผู้ใช้</h4>
                   <div>ชื่อผู้ใช้: admin_test</div>
                   <div>ชื่อ: สวัสดี ลาก่อย</div>
                   <div>หน่วยงาน: สาธารณสุข</div>

                   <h4>การควบคุมระบบ</h4>
                   <div>ระบบ: NMPCD</div>
                   <div>หน้าที่: admin</div>
                   <div>วันที่เริ่มทำงาน: 25/05/2015</div>
                   <div>วันที่สิ้นสุดการทำงาน: NULL</div>
               </Col>
             </Row>
       </div>}
          if(this.state.showmore == true){
            show = <Detail objd={obj} submit={this.back}/>;
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