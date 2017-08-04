import React from 'react';
import ReactDOM from 'react-dom';

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
    componentDidMount() {
        $(ReactDOM.findDOMNode(this.example))
            .addClass('nowrap')
            .dataTable({
                responsive: true,
                columnDefs: [
                    { targets: [-1, -3], className: 'dt-body-right' }
                ]
            });
    }

    render() {
        return (
            <Table ref={(c) => this.example = c} className='display' cellSpacing='0' width='100%'>
        <thead>
          <tr>
            <th>No</th>
            <th>ชื่อผู้ใช้งาน</th>
            <th>ชื่อ นามสกุล</th>
            <th>Email</th>
            <th>เบอร์ติดต่อ</th>
            <th>ตำแหน่ง</th>
            <th>สถานะ</th>
            <th>คำสั่ง</th>
          </tr>
        </thead>
        <tbody>
           <tr>
             <th>1</th>
             <th>admin</th>
             <th>admin cat</th>
             <th>admin@mmis.com</th>
             <th>08000000000</th>
             <th>admin</th>
             <th>ใช้งานได้</th>
             <th><Actionuser/></th>
           </tr>
           <tr>
             <th>1</th>
             <th>admin</th>
             <th>admin cat</th>
             <th>admin@mmis.com</th>
             <th>08000000000</th>
             <th>admin</th>
             <th>ใช้งานได้</th>
             <th><Actionuser/></th>
           </tr>
           <tr>
             <th>1</th>
             <th>admin</th>
             <th>admin cat</th>
             <th>admin@mmis.com</th>
             <th>08000000000</th>
             <th>admin</th>
             <th>ใช้งานได้</th>
             <th><Actionuser/></th>
           </tr>
           <tr>
             <th>1</th>
             <th>admin</th>
             <th>admin cat</th>
             <th>admin@mmis.com</th>
             <th>08000000000</th>
             <th>admin</th>
             <th>ใช้งานได้</th>
             <th><Actionuser/></th>
           </tr>
           <tr>
             <th>1</th>
             <th>admin</th>
             <th>admin cat</th>
             <th>admin@mmis.com</th>
             <th>08000000000</th>
             <th>admin</th>
             <th>ใช้งานได้</th>
             <th><Actionuser/></th>
           </tr>
           <tr>
             <th>1</th>
             <th>admin</th>
             <th>admin cat</th>
             <th>admin@mmis.com</th>
             <th>08000000000</th>
             <th>admin</th>
             <th>ใช้งานได้</th>
             <th><Actionuser/></th>
           </tr>
           <tr>
             <th>1</th>
             <th>admin</th>
             <th>admin cat</th>
             <th>admin@mmis.com</th>
             <th>08000000000</th>
             <th>admin</th>
             <th>ใช้งานได้</th>
             <th><Actionuser/></th>
           </tr>
        </tbody>
      </Table>
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