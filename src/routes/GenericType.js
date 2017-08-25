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

class GenericTypeform extends React.Component {
    render() {
        return (
            <Form>
                <Row>
                <Col xs={6} md={6}>
                    <FormGroup controlId="GenericType">
                    <ControlLabel>รูปแบบยา</ControlLabel>
                    <FormControl type="text" placeholder="Generic Type"/>
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
    <Button bsStyle='success' onClick={::this.open}><Icon glyph='icon-fontello-plus'/>  เพิ่มรูปแบบยา</Button>
    <Modal show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เพิ่ม/แก้ไข รูปแบบยา</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GenericTypeform/>
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
                type:"INJ",
                edit:<ButtonGroup>
                        <Button bsStyle='warning'><Icon glyph='icon-fontello-edit'/>  แก้ไข</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>
              },
              {
                type:"TAB",
                edit:<ButtonGroup>
                        <Button bsStyle='warning'><Icon glyph='icon-fontello-edit'/>  แก้ไข</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>
              },
              {
                type:"POWDER",
                edit:<ButtonGroup>
                        <Button bsStyle='warning'><Icon glyph='icon-fontello-edit'/>  แก้ไข</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>
              },
              {
                type:"Cap",
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
                Header: "รูปแบบยา",
                accessor: "type"
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
export default class Generic_Type extends React.Component {
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
                      <h4>ข้อมูลรูปแบบยา</h4>
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
