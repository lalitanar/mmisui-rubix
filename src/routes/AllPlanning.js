import React from "react";
import { render } from "react-dom";

import { Link, withRouter } from 'react-router';
// Import React Table
import ReactTable from "react-table";
import ToggleButton from 'react-toggle-button'
import {
    Radio,
    SidebarNavItem,
    Row,
    Col,
    Grid,
    Panel,
    Table,
    PanelBody,
    PanelHeader,
    PanelFooter,
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
    BPanel
} from '@sketchpixy/rubix';

class Buttonbar extends React.Component {
    render() {
        return (
    <div>
    <Row>
    <Col xs={12}>
        <Link to={'/createplan'}><Button bsStyle='success'><Icon glyph='icon-fontello-plus'/>  สร้างแผนใหม่</Button></Link>
    </Col>
    </Row>
    </div>
        );
    }
}

class AllPlanningtable extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {
                planning:"แผนการจัดซื้อยาและเวชภัณฑ์ ปีงบประมาณ2560",
                budget:50000000,
                status:0,
                moreinfo:<Link to={'/planningoverview'}><Button bsStyle='success'><Icon glyph='icon-fontello-search'/>ดูรายละเอียด</Button></Link>
              },
              {
                planning:"แผนการจัดซื้อยาและเวชภัณฑ์ ปีงบประมาณ2559",
                budget:250000000,
                status:1,
                moreinfo:<Button bsStyle='success'><Icon glyph='icon-fontello-search'/>ดูรายละเอียด</Button>
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
              Header: "แผนการจัดซื้อยาและเวชภัณฑ์",
              accessor:"planning"
            },
            {
              Header:"งบประมาณทั้งหมด",
              accessor:"budget",
              width:200
            },
            {
              Header: "สถานะ",
              accessor: "status",
              width:120,
              Cell: row => (
                  <span>
                    <span style={{
                       color: row.value === 1 ? '#57d500'
                            :'#ff2e00',
                      transition: 'all .3s ease'
                      }}>&#x25cf;
                    </span> 
                    {
                      row.value === 1 ? ' ทำงาน'
                      :' ไม่ทำงาน'
                    }
                  </span>
                )
            },
            {
              Header: "",
              accessor: "moreinfo",
              width:150
            }
          ]}
          defaultPageSize={13}
          className="-striped -highlight"
          />
        );
    }
}

export default class AllPlanning extends React.Component {
    render() {
        return (
            <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelHeader className='bg-blue fg-white'>
                  <Grid>
                      <h3>แผนการจัดซื้อยาและเวชภัณฑ์</h3>
                  </Grid>
              </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <br/>
                      <Buttonbar/>
                        <br/>
                      <AllPlanningtable />
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
