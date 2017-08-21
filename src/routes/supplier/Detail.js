import React from "react";
import { render } from "react-dom";
import classNames from 'classnames';
import _ from 'lodash'
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
    Radio,
    HelpBlock
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
                    <ButtonGroup className='pull-right'>
                        <Button bsStyle="warning" href="/supplier/new">
                            <Icon glyph='icon-fontello-edit' /> แก้ไข
                    </Button>
                        <Button bsStyle="success" href="/supplier/index">
                            <Icon glyph='icon-fontello-floppy' /> บันทึก
                    </Button>

                    </ButtonGroup>
                    <ButtonGroup >

                        <Button bsStyle='defalt' onClick={handleClick}>
                            <Icon glyph='icon-fontello-print' /> พิมพ์
                    </Button>
                        <Button bsStyle='primary' onClick={handleClick}>
                            <Icon glyph='icon-fontello-download' /> นำออก EXCEL
                        </Button>
                    </ButtonGroup>
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
                    <PanelHeader className='bg-lightgreen fg-white' style={{ display: 'block' }}>
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
                            รายการยาและเวชภัณฑ์
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
                                            AdminLTE, Inc.  
                                        </h4>
                                        <hr />
                                    </Col>
                                    <Tab.Pane eventKey="home">
                                        <TabDetail />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sale">
                                        <TabTable />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Grid>
                </PanelBody>
                <PanelFooter className='bg-lightgreen'>
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
    render() {
        const data = [
            {
                ProductID: "9877286249", ProductName: "skillful-sleep-boat-search", Phone: "716-453-3846", NIN: "8995313129", Address: "immense-tooth-bed-help", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "จำหน่าย"
            },
            {
                ProductID: "9875263402", ProductName: "direful-foot-fly-arise", Phone: "402-307-3157", NIN: "4533514365", Address: "electric-collar-record-suspect", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "จำหน่าย"
            },
            {
                ProductID: "9870887353", ProductName: "premium-monkey-investment-marry", Phone: "820-363-6913", NIN: "5865855211", Address: "ripe-ball-jail-applied", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "จำหน่าย"
            },
            {
                ProductID: "9875712644", ProductName: "guiltless-receipt-classroom-examine", Phone: "575-559-1326", NIN: "6591953442", Address: "substantial-rock-marketing-wed", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "เวชภัณฑ์", Type: "ผลิต"
            },
            {
                ProductID: "9879871986", ProductName: "crowded-arrival-construction-induce", Phone: "1-630-469-159", NIN: "7115462293", Address: "aspiring-anxiety-father-reign", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "จำหน่าย"
            },
            {
                ProductID: "9873735316", ProductName: "slow-trees-cellar-market", Phone: "425-046-6081", NIN: "9671260059", Address: "chilly-form-chair-say", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "จำหน่าย"
            },
            {
                ProductID: "9879582384", ProductName: "wellmade-grain-sun-trust", Phone: "275-580-6340", NIN: "9119053811", Address: "sable-revolution-side-restoorange", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "จำหน่าย"
            },
            {
                ProductID: "9875573222", ProductName: "grubby-effort-number-pinch", Phone: "713-329-8769", NIN: "6613235390", Address: "disgusting-record-tennis-fool", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "เวชภัณฑ์", Type: "ผลิต"
            },
            {
                ProductID: "9876126177", ProductName: "obnoxious-noise-interaction-raise", Phone: "429-018-2169", NIN: "6857563404", Address: "smelly-expert-mark-sting", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "จำหน่าย"
            },
            {
                ProductID: "9877286249", ProductName: "skillful-sleep-boat-search", Phone: "716-453-3846", NIN: "8995313129", Address: "immense-tooth-bed-help", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "ผลิต"
            },
            {
                ProductID: "9875263402", ProductName: "direful-foot-fly-arise", Phone: "402-307-3157", NIN: "4533514365", Address: "electric-collar-record-suspect", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "ผลิต"
            },
            {
                ProductID: "9870887353", ProductName: "premium-monkey-investment-marry", Phone: "820-363-6913", NIN: "5865855211", Address: "ripe-ball-jail-applied", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "ผลิต"
            },
            {
                ProductID: "9875455701", ProductName: "agreeable-restaurant-shop-produce", Phone: "293-556-8286", NIN: "6783675255", Address: "moaning-rock-border-warm", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "เวชภัณฑ์", Type: "ผลิต"
            },
            {
                ProductID: "9870133805", ProductName: "social-lumber-conclusion-acted", Phone: "726-981-2595", NIN: "3216317291", Address: "hard-enthusiasm-drawing-choke", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "จำหน่าย"
            },
            {
                ProductID: "9870136781", ProductName: "voracious-estate-interest-sort", Phone: "519-826-9051", NIN: "2393129151", Address: "upset-quiver-turkey-pop", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "จำหน่าย"
            },
            {
                ProductID: "9876610334", ProductName: "alluring-tiger-percentage-integrate", Phone: "746-709-2234", NIN: "9153456890", Address: "alluring-ground-bear-engineer", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "จำหน่าย"
            },
            {
                ProductID: "9870733375", ProductName: "insidious-chain-pail-direct", Phone: "835-416-3630", NIN: "9587888921", Address: "spurious-preparation-run-wind", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "เวชภัณฑ์", Type: "ผลิต"
            },
            {
                ProductID: "9872862062", ProductName: "guttural-downtown-cars-land", Phone: "382-969-7251", NIN: "1083619579", Address: "overt-plantation-level-break", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "เวชภัณฑ์", Type: "ผลิต"
            },
            {
                ProductID: "9875197746", ProductName: "broad-lift-stop-inform", Phone: "593-328-1897", NIN: "1197950369", Address: "exotic-sugar-effect-intensify", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "จำหน่าย"
            },
            {
                ProductID: "9875571781", ProductName: "electronic-straw-heat-mend", Phone: "811-255-1315", NIN: "8506619472", Address: "important-marketing-parcel-revise", Remark: <ButtonGroup>
                    <Button bsStyle='info'>  รายละเอียด</Button>
                    <Button bsStyle='danger'><Icon glyph='icon-fontello-trash' />  ลบ</Button>
                </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา", Type: "จำหน่าย"
            },
        ];
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
                            Header: "ชื่อยาและเวชภัณฑ์    ",
                            accessor: "ProductName"
                        },

                        {
                            Header: "ประเภท",
                            accessor: "LocalType"
                        },
                        {
                            Header: "จำหน่าย/ผลิต",
                            accessor: "Type",
                            id: "TypeColor",
                            Cell: ({ value }) => (value == "จำหน่าย" ? <font color="orange">จำหน่าย</font> : <font color="green">ผลิต</font>),
                            filterMethod: (filter, row) => {
                                if (filter.value === "all") {
                                    return true;
                                }
                                if (filter.value === "true") {
                                    return row[filter.id] == "จำหน่าย";
                                }
                                return row[filter.id] == "ผลิต";
                            },
                            Filter: ({ filter, onChange }) =>
                                <select
                                    onChange={event => onChange(event.target.value)}
                                    style={{ width: "100%" }}
                                    value={filter ? filter.value : "all"}
                                >
                                    <option value="all">ทั้งหมด</option>
                                    <option value="true">จำหน่าย</option>
                                    <option value="false">ผลิต</option>
                                </select>
                        },
                        {
                            Header: "เพิ่มเติม",
                            accessor: "Remark",
                        },

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