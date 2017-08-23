import React from "react";
import { render } from "react-dom";
// Import React Table
import ReactTable from "react-table";
import {
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

class Positionform extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {
                selection:<Checkbox/>,
                ppl_position:"พยาบาล"
              },
              {
                selection:<Checkbox/>,
                ppl_position:"หมอ"
              }
          ]
        };
      }

    render() {
        return (
        <Form>
            <ReactTable
            data={this.state.data}
            noDataText="ไม่พบข้อมูล"
            filterable
            defualtFilterMethod={(filter, row)=>
                String(row[filter.id])===filter.value ||
                row[filter.id].includes(filter.value)}
            columns={[
              {
                Header: "ตัวเลือก",
                accessor: "selection"
              },
              {
                Header: "ตำแหน่ง",
                accessor:"ppl_position"
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
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
      <Button bsStyle='success' onClick={::this.close}>ตกลง</Button>
      <Button onClick={::this.close}>ยกเลิก</Button>
      </Modal.Footer>
    </Modal>

     <Button bsStyle='danger' className='pull-right'>
     <Icon glyph='icon-fontello-back' /> ย้อนกลับ
    </Button>
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
              },
              {
                position:"หมอ",
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