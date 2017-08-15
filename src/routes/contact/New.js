import React from "react";
import { render } from "react-dom";
import _ from 'lodash'
import { makeData, Logo, Tips } from "./Utils.js";
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
    HelpBlock,
} from '@sketchpixy/rubix';


class Dform extends React.Component {
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
                                    Header: "ชื่อยาและเวชภัณฑ์",
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
                                    Header: "เพิ่ม",
                                    accessor: "Add"
                                },
                            ]
                        }
                    ]}
                    defaultPageSize={5}
                    className="-striped -highlight"
                />

                
                <br />
            </div>
        );
    }
}
class BarAdd extends React.Component {
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
                <Button bsStyle='success' onClick={::this.open}>
                    <Icon glyph='icon-fontello-plus' /> เพิ่ม</Button>
            <Modal show={this.state.showModal} onHide={::this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>เพิ่มรายการ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Dform />
                </Modal.Body>
                <Modal.Footer>
                    <Col xs={12}>
                    <FormGroup>
                        <ControlLabel>จำนวน</ControlLabel>
                        <FormControl type="text" placeholder=" " />
                    </FormGroup>
                </Col>
                    <Button bsStyle='success' onClick={::this.close}>เพิ่ม</Button>
                <Button onClick={::this.close}>ยกเลิก</Button>
      </Modal.Footer >
    </Modal >
    </div >
        );
    }
}

class BarUP extends React.Component {
    render() {
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
        }
        return (
            <div>
                <Button bsStyle='success' href="#">
                    <Icon glyph='icon-fontello-plus' /> เพิ่ม
        </Button>


            </div >
        );
    }
}

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
                    <Button bsStyle="danger" href="#" onClick={handleClick}>
                        <Icon glyph='icon-fontello-cancel' /> ยกเลิก
                    </Button>
                </ButtonToolbar>
            </div >
        );
    }
}

class TableD extends React.Component {
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
                                    Header: "ชื่อยาและเวชภัณฑ์",
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
                                    Header: "เพิ่ม",
                                    accessor: "Add"
                                },
                            ]
                        }
                    ]}
                    defaultPageSize={1}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}


class TableDNoData extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData(0)
        };
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <BarAdd />
                <hr />
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
                                    Header: "รหัสยาและเวชภัณฑ์"
                                },
                                {
                                    Header: "ชื่อยาและเวชภัณฑ์    "
                                }
                            ]
                        },
                        {
                            Header: "ข้อมูลเพิ่มเติม",
                            columns: [
                                {
                                    Header: "ราคาต่อหน่วย"
                                },
                                {
                                    Header: "จำนวน"
                                },
                                {
                                    Header: "เพิ่มเติม"
                                },
                            ]
                        }
                    ]}
                    defaultPageSize={1}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}

class FormContact extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={4} >
                    <FormGroup>
                        <ControlLabel>เลขที่สัญญา</ControlLabel>
                        <FormControl type="text" placeholder=" " />
                    </FormGroup>
                </Col>
                <Col xs={4} >
                    <FormGroup>
                        <ControlLabel>วันที่เริ่มสัญญา</ControlLabel>
                        <FormControl type="text" placeholder=" " />
                    </FormGroup>
                </Col>
                <Col xs={4} >
                    <FormGroup>
                        <ControlLabel>วันที่สิ้นสุดสัญญา</ControlLabel>
                        <FormControl type="text" placeholder=" " />
                    </FormGroup>
                </Col>
            </Row>
        );
    }
}

