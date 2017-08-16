import React from "react";
import { render } from "react-dom";
// Import React Table
import ReactTable from "react-table";
import {
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

class Packageform extends React.Component {
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
    <Row>
    <Button bsStyle='success' onClick={::this.open}>เพิ่มข้อมูลบรรจุภัณฑ์</Button>
    <Modal show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เพิ่ม/แก้ไข ข้อมูลบรรจุภัณฑ์</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title>ข้อมูลบรรจุภัณฑ์</Modal.Title>  
        <Packageform/>
      </Modal.Body>
      <Modal.Footer>
      <Button bsStyle='success' onClick={::this.close}>บันทึก</Button>
      <Button onClick={::this.close}>ยกเลิก</Button>
      </Modal.Footer>
    </Modal>
    {' '}
    <Button bsStyle='danger'>ลบ</Button>
        
    <Button className='pull-right'>พิมพ์</Button>
    {' '}
    <Button className='pull-right'bsStyle='primary'><Icon glyph='icon-fontello-download' /> นำออกไฟล์</Button>
    </Row>
    </div>
        );
    }
}

class DatatableComponent extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {name:"test",
              modify:<Button bsStyle='danger'>แก้ไข</Button>
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
                Header: "ชื่อของรูปแบบบรรจุภัณฑ์",
                accessor: "name"
              },
              {
                Header: "แก้ไข",
                accessor:"modify"
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        );
    }
}
export default class Usermanagement extends React.Component {
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
                      <DatatableComponent />
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