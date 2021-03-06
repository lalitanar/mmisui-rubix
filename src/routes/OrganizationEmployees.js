import React from "react";
import { render } from "react-dom";

import { Link, withRouter } from 'react-router';
// Import React Table
import ReactTable from "react-table";
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

class Employeeform extends React.Component {
    render() {
        return (
            <Form>
                <Row>
                <Col xs={3} md={3}>
                <FormGroup controlId="title">
	              <ControlLabel>คำนำหน้า</ControlLabel>
	              <FormControl componentClass="select" placeholder="title">
		            <option value="0">นาย</option>
		            <option value="1">นางสาว</option>
                <option value="2">นาง</option>
	              </FormControl>
	              </FormGroup>
                </Col>
                <Col xs={5} md={4}>
                    <FormGroup controlId="ppl_name">
                    <ControlLabel>ชื่อ</ControlLabel>
                    <FormControl type="text" placeholder="Name"/>
                    </FormGroup>
                </Col>
                <Col xs={5} md={5}>
                    <FormGroup controlId="ppl_surname">
                    <ControlLabel>นามสกุล</ControlLabel>
                    <FormControl type="text" placeholder="Surname" />
                    </FormGroup>
                </Col>
                <Col xs={6} md={8}>
                    <ControlLabel>สถานะการทำงาน</ControlLabel>
                    <FormGroup controlId="ppl_status">
	                     <Radio inline name='work_status'>ปฏิบัติงาน</Radio> {' '}
                       <Radio inline name='work_status'>พักงาน</Radio>{' '}
	                  </FormGroup>
                </Col>
                <Col xs={6} md={8}>
                    <FormGroup controlId="title">
	                  <ControlLabel>หน่วยงาน</ControlLabel>
	                  <FormControl componentClass="select" placeholder="organization">
		                <option value="0">Mahidol</option>
		                <option value="1">Valve</option>
                    <option value="2">Ubisoft</option>
	                  </FormControl>
	                  </FormGroup>
                </Col>
                <Col xs={6} md={8}>
                <FormGroup controlId="title">
                    <ControlLabel>ตำแหน่ง</ControlLabel>
	                  <FormControl componentClass="select" placeholder="position">
		                <option value="0">นักพัฒนา</option>
		                <option value="1">หมอ</option>
                    <option value="2">พยาบาล</option>
	                  </FormControl>
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
    <Button bsStyle='success' onClick={::this.open}><Icon glyph='icon-fontello-plus'/>  เพิ่มข้อมูลพนักงาน</Button>
    <Modal show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เพิ่มข้อมูลพนักงาน</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Employeeform/>
      </Modal.Body>
      <Modal.Footer>
      <Button bsStyle='success' onClick={::this.close}>บันทึก</Button>
      <Button onClick={::this.close}>ยกเลิก</Button>
      </Modal.Footer>
    </Modal>

    <ButtonGroup className='pull-right'>
          <Button bsStyle='primary' >
          <Icon glyph='icon-fontello-download' /> นำออกไฟล์
          </Button>
          <Button bsStyle='defalt'>
          <Icon glyph='icon-fontello-print' /> พิมพ์
          </Button>
    </ButtonGroup>
    </div>
        );
    }
}

class Employeetable extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {
                ppl_title:"Ms.",
                ppl_name:"kik",
                ppl_surname:"lurkraisit",
                ppl_status:"1",
                ppl_organization:"Mahidol",
                ppl_position:"nurse"
              },
              {
                ppl_title:"Mr.",
                ppl_name:"who",
                ppl_surname:"lol",
                ppl_status:"0",
                ppl_organization:"Mahidol",
                ppl_position:"doctor"
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
                Header: "คำนำหน้าชื่อ",
                accessor: "ppl_title"
              },
              {
                Header: "ชื่อ",
                accessor: "ppl_name"
              },
              {
                Header: "นามสกุล",
                accessor:"ppl_surname"
              },
              {
                Header: "สถานะ",
                accessor:"ppl_status",
                Cell: row => (
                  <span>
                    <span style={{
                       color: row.value === '1' ? '#57d500'
                            :'#ff2e00',
                      transition: 'all .3s ease'
                      }}>&#x25cf;
                    </span> 
                    {
                      row.value === '1' ? 'ปฏิบัติงาน'
                      :'พักงาน'
                    }
                  </span>
                )
              },
              {
                Header: "หน่วยงาน",
                accessor:"ppl_organization"
              },
              {
                Header: "ตำแหน่ง",
                accessor:"ppl_position"
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        );
    }
}
export default class OrganizationTable extends React.Component {
    render() {
        return (
            <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <Buttonbar/>
                      <hr/>
                      <Employeetable />
                      <br/>
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