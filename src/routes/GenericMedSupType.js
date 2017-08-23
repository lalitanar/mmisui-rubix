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

class GenMedSupTypeform extends React.Component {
    render() {
        return (
            <Form>
                <Row>
                <Col xs={6} md={6}>
                    <FormGroup controlId="GenMedSupType">
                    <ControlLabel>ประเภทเวชภัณฑ์</ControlLabel>
                    <FormControl type="text" placeholder="Generic Medical Supplies Type"/>
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
    <Button bsStyle='success' onClick={::this.open}><Icon glyph='icon-fontello-plus'/>  เพิ่มประเภทเวชภัณฑ์</Button>
    <Modal show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เพิ่ม/แก้ไข ประเภทเวชภัณฑ์</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GenMedSupTypeform/>
      </Modal.Body>
      <Modal.Footer>
      <Button bsStyle='success' onClick={::this.close}>บันทึก</Button>
      <Button onClick={::this.close}>ยกเลิก</Button>
      </Modal.Footer>
    </Modal>
    </div>
        );
    }
}

class DatatableComponent extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {
                gms_type:"test",/*stands for gen men sup*/
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
                Header: "ประเภทเวชภัณฑ์",
                accessor: "gms_type"
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
export default class GenMedSup_Type extends React.Component {
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