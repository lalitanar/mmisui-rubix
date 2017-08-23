import React from "react";
import { render } from "react-dom";
import _ from 'lodash'
import ReactTable from "react-table";
import DateTimeField from "react-bootstrap-datetimepicker";
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
    Tabs,
    Tab,
    Nav,
    NavItem,
    NavDropdown,
    PanelTabContainer,
    PanelFooter,
    Radio,
} from '@sketchpixy/rubix';

class Bar extends React.Component {
    render() {
        function handleClick(e) {
            e.preventDefault();
            window.history.back();
            console.log('The link was clicked.');
        }
        return (
            <div>
                <ButtonToolbar>
                    <Button className="pull-right" bsStyle="success" href="#" onClick={handleClick}>
                        <Icon glyph='icon-fontello-floppy' /> บันทึก
                    </Button>
                    <Button bsStyle="danger" href="#" onClick={handleClick}>
                        <Icon glyph='icon-fontello-cancel' /> ยกเลิก
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}

class FormMore extends React.Component {
    render() {
        return (
            <Panel>
                <div>
                    <Form>
                        <Row>
                            <Col xs={6}>
                                <FormGroup>
                                    <ControlLabel>ทะเบียนนิติบุคคล</ControlLabel>
                                    <FormControl type="text" placeholder=" " />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <ControlLabel>เลขประจำตัวที่ออกโดย อย.</ControlLabel>
                                    <FormControl type="text" placeholder=" " />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <FormGroup>
                                    <ControlLabel>ปีที่จดทะเบียน</ControlLabel>
                                    <FormControl type="text" placeholder=" " />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <ControlLabel>ปีที่ก่อตั้ง</ControlLabel>
                                    <FormControl type="text" placeholder=" " />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <ControlLabel>ประเทศที่จดทะเบียน</ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="select">ราชอาณาจักรไทย</option>
                                <option value="other">สาธารณรัฐประชาชนจีน</option>
                            </FormControl>
                        </FormGroup>
                        <Row>
                            <Col xs={6}>
                                <FormGroup>
                                    <ControlLabel>ละติจูด</ControlLabel>
                                    <FormControl type="text" placeholder=" " />
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <ControlLabel>ลองติจูด</ControlLabel>
                                    <FormControl type="text" placeholder=" " />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>

                </div >
            </Panel>
        );
    }
}

class FormCon extends React.Component {
    render() {
        return (
            <Panel>
                <Form>
                    <FormGroup>
                        <ControlLabel>ที่อยู่</ControlLabel>
                        <FormControl type="text" placeholder=" " />
                    </FormGroup>
                    <Row>
                        <Col xs={6}>
                            <FormGroup>
                                <ControlLabel>ตำบล/แขวง</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">ศาลายา</option>
                                    <option value="other">คลองกุ่ม</option>
                                    <option value="other">นวมินทร์</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={6}>
                            <FormGroup>
                                <ControlLabel>อำเภอ/เขต</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">พุทธมณฑล</option>
                                    <option value="other">บึงกุ่ม</option>
                                    <option value="other">บางกะปิ</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <FormGroup>
                                <ControlLabel>จังหวัด</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">นครปฐม</option>
                                    <option value="other">กรุงเทพมหานคร</option>
                                    <option value="other">เชียงราย</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={3}>
                            <FormGroup>
                                <ControlLabel>รหัสไรษณีย์</ControlLabel>
                                <FormControl type="text" placeholder=" " />
                            </FormGroup>
                        </Col>
                        <Col xs={3}>
                            <FormGroup>
                                <ControlLabel>ระยะเวลาจัดส่ง</ControlLabel>
                                <FormControl type="text" placeholder="วัน" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <FormGroup >
                                <ControlLabel>ชื่อผู้ติดต่อ</ControlLabel>
                                <FormControl type="text" placeholder=" " />
                            </FormGroup>
                        </Col>
                        <Col xs={6}>
                            <FormGroup>
                                <ControlLabel>โทรศัพท์</ControlLabel>
                                <InputGroup>
                                    <InputGroup.Addon>
                                        <Icon glyph='icon-fontello-phone' />
                                    </InputGroup.Addon>
                                    <FormControl type="text" />
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col xs={6}>
                        <FormGroup controlId="formControlsEmail">
                            <ControlLabel>E-mail</ControlLabel>
                            <FormControl type="email" placeholder="E-mail" />
                        </FormGroup>
                        </Col>
                        <Col xs={6}>
                            <FormGroup>
                                <ControlLabel>URL</ControlLabel>
                                <FormControl type="text" placeholder=" " />
                            </FormGroup>
                        </Col>

                    </Row>
                </Form>
            </Panel>
        );
    }
}



class FormNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '0' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        var val = <Col xs={6} ></Col>;
        if (this.state.value == '2') val = <Col xs={6} >
            <FormGroup id="date-discon">
                <ControlLabel>วันที่เลิกใช้งาน</ControlLabel>
                <DateTimeField />
            </FormGroup>
        </Col>;
        return (
            <Panel>
                <Form>
                    <FormGroup controlId="formControlsEmail">
                        <ControlLabel>ชื่อผู้ประกอบการ</ControlLabel>
                        <FormControl type="text" placeholder="ชื่อผู้ประกอบการ" />
                    </FormGroup>
                    <FormGroup controlId="formControlsEmail">
                        <ControlLabel>เลขประจำตัวผู้เสียภาษี</ControlLabel>
                        <FormControl type="text" placeholder="xxxxxxxxxxxxx" />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>ประเภทผู้ประกอบการ</ControlLabel>
                        <Radio inline name='inline' onClick={this.props.hide}  >
                            บุคคล
            	    </Radio >
                        {' '}
                        <Radio inline name='inline' onClick={this.props.showmore}>
                            นิติบุคคล
	                </Radio >
                    </FormGroup>
                    <Row>
                        <Col xs={6} >
                            <FormGroup>
                                <ControlLabel>สถานะของผู้ประกอบการ</ControlLabel>

                                <FormControl componentClass="select" onChange={this.handleChange}  >
                                    <option value="0">รอดำเนินการ</option>
                                    <option value="1">อนุมัติ</option>
                                    <option value="2">เลิกใช้งาน</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        {val}
                    </Row>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>คำอธิบาย</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="อธิบายข้อมูลผู้ประกอบการเบื้องต้น" />
                    </FormGroup>

                </Form>
            </Panel>
        );
    }
}



