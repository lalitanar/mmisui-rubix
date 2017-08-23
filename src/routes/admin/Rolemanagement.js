import React from 'react';
import ReactDOM from 'react-dom';
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
class Addrole extends React.Component {
    render() {
        return (
            <Form>
            <FormGroup>
            <ControlLabel>ชื่อตำแหน่ง</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon>
                    <Icon glyph='icon-fontello-user' />
                  </InputGroup.Addon>
                  <FormControl type="text" placeholder='ชื่อตำแหน่ง' />
                </InputGroup>
              </FormGroup>
              <Button bsStyle='success'><Icon glyph='icon-ikons-magnifying-glass-add'/> เพิ่มความสามารถ</Button>
              <ReactTable
                data={[{ability:"เพิ่มผู้ใช้งาน",Remark:<Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>}]}
                noDataText="ไม่มีความสามารถ"
                showPaginationBottom = {false}
                columns={[
                  {
                    Header: "ความสามารถ",
                    accessor: "ability"
                  },
                  {
                    Header: "",
                    accessor: "Remark",
                    width: 150,
                  }
                ]}
                defaultPageSize={5}
                className="-striped -highlight"
              />
        </Form>
        );
    }
}
class Buttombar extends React.Component {
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
    <Button bsStyle='primary' onClick={::this.open}>เพิ่มตำแหน่ง</Button>
    <Modal show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เพิ่มตำแหน่ง</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Addrole/>
      </Modal.Body>
      <Modal.Footer>
      <Button bsStyle='success 'onClick={::this.close}>เพิ่มตำแหน่ง</Button>
      <Button onClick={::this.close}>ยกเลิก</Button>
      </Modal.Footer>
    </Modal>
    </div>
        );
    }
}
class Actionuser extends React.Component {
    render() {
        return (
            <ButtonToolbar>
    <ButtonGroup>
    <Button bsStyle='red'>แก้ไข</Button>
    <Button bsStyle='red'>ลบ</Button>
    </ButtonGroup>
  </ButtonToolbar>
        );
    }
}
class DatatableComponent extends React.Component {
    render() {
      var data =[{Role:"admin",ability:"asdf",Remark:<Actionuser/>}]
        return (
          <ReactTable
            data={data}
            noDataText="ไม่พบข้อมูล"
            filterable
            columns={[
              {
                Header: "ตำแหน่ง",
                accessor: "Role",
                width: 150
              },
              {
                Header: "ความสามารถ",
                accessor: "ability"
              },
              {
                Header: "คำสั่ง",
                accessor: "Remark",
                width: 150
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
            />
        );
    }
}
export default class Rolemanagement extends React.Component {
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
                      <Buttombar/>
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
