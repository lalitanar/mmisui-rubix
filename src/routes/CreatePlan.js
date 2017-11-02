import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
// Import React Table
import ReactTable from "react-table";
import Table  from '../components/Table';
import ToggleButton from 'react-toggle-button'
import {
    Radio,
    SidebarNavItem,
    Row,
    Col,
    Grid,
    Panel,
    PanelBody,
    PanelHeader,
    PanelFooter,
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
    BPanel,
    LoremIpsum
} from '@sketchpixy/rubix';

class SelectPrevPlanningform extends React.Component {
    render() {
        var current_y=this.props.cur_year
        return (
            <Form>
                <Row>
                <Col xs={12}>
                <FormGroup controlId="planningyear">
                    <Col componentClass={ControlLabel} xs={8}>
                        สร้างจากแผนการจัดซือยาและเวชภัณฑ์ประจำปีที่
                    </Col>
                    <Col xs={3} md={3}>
	                  <FormControl componentClass="select" placeholder="year">
                        <option value="0">{current_y-1}</option>
                        <option value="1">{current_y-2}</option>
		                    <option value="2">{current_y-3}</option>
                        <option value="3">{current_y-4}</option>
                        <option value="4">{current_y-5}</option>
	                  </FormControl>
                    </Col>
	            </FormGroup>
                </Col>
                </Row>
            </Form>
        );
    }
}

class NewPlanForm extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }
  render() {
    var current_y=this.props.cur_year;
     return (
       <Grid>
              <Row>
                <Col xs={12}>
                    <Form horizontal>
                    <Col xs={3}>
                    <FormGroup controlId="planningyear">
                    <Col componentClass={ControlLabel} xs={4}>
                        ปีงบประมาณ
                    </Col>
                    <Col xs={5} md={5}>
                    <FormControl componentClass="select" placeholder="year">
                        <option value="0">{current_y}</option>
                        <option value="1">{current_y+1}</option>
                        <option value="2">{current_y+2}</option>
                        <option value="3">{current_y+3}</option>
                        <option value="4">{current_y+4}</option>
                        <option value="5">{current_y+5}</option>
                    </FormControl>
                    </Col>
                    </FormGroup>
                    </Col>
                    <Col xs={5}>
                    <FormGroup controlId="name">
                      <Col componentClass={ControlLabel} xs={3}>
                        ชื่อแผนการจัดซื้อ
                      </Col>
                      <Col sm={6}>
                        <FormControl type="text"/>
                      </Col>
                    </FormGroup>
                    </Col>
                    <Col xs={3}>
                    <FormGroup controlId="status">
                      <Col componentClass={ControlLabel} xs={5}>
                        สถานะแผนการจัดซื้อ
                      </Col>
                      <Col sm={5}>
                        <FormControl type="text" value={"รอการยืนยัน"} disabled active/>
                      </Col>
                    </FormGroup>
                    </Col>
                  </Form>
                </Col>
              </Row>

              <Row>
              <Col xs={12}>
                <Form horizontal>
                  <Col xs={3}>
                  <FormGroup controlId="list">
                    <Col componentClass={ControlLabel} xs={4}>
                      จำนวนรายการ
                    </Col>
                    <Col sm={5}>
                      <FormControl type="text" value={0} disabled active/>
                    </Col>
                  </FormGroup>
                  </Col>
                  <Col xs={5}>
                  <FormGroup controlId="total">
                    <Col componentClass={ControlLabel} xs={3}>
                      มูลค่ารวม
                    </Col>
                    <Col sm={6}>
                      <FormControl type="text" value={0} disabled active/>
                    </Col>
                  </FormGroup>
                  </Col>
                  <Col xs={4}>
                        <Button bsStyle='success' onClick={ ()=> this.setState({ open: !this.state.open })}><Icon glyph='icon-fontello-search'/>แสดงรายละเอียดงบประมาณ</Button>
                        <Col xs={12}>
                        <BPanel collapsible expanded={this.state.open}>
                          <Row>
                            <Col xs={8}>
                              <span>งบประมาณสาธารณสุข</span>
                            </Col>
                            <Col xs={2}>
                              <span>500,000</span>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={8}>
                              <span>งบประมาณพิเศษ</span>
                            </Col>
                            <Col xs={2}>
                              <span>6,000,000</span>
                            </Col>
                          </Row>
                        </BPanel>
                        </Col>
                  </Col>
                </Form>
                </Col>
              </Row>
        </Grid>
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
        var button_case = this.props.case
        return (
    <div>
    <Row>
    <Col xs={12}>
    <Button bsStyle='primary'><Icon glyph='icon-fontello-download-1'/> นำเข้าไฟล์</Button>{' '}
    <Button bsStyle='primary' onClick={::this.open}><Icon glyph='icon-fontello-popup-1'/>  สร้างจากแผนเก่า</Button>{' '}
      <Modal show={this.state.showModal} onHide={::this.close}>
        <Modal.Header closeButton>
        <Modal.Title>สร้างแผนการจัดซื้อยาและเวชภัณฑ์</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SelectPrevPlanningform cur_year={2560}/>
        </Modal.Body>
        <Modal.Footer>
        <Button bsStyle='success' onClick={::this.close}>บันทึก</Button>
        <Button onClick={::this.close}>ยกเลิก</Button>
        </Modal.Footer>
      </Modal>
    <Button bsStyle='primary'><Icon glyph='icon-fontello-download-4'/> สร้างอัตโนมัติ</Button>
    </Col>
    </Row>
    </div>
        );
    }
}

class PlanLog extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [{}]
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
              Header: "ชื่อสินค้า",
              accessor:"planning"
            },
            {
              Header:"หน่วย",
              accessor:"budget",
              width:200
            },
            {
              Header: "ราคาต่อหน่วย",
              accessor: "moreinfo",
              width:150
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
          />
        );
    }
}

export default class CreatePlan extends React.Component {
    render() {
        return (
        <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelHeader className='bg-blue fg-white'>
                  <Grid>
                      <h3>แผนการจัดซื้อยาและเวชภัณฑ์</h3>
                  </Grid>
              </PanelHeader>
              <PanelBody>
                <Grid>
                <h3>สร้างแผนใหม่</h3>
                <Row>
                  <Col xs={12}>
                    <Buttonbar case={1/*case 1 for 3 buttons*/}/>
                    <hr/>
                    <NewPlanForm cur_year={2560}/>
                    <hr/>
                    <h3>รายการทั้งหมด</h3>
                    <Button bsStyle='success'><Icon glyph='icon-fontello-plus'/> เพิ่มรายการ</Button>
                    <br/><br/>
                    <Table/>
                    {/*
                    <h3>ประวัติการปรับแผน</h3>
                    <PlanLog/>
                    */}
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
