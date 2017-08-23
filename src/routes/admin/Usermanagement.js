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
class Userform extends React.Component {
    render() {
        return (
            <Form>
            <FormGroup>
            <ControlLabel>ชื่อผู้ใช้งาน</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon>
                    <Icon glyph='icon-fontello-user' />
                  </InputGroup.Addon>
                  <FormControl type="text" placeholder='Username' />
                </InputGroup>
              </FormGroup>
              <FormGroup controlId='password'>
                      <ControlLabel>รหัสผ่าน</ControlLabel>
                      <InputGroup>
                      <InputGroup.Addon>
                          <Icon glyph='icon-fontello-key' />
                        </InputGroup.Addon>
                        <FormControl type='password' placeholder='Password' />
                      </InputGroup>
              </FormGroup>
              <FormGroup controlId='password'>
                      <ControlLabel>รหัสผ่าน</ControlLabel>
                      <InputGroup>
                      <InputGroup.Addon>
                          <Icon glyph='icon-fontello-key' />
                        </InputGroup.Addon>
                        <FormControl type='password' placeholder='Password' />
                      </InputGroup>
              </FormGroup>
              <FormGroup controlId="formusername">
                  <ControlLabel>อีเมล</ControlLabel>
                  <InputGroup>
                        <InputGroup.Addon>
                          <Icon glyph='icon-fontello-mail' />
                        </InputGroup.Addon>
                        <FormControl autoFocus type='email' placeholder='Email address' />
                  </InputGroup>
              </FormGroup>
              <FormGroup controlId="formInlineEmail">
                  <ControlLabel>ชื่อ นามสกุล</ControlLabel>
                  <FormControl type="text" placeholder="Name" />
              </FormGroup>
              <FormGroup controlId="formInlineEmail">
                  <ControlLabel>เบอร์</ControlLabel>
                  <FormControl type="text" placeholder="Phone" />
              </FormGroup>
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
    <Button bsStyle='primary' onClick={::this.open}>เพิ่มผู้ใช้งาน</Button>
    <Modal show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เพิ่มผู้ใช้งาน</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Userform/>
      </Modal.Body>
      <Modal.Footer>
      <Button bsStyle='success 'onClick={::this.close}>เพิ่มผู้ใช้</Button>
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
      var data =[{userName:"admin",fullName:"asdf",Email:"asdf",Phone:"234324",Role:"sdfg",Status:"sdfg",Remark:<Actionuser/>}]
        return (
          <ReactTable
            data={data}
            noDataText="ไม่พบข้อมูล"
            filterable
            columns={[
              {
                Header: "ชื่อผู้ใช้งาน",
                accessor: "userName"
              },
              {
                Header: "ชื่อ นามสกุล",
                accessor: "fullName"
              },
              {
                Header: "Email",
                accessor: "Email"
              },
              {
                Header: "เบอร์ติดต่อ",
                accessor: "Phone"
              },
              {
                Header: "ตำแหน่ง",
                accessor: "Role"
              },
              {
                Header: "สถานะ",
                accessor: "Status"
              },
              {
                Header: "คำสั่ง",
                accessor: "Remark",
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
