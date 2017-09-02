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

class Historytable extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {
                selection:<Checkbox inline/>,
                date:"01/09/2017",
                time:"18:57:25",
                act_id:"5881079",
                activity:"Mapping รหัส TMT กับ DC-24 ของยา A",
                username:"admin_test",
                system:"NMPCD",
                view:<Button bsStyle='green' href='/viewhistory'>
                     <Icon glyph='icon-fontello-search'/> ดูรายละเอียด
                     </Button>
              }
          ]
        };
      }

    render() {
        return (
            <ReactTable
            data={this.state.data}
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

          if(this.state.showmore == true){
            show = <ViewHistory back={this.back}/>;
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