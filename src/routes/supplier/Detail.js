import React from "react";
import { render } from "react-dom";
import classNames from 'classnames';
import _ from 'lodash'
import { makeData, Logo, Tips } from "./Utils.js";
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
                    <Button bsStyle="success" href="#" onClick={handleClick}>
                        <Icon glyph='icon-fontello-floppy' /> บันทึก
                    </Button>
                    <Button bsStyle="orange" href="/supplier/new">
                        <Icon glyph='icon-fontello-edit' /> แก้ไข
                    </Button>
                    <Button className='pull-right' bsStyle='primary' >
                        <Icon glyph='icon-fontello-download' /> นำออก EXAL
                    </Button>
                </ButtonToolbar>
            </div >
        );
    }
}


class PanelBodyHeaderPlainTabFooter extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            activeTab: ''
        };
    }

    handleActiveState(eventKey) {
        this.setState({
            activeTab: eventKey
        });
    }

    getItemProps(eventKey) {
        return {
            eventKey,
            active: this.state.activeTab === eventKey
        };
    }

    render() {
        return (
            <PanelTabContainer id='panel-body-header-tab-footer' defaultActiveKey="home">
                <Panel>
                    <PanelHeader className='bg-purple fg-white' style={{ display: 'block' }}>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <h3>ข้อมูลผู้ประกอบการ</h3>
                                </Col>
                            </Row>
                        </Grid>
                        <Nav bsStyle="tabs" className='plain' onSelect={::this.handleActiveState}>
			  <NavItem eventKey="home">
                            รายละเอียดผู้ประกอบการ
                        </NavItem>
                        <NavItem eventKey="sale">
                            รายการยาและเวชภัณฑ์ที่จำหน่าย
                        </NavItem>
                        <NavItem eventKey="generate">
                            รายการยาและเวชภัณฑ์ที่ผลิต
                        </NavItem>
			</Nav>
		  </PanelHeader>
                <PanelBody>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <Tab.Content>
                                    <Col xs={12}>
                                        <h4>
                                            <Icon bundle='fontello' glyph='globe' />
                                              AdminLTE, Inc.  <small> #007612 </small>
                                        </h4>
                                        <hr />
                                    </Col>
                                    <Tab.Pane eventKey="home">
                                        <TabDetail />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sale">
                                        <TabTable />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="generate">
                                        <TabTable />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Grid>
                </PanelBody>
                <PanelFooter className='bg-lightpurple'>
                    <Grid>
                        <Row>
                            <Col xs={12} className='fg-white'>
                                <br/>
                               <Bar />
                               <br/>
                            </Col>
                        </Row>
                    </Grid>
                </PanelFooter>
		</Panel>
	  </PanelTabContainer >
	);
    }
}




class TabDetail extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={6}>
                        <address>
                            รหัสผู้ประกอบการ: 007612<br />
                            เลขประจำตัวผู้เสียภาษี: 007612007612<br />
                            ประเภทผู้ประกอบการ: นิติบุคคล<br />
                            คำอธิบาย: ...<br />
                        </address>
                    </Col>
                    <Col xs={6}>
                        <strong>ที่อยู่</strong>
                        <address>
                            Ave, Suite 600<br />
                            San Fra795 Folsomncisco, CA 94107<br />
                            Phone: (555) 539-1037<br />
                            URL: john.doe@example.com<br />
                        </address>
                    </Col>
                    <Col xs={6}>
                        <strong>ข้อมูลเพิ่มเติม</strong>
                        <address>
                            ทะเบียนนิติบุคคล: 8765433456<br />
                            เลขประตัวที่ออกโดย อย.: 123456823678<br />
                            ปีที่จดทะเบียน: 2555<br />
                            ปีที่ก่อตั้ง: 2554<br />
                            ประเทศที่จดทะเบียน: ราชอาณาจักรไทย<br />
                            พิกัด: 13°33'14.2"N 99°49'13.1"E<br />
                        </address>
                    </Col>
                </Row>
            </div>
        );
    }
}

class TabTable extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <ReactTable
                    data={data}
                    noDataText="ไม่พบข้อมูล"
                    filterable
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value ||
                        row[filter.id].includes(filter.value)}
                    columns={[
                        {
                            Header: "รายการยาและเวชภัณฑ์",
                            columns: [
                                {
                                    Header: "รหัสยาและเวชภัณฑ์",
                                    accessor: "LocalID"
                                },
                                {
                                    Header: "ชื่อยาและเวชภัณฑ์    ",
                                    accessor: "LocalName"
                                }
                            ]
                        },
                        {
                            Header: "ข้อมูลเพิ่มเติม",
                            columns: [
                                {
                                    Header: "ประเภท",
                                    accessor: "LocalType"
                                },
                                {
                                    Header: "เพิ่มเติม",
                                    accessor: "Remark",
                                },
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}


export default class Tableview extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <PanelBodyHeaderPlainTabFooter />
                </Col>
            </Row>
        );
    }
}