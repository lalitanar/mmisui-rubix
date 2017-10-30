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

class AllPlanningform extends React.Component {
    render() {
        var current_y=this.props.cur_year
        return (
            <Form>
                <Row>
                <Col xs={12}>
                <FormGroup controlId="planningyear">
                    <Col componentClass={ControlLabel} xs={7}>
                        แผนการจัดซือยาและเวชภัณฑ์ประจำปีที่
                    </Col>
                    <Col xs={3} md={3}>
	                  <FormControl componentClass="select" placeholder="year">
                        <option value="0">{current_y}</option>
                        <option value="1">{current_y+1}</option>
		                    <option value="2">{current_y+2}</option>
                        <option value="3">{current_y+3}</option>
                        <option value="4">{current_y+4}</option>
                        <option value="5">{current_y+5}</option>
	                  </FormControl>
                    </Col>
	            </FormGroup>
                </Col>
                </Row>
            </Form>
        );
    }
}

class Buttonbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { showModal: false };
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    render() {
        return (
    <div>
    <Row>
    <Col xs={12}>
    <Button bsStyle='success' onClick={::this.open}><Icon glyph='icon-fontello-plus'/>  สร้างแผนใหม่</Button>
    <Modal show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เพิ่มแผนการจัดซื้อยาและเวชภัณฑ์</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AllPlanningform cur_year={2560}/>
      </Modal.Body>
      <Modal.Footer>
      <Button bsStyle='success' onClick={::this.close}>บันทึก</Button>
      <Button onClick={::this.close}>ยกเลิก</Button>
      </Modal.Footer>
    </Modal>
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
