import React from "react";
import { render } from "react-dom";
import DateTimeField from "react-bootstrap-datetimepicker";
import { Link, withRouter } from 'react-router';
// Import React Table
import ReactTable from "react-table";
import {
    Radio,
    SidebarNavItem,
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
    BPanel,
    Modal,
    Form,
    FormGroup,
    InputGroup,
    ControlLabel,
    Icon,
    Tabs,
    Tab
} from '@sketchpixy/rubix';

class Budgetform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false
        };
        this.getData = this.getData.bind(this)
    }
    getData(choice){
        if(choice=="1"){
            this.setState({open: true});
        }
        else this.setState({open: false});

        console.log(open);
    }
    render() {
        return (
            <Grid>
            <Col xs={12}>
                <Budgetform_tab1 sendData={this.getData}/>
                <Budgetform_tab2 open={this.state.open}/>
            </Col>
            </Grid>
        );
    }
}

class Budgetform_tab1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.activate = this.activate.bind(this)
    }
    activate(event){
        var choice = event.target.value;
        this.props.sendData(choice);
    }
    render() {
        return (
            <BPanel>
            <h4>ข้อมูลทั่วไป</h4>
            <Form horizontal>
                <br/>
                <FormGroup controlId="budgettype">
                <Col componentClass={ControlLabel} xs={4}>
                    ประเภทงบประมาณ
                </Col>
                <Col xs={5} md={5}>
                    <FormControl componentClass="select" placeholder="Budget Type" onChange={(e) => this.activate(e)}>
		                <option value="0">ทั่วไป</option>
		                <option value="1">กองทุน</option>
                    </FormControl>
                </Col>
                </FormGroup>

                <FormGroup controlId="budgetname">
                    <Col componentClass={ControlLabel} xs={4}>
                        ชื่อประเภทงบประมาณ
                    </Col>
                    <Col xs={5} md={5}>
                    <FormControl type="text" placeholder="Budget Name" />
                    </Col>
                    </FormGroup>
            </Form>
            </BPanel>
        );
    }
}

class Budgetform_tab2 extends React.Component {
    render() {
        return (
            <BPanel collapsible expanded={this.props.open}>
            <h4>ข้อมูลกองทุน</h4>
            <Form horizontal>
                <br/>
                <FormGroup controlId="approver">
                <Col componentClass={ControlLabel} xs={4}>
                    ผู้มีอำนาจอนุมัติ
                </Col>
                <Col xs={7} md={7}>
                    <FormControl componentClass="select" placeholder="Budget Type">
		                <option value="0">คุณ หมีขาว ขั้วโลกเหนือ</option>
		                <option value="1">คุณ แมวเหมียว เมี้ยวเมี้ยว</option>
                        <option value="2">คุณ หมาบ้อก โฮ่งโฮ่ง</option>
                        <option value="3">คุณ แกะ แบ๊ะแบ๊ะ</option>
                    </FormControl>
                </Col>
                </FormGroup>

                <FormGroup id="date-discon">
                    <Col componentClass={ControlLabel} xs={4}>
                        วันที่เริ่มการทำงาน
                    </Col>
                    <Col xs={7}>
                        <DateTimeField/>
                    </Col>
                </FormGroup>

                <FormGroup id="date-discon">
                    <Col componentClass={ControlLabel} xs={4}>
                        วันที่สิ้นสุดการทำงาน
                    </Col>
                    <Col xs={7}>
                        <DateTimeField />
                    </Col>
                </FormGroup>

                <FormGroup controlId="working_status">
                    <Col componentClass={ControlLabel} xs={4}>
                        สถานะการทำงาน
                    </Col>
                    <Col xs={8}>
	                <Radio inline name='work_status'>Freeze</Radio> {' '}
                    <Radio inline name='work_status'>Unfreeze</Radio>{' '}
                    </Col>
	            </FormGroup>
            </Form>
            </BPanel>
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
    <Button bsStyle='success' onClick={::this.open}><Icon glyph='icon-fontello-plus'/>  เพิ่มรายการ</Button>
    <Modal show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เพิ่ม/แก้ไข ประเภทงบประมาณ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Budgetform/>
      </Modal.Body>
      <Modal.Footer>
      <Button bsStyle='success' onClick={::this.close}>บันทึก</Button>
      <Button onClick={::this.close}>ยกเลิก</Button>
      </Modal.Footer>
    </Modal>
    </div>
        );
    }
}

class Budgettable extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {
                budget_name:"ทั่วไป กขคง",
                budget_type:"ทั่วไป",
                approver:"-",
                start_date:"-",
                end_date:"-",
                working_status:"-",
                edit:<ButtonGroup>
                        <Button bsStyle='warning'><Icon glyph='icon-fontello-edit'/>  แก้ไข</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                    </ButtonGroup>
              },
              {
                budget_name:"กองทุน จฉชย",
                budget_type:"กองทุน",
                approver:"นายคาราเมล เดอะด้อก",
                start_date:"25/5/2016",
                end_date:"13/9/2017",
                working_status:"Freeze",
                edit:<ButtonGroup>
                        <Button bsStyle='warning'><Icon glyph='icon-fontello-edit'/>  แก้ไข</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                    </ButtonGroup>
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
                Header: "ชื่อประเภทงบประมาณ",
                accessor: "budget_name"
              },
              {
                Header: "ชนิดประเภทงบประมาณ",
                accessor: "budget_type"
              },
              {
                Header: "ผู้มีอำนาจอนุมัติ",
                accessor:"approver"
              },
              {
                Header: "วันที่เริ่มการทำงาน",
                accessor:"start_date",
              },
              {
                Header: "วันที่สิ้นสุดการทำงาน",
                accessor:"end_date"
              },
              {
                Header: "สถานะการทำงาน",
                accessor:"working_status"
              },
              {
                  Header:"",
                  accessor:"edit"
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
              <PanelHeader className='bg-blue fg-white'>
                  <Grid>
                      <Row>
                          <Col xs={12}>
                              <h3>ข้อมูลประเภทงบประมาณ</h3>
                          </Col>
                      </Row>
                  </Grid>
            </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <Buttonbar/>
                      <hr/>
                      <Budgettable />
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