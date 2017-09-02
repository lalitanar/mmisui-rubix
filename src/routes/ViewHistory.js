import React , { Component } from 'react';
import {
  Icon,
  Glyphicon,
  InputGroup,
  Button,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Radio,
  Row,
  Col,
  PanelHeader,
  Grid,
  PanelBody,
  Panel,
  PanelContainer,
  PanelFooter,
} from '@sketchpixy/rubix';

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
     <Button className='pull-right' href='/history' lg>
     <Icon glyph='icon-fontello-back' /> ย้อนกลับ
    </Button>
    </div>
        );
    }
}
class ActivityPanel extends React.Component {
    constructor() {
        super();
        this.state = {
                date:"01/09/2017",
                time:"18:57:25",
                act_id:"5881079",
                activity:"Mapping รหัส TMT กับ DC-24 ของยา A",
              };
    }
    render() {
        return (
            <Col xs={12}>
            <PanelContainer>
            <Panel>
            <PanelHeader className='bg-blue'>
                <Grid>
                <Row>
                <Col xs={12} className='fg-white'>
                    <h4>กิจกรรม</h4>
                </Col>
                </Row>
                </Grid>
            </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                    <Form>
                        <Row>
                        <Col xs={3} md={3}>
	                    <FormGroup controlId="act_id">
	                    <ControlLabel>รหัสกิจกรรม</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.act_id} disabled active/>
	                    </FormGroup>
                        </Col>
                        <Col xs={9} md={9}> 
	                    <FormGroup controlId="activity">
	                    <ControlLabel>กิจกรรม</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.activity} disabled active/>
	                    </FormGroup>
                        </Col>
                        </Row>

                        <Row>
                        <Col xs={3} md={3}>
	                    <FormGroup controlId="date">
	                    <ControlLabel>วันที่</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.date} disabled active/>
	                    </FormGroup>
                        </Col>
                        <Col xs={3} md={3}> 
	                    <FormGroup controlId="time">
	                    <ControlLabel>เวลา</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.time} disabled active/>
	                    </FormGroup>
                        </Col>
                        </Row>
                    </Form>
                    </Col>
                  </Row>
                </Grid>
                <br/>
              </PanelBody>
            </Panel>
          </PanelContainer>
          </Col>
        );
    }
}
class AccountPanel extends React.Component {
    constructor() {
        super();
        this.state = {
                username:"admin_test",
                password:"xxxxxxxx"
              };
    }
    render() {
        return (
            <Col xs={4}>
            <PanelContainer>
            <Panel>
            <PanelHeader className='bg-blue'>
                <Grid>
                <Row>
                <Col xs={12} className='fg-white'>
                    <h4>บัญชีผู้ใข้</h4>
                </Col>
                </Row>
                </Grid>
            </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                    <Form>
                        <Row>
                        <Col xs={6} md={6}>
	                    <FormGroup controlId="username">
	                    <ControlLabel>ชื่อผู้ใช้</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.username} disabled active/>
	                    </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col xs={6} md={6}> 
	                    <FormGroup controlId="password">
	                    <ControlLabel>รหัสผ่าน</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.password} disabled active/>
	                    </FormGroup>
                        </Col>
                        </Row>
                    </Form>
                    </Col>
                  </Row>
                </Grid>
                <br/>
              </PanelBody>
            </Panel>
          </PanelContainer>
          </Col>
        );
    }
}
class UserPanel extends React.Component {
    constructor() {
        super();
        this.state = {
                name:"สวัสดี",
                surname:"หิวจัง",
                organization:"สาธารณสุข"
              };
    }
    render() {
        return (
            <Col xs={8}>
            <PanelContainer>
            <Panel>
            <PanelHeader className='bg-blue'>
                <Grid>
                <Row>
                <Col xs={12} className='fg-white'>
                    <h4>ผู้ใข้</h4>
                </Col>
                </Row>
                </Grid>
            </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                    <Form>
                        <Row>
                        <Col xs={4} md={4}>
	                    <FormGroup controlId="name">
	                    <ControlLabel>ชื่อ</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.name} disabled active/>
	                    </FormGroup>
                        </Col>
                        <Col xs={4} md={4}>
                        <FormGroup controlId="act_id">
	                    <ControlLabel>นามสกุล</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.surname} disabled active/>
	                    </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col xs={4} md={4}> 
	                    <FormGroup controlId="activity">
	                    <ControlLabel>หน่วยงาน</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.organization} disabled active/>
	                    </FormGroup>
                        </Col>
                        </Row>
                    </Form>
                    </Col>
                  </Row>
                </Grid>
                <br/>
              </PanelBody>
            </Panel>
          </PanelContainer>
          </Col>
        );
    }
}
class ControlPanel extends React.Component {
    constructor() {
        super();
        this.state = {
                system:"NMPCD",
                role:"admin",
                start_date:"25/05/2015",
                end_date:"NULL"
              };
    }
    render() {
        return (
            <Col xs={12}>
            <PanelContainer>
            <Panel>
            <PanelHeader className='bg-blue'>
                <Grid>
                <Row>
                <Col xs={12} className='fg-white'>
                    <h4>การควบคุมระบบ</h4>
                </Col>
                </Row>
                </Grid>
            </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                    <Form>
                        <Row>
                        <Col xs={4} md={4}> 
	                    <FormGroup controlId="system">
	                    <ControlLabel>ระบบ</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.system} disabled active/>
	                    </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col xs={4} md={4}> 
	                    <FormGroup controlId="role">
	                    <ControlLabel>หน้าที่</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.role} disabled active/>
	                    </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col xs={3} md={3}>
	                    <FormGroup controlId="start_date">
	                    <ControlLabel>วันที่เริ่มทำงาน</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.start_date} disabled active/>
	                    </FormGroup>
                        </Col>
                        <Col xs={3} md={3}>
	                    <FormGroup controlId="end_date">
	                    <ControlLabel>วันที่การทำงานสิ้นสุด</ControlLabel>
	                    <FormControl type="text" placeholder={this.state.end_date} disabled active/>
	                    </FormGroup>
                        </Col>
                        </Row>
                    </Form>
                    </Col>
                  </Row>
                </Grid>
                <br/>
              </PanelBody>
            </Panel>
          </PanelContainer>
          </Col>
        );
    }
}
export default class ViewHistory extends React.Component {
    render() {
        return (
         <Col>
         <ActivityPanel/>
         <AccountPanel/>
         <UserPanel/>
         <ControlPanel/>
         <Buttonbar/>
         </Col>
        );
    }
}