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

class Organizationform extends React.Component {
    render() {
        return (
            <Form>
                <Row>
                <Col xs={6} md={6}>
                    <FormGroup controlId="Organization">
                    <ControlLabel>หน่วยงาน</ControlLabel>
                    <FormControl type="text" placeholder="Organization"/>
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
    <Button bsStyle='success' onClick={::this.open}><Icon glyph='icon-fontello-plus'/>  เพิ่มหน่วยงาน</Button>
    <Modal show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เพิ่มหน่วยงาน</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Organizationform/>
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

class Organizationtable extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {
                organization:"Mahidol",
                moreinfo:<Button bsStyle='success'><Icon glyph='icon-fontello-search'/>   ดูรายละเอียด</Button>
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
                Header: "หน่วยงาน",
                accessor: "organization"
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
                      <Organizationtable />
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