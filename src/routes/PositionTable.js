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

class Positionform extends React.Component {
    render() {
        return (
            <Form>
                <Row>
                <Col xs={6} md={6}>
                    <FormGroup controlId="position">
                    <ControlLabel>ชื่อตำแหน่ง</ControlLabel>
                    <FormControl type="text" placeholder="Position"/>
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
    <Button bsStyle='success' onClick={::this.open}><Icon glyph='icon-fontello-plus'/>  เพิ่มชื่อตำแหน่ง</Button>
    <Modal show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เพิ่มชื่อตำแหน่ง</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Positionform/>
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

class Positiontable extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {
                position:"พยาบาล",
                delete:<Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
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
                Header: "ชื่อตำแหน่ง",
                accessor: "position"
              },
              {
                Header: "การแก้ไข",
                accessor:"delete"
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        );
    }
}
export default class PositionTable extends React.Component {
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
                      <Positiontable />
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