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
                <Col xs={4} md={4}>
                    <FormGroup controlId="Bigunitname">
                    <ControlLabel>ชื่อหน่วยใหญ่(เข้า)</ControlLabel>
                    <FormControl type="text" placeholder="Big Unit"/>
                    </FormGroup>
                </Col>
                <Col xs={3} md={4}>
                    <FormGroup controlId="Samllunitquan">
                    <ControlLabel>จำนวนหน่วยย่อย</ControlLabel>
                    <FormControl type="text" placeholder="Quantity" />
                    </FormGroup>
                </Col>
                <Col xs={4} md={4}>
                    <FormGroup controlId="Smallunitname">
                    <ControlLabel>ชื่อหน่วยย่อย(ออก)</ControlLabel>
                    <FormControl type="text" placeholder="Small Unit" />
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

    <Button bsStyle='success' onClick={::this.open}><Icon glyph='icon-fontello-plus'/>  เพิ่มข้อมูลบรรจุภัณฑ์</Button>
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

class DatatableComponent extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {name:"1กระปุก 100เม็ด",
              edit:<ButtonGroup>
                        <Button bsStyle='warning'><Icon glyph='icon-fontello-edit'/>  แก้ไข</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>
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
                accessor:"edit"
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        );
    }
}
export default class PackageTable extends React.Component {
    render() {
        return (
            <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelHeader className='bg-blue'>
                 <Grid>
                   <Row>
                    <Col xs={12} className='fg-white'>
                      <h4>ข้อมูลบรรจุภัณฑ์</h4>
                    </Col>
                   </Row>
                 </Grid>
                </PanelHeader>
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
