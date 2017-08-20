import React from "react";
import { render } from "react-dom";

import { Link, withRouter } from 'react-router';
// Import React Table
import ReactTable from "react-table";
import {
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
                <Col xs={6} md={6}>
                    <FormGroup controlId="Bigunitname">
                    <ControlLabel>ชื่อหน่วยใหญ่(เข้า)</ControlLabel>
                    <FormControl type="text" placeholder="Big Unit"/>
                    </FormGroup>
                </Col>
                <Col xs={6} md={6}>
                    <FormGroup controlId="Bigunitquan">
                    <ControlLabel>จำนวนหน่วยใหญ่</ControlLabel>
                    <FormControl type="text" placeholder="Quantity" />
                    </FormGroup>
                </Col>

                <Col xs={6} md={6}>
                    <FormGroup controlId="Smallunitname">
                    <ControlLabel>ชื่อหน่วยย่อย(ออก)</ControlLabel>
                    <FormControl type="text" placeholder="Small Unit" />
                    </FormGroup>
                </Col>
                <Col xs={6} md={6}>
                    <FormGroup controlId="Samllunitquan">
                    <ControlLabel>จำนวนหน่วยย่อย</ControlLabel>
                    <FormControl type="text" placeholder="Quantity" />
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
                ppl_status:"working",
                ppl_position:"nurse",   
                ppl_organization:"Mahidol",
                moreinfo:<Button bsStyle='success'><Icon glyph='icon-fontello-search' /> ดูรายละเอียดหน่วยงาน</Button>
              },
              {
                ppl_title:"Mr.",
                ppl_name:"who",
                ppl_surname:"lol",
                ppl_status:"break",
                ppl_position:"doctor",
                ppl_organization:"Mahidol",
                moreinfo:<Button bsStyle='success'><Icon glyph='icon-fontello-search' />   ดูรายละเอียดหน่วยงาน</Button>
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
                accessor:"ppl_status"
              },
              {
                Header: "ตำแหน่ง",
                accessor:"ppl_position"
              },
              {
                Header: "หน่วยงาน",
                accessor:"ppl_organization"
              },
              {
                Header: "ดูรายละเอียดเพิ่มเติม",
                accessor:"moreinfo"
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