class FormBuy extends React.Component {
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
                                            <h4>ข้อมูลผู้ขอซื้อ</h4>
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelHeader>
                            <PanelBody>
                                <Grid>
                                    <Row>
                                        <BarUP />
                                        <hr />
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

class FormSale extends React.Component {
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
                                            <h4>ข้อมูลผู้ขาย</h4>
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelHeader>
                            <PanelBody>
                                <Grid>
                                    <Row>
                                        <BarUP />
                                        <hr />
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

class FormCommittee extends React.Component {
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
                                            <h4>คณะกรรมการตรวจรับ</h4>
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelHeader>
                            <PanelBody>
                                <Grid>
                                    <Row>
                                        <BarUP />
                                        <hr />
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

class FormMore extends React.Component {
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
                                            <h4>อื่นๆ</h4>
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelHeader>
                            <PanelBody>
                                <Grid>
                                    <Row>
                                        <FormGroup controlId="formControlsFile">
                                            <ControlLabel>เอกสารสัญญาเพิ่มเติม</ControlLabel>
                                            <FormControl type="file" />
                                            <HelpBlock>เลือกไฟล์เอกสารสัญญาเพิ่มเติม</HelpBlock>
                                        </FormGroup>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>หมายเหตุ</ControlLabel>
                                            <FormControl componentClass="textarea" placeholder="หมายเหตุ" />
                                        </FormGroup>
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

class FormNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '1' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(this.state.value);
        this.setState({ value: event.target.value });
        console.log(this.state.value);
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        var val = this.state.value;
        return (
            <Panel>
                <Form>
                    <Row>
                        <Col xs={6} >
                            <FormGroup>
                                <ControlLabel >สถานะ</ControlLabel>

                                <FormControl componentClass="select" onChange={this.handleChange} placeholder="1"  >
                                    <option value="0">ไม่พร้อมทำงาน</option>
                                    <option value="1">รออนุมัตการจัดซื้อ</option>
                                    <option value="2">อนุมัติการจัดซื้อ</option>
                                    <option value="3">สัญญา</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={6} >
                            <FormGroup>
                                <ControlLabel >สถานะการทำงาน</ControlLabel>
                                <FormControl componentClass="select" placeholder="1" >
                                    <option value="0">ปิดการใช้งาน</option>
                                    <option value="1">เปิดการใช้งาน</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={4} >
                            <FormGroup>
                                <ControlLabel>เลขที่เตรียมสัญญา</ControlLabel>
                                <FormControl type="text" placeholder=" " />
                            </FormGroup>
                        </Col>
                        <Col xs={4} >
                            <FormGroup>
                                <ControlLabel>วันที่สร้าง</ControlLabel>
                                <FormControl type="text" placeholder=" " />
                            </FormGroup>
                        </Col>
                        <Col xs={4} >
                            <FormGroup>
                                <ControlLabel>วันที่แก้ไข</ControlLabel>
                                <FormControl type="text" placeholder=" " />
                            </FormGroup>
                        </Col>
                    </Row>
                    {val == '3' ? (
                        <FormContact />
                    ) : (<Row></Row>)}
                    <Row>
                        <Col xs={12}>
                            <PanelContainer>
                                <Panel>
                                    <PanelHeader className='bg-blue'>
                                        <Grid>
                                            <Row>
                                                <Col xs={12} className='fg-white'>
                                                    {val == '0' || val == '1' ? (
                                                        <h4>รายการยาและเวชภัณฑ์ที่จะทำสัญญา</h4>
                                                    ) : (<h4>ผลการจัดซื้อ</h4>)}
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </PanelHeader>
                                    <PanelBody>
                                        <Grid>
                                            <Row>
                                                <Col xs={12}>
                                                    <TableDNoData />
                                                </Col>
                                            </Row>
                                        </Grid>
                                    </PanelBody>
                                </Panel>
                            </PanelContainer>
                        </Col>
                    </Row>
                </Form>
            </Panel>
        );
    }
}


export default class PanelBodyHeaderAndFooter extends React.Component {
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
                                            <h3>รายละเอียดสัญญา</h3>
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelHeader>
                            <PanelBody>
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <FormNew />
                                        </Col>
                                        <Col xs={6}>
                                            <FormBuy />
                                        </Col>
                                        <Col xs={6}>
                                            <FormSale />
                                        </Col>
                                        <Col xs={12}>
                                            <FormCommittee />
                                        </Col>
                                        <Col xs={12}>
                                            <FormMore />
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