export default class PanelBodyHeaderAndFooter extends React.Component {
    showmore() {
        this.setState({ statusShow: true });
    }
    hide() {
        this.setState({ statusShow: false });
    }
    constructor(props) {
        super(props);

        this.state = {
            statusShow: false
        };
        this.showmore = this.showmore.bind(this);
        this.hide = this.hide.bind(this);
    }

    render() {
        var show = <div></div>;
        if (this.state.statusShow == true) {
            show = <FormMore />;
        }
        return (
            <Row>
                <Col xs={12}>
                    <PanelContainer>
                        <Panel>
                            <PanelHeader className='bg-blue'>
                                <Grid>
                                    <Row>
                                        <Col xs={12} className='fg-white'>
                                            <h3>ลงทะเบียนผู้ประกอบการ</h3>
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelHeader>
                            <PanelBody>
                                <Grid>
                                    <Row>
                                        <Col xs={6}>
                                            <FormNew showmore={this.showmore} hide={this.hide} />
                                        </Col>
                                        <Col xs={6}>
                                            <FormCon />
                                        </Col>
                                        <Col xs={6}>
                                            {show}
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelBody>
                            <PanelFooter className='bg-lightblue'>
                                <Grid>
                                    <Row>
                                        <Col xs={12} className='fg-white'>
                                            <br />
                                            <Bar />
                                            <br />
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelFooter>
                        </Panel>
                    </PanelContainer>
                </Col>
            </Row>
        );
    }
}
