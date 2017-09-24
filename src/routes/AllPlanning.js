import React from "react";
import { render } from "react-dom";

import { Link, withRouter } from 'react-router';
// Import React Table
import ReactTable from "react-table";
import ToggleButton from 'react-toggle-button'
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
    BPanel
} from '@sketchpixy/rubix';

class AllPlanningform extends React.Component {
    render() {
        var current_y=this.props.cur_year
        return (
            <Form>
                <Row>
                <Col xs={12}>
                <FormGroup controlId="planningyear">
                    <Col componentClass={ControlLabel} xs={7}>
                        แผนการจัดซือยาและเวชภัณฑ์ประจำปีที่
                    </Col>
                    <Col xs={3} md={3}>
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
                </Row>
            </Form>
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
    <Row>
    <Col xs={12}>
    <Button bsStyle='success' onClick={::this.open}><Icon glyph='icon-fontello-plus'/>  สร้างแผนใหม่</Button>
    <Modal show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เพิ่มแผนการจัดซื้อยาและเวชภัณฑ์</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AllPlanningform cur_year={2560}/>
      </Modal.Body>
      <Modal.Footer>
      <Button bsStyle='success' onClick={::this.close}>บันทึก</Button>
      <Button onClick={::this.close}>ยกเลิก</Button>
      </Modal.Footer>
    </Modal>
    </Col>
    </Row>
    </div>
        );
    }
}

class UpperTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false
        };
    }
    componentWillMount(){
        this.setState({
            status:this.props.status,
            value: status
        });
      }
    render() {
        var year=this.props.year
        return (
            <h4>
                <b>ปีงบประมาณ</b> &nbsp;{year}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>สถานะ</b> &nbsp;
                <ToggleButton
                    inactiveLabel={'ไม่ทำงาน'}
                    activeLabel={'ทำงาน'}
                    containerStyle={{display:'inline-block',width:'60px'}}
                    trackStyle={{width:'90px'}}
                    thumbAnimateRange={[1, 70]}
                    activeLabelStyle={{ width:'35px' }}
                    inactiveLabelStyle={{ width:'55px' }}
                    value={this.state.status}
                    onToggle={(value) => {
                        this.setState({
                            status:!value
                        })
                    }}
                />
            </h4>
        );
    }
}

class BudgetBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalbudget: 0
        };
    }
    componentWillMount(){
        this.setState({
            totalbudget : this.props.obj.budget1+this.props.obj.budget2
        });
      }
    render() {
        var header=this.props.obj.header
        var word1=this.props.obj.word1
        var budget1=this.props.obj.budget1
        var word2=this.props.obj.word2
        var budget2=this.props.obj.budget2
        return (
            <Col xs={6}>
            <PanelContainer>
            <BPanel>
                <PanelHeader className='bg-blue fg-white'>
                    <Grid>
                    <h4>{header}</h4>
                    </Grid>
                </PanelHeader>
                <PanelBody>
                <Grid>
                <Row>
                <Col xs={12}>
                    <Form horizontal>
                        <FormGroup controlId="budget1">
                        <Col componentClass={ControlLabel} xs={4}>
                            {word1}
                        </Col>
                        <Col sm={6}>
                        <FormControl type="text" placeholder={word1} value={budget1} disabled active/>
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}>
                            บาท
                        </Col>
                        </FormGroup>

                        <FormGroup controlId="budget2">
                        <Col componentClass={ControlLabel} xs={4}>
                            {word2} 
                        </Col>
                        <Col sm={6}>
                        <FormControl type="text" placeholder={word2} value={budget2} disabled active/>
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}>
                            บาท
                        </Col>
                        </FormGroup>

                        <FormGroup controlId="TotalBudget">
                        <Col componentClass={ControlLabel} xs={4}>
                            งบประมาณรวม
                        </Col>
                        <Col sm={6}>
                        <FormControl type="text" placeholder="งบประมาณรวม" value={this.state.totalbudget} disabled active/>
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}>
                            บาท
                        </Col>
                        </FormGroup>
                    </Form>
                </Col>
                </Row>
            </Grid>
            </PanelBody>
            </BPanel>
            </PanelContainer>
            </Col>
        );
    }
}

class AllPlanningtable extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {
                planning:"แผนการจัดซื้อยาและเวชภัณฑ์ ปีงบประมาณ2560",
                value:false,
                status:false,
                status_bt:<ToggleButton
                            inactiveLabel={'ไม่ทำงาน'}
                            activeLabel={'ทำงาน'}
                            containerStyle={{display:'inline-block',width:'60px'}}
                            trackStyle={{width:'90px'}}
                            thumbAnimateRange={[1, 70]}
                            activeLabelStyle={{ width:'35px' }}
                            inactiveLabelStyle={{ width:'55px' }}
                            value={false}
                            onToggle={(value) => {
                                this.setState({
                                    status:!value
                                })
                            }}
                        />
            ,
                moreinfo:<Button bsStyle='success' href='/planningoverview'><Icon glyph='icon-fontello-search'/>ดูรายละเอียด</Button>
              },
              {
                planning:"แผนการจัดซื้อยาและเวชภัณฑ์ ปีงบประมาณ2559",
                status_bt:<ToggleButton
                            inactiveLabel={'ไม่ทำงาน'}
                            activeLabel={'ทำงาน'}
                            containerStyle={{display:'inline-block',width:'60px'}}
                            trackStyle={{width:'90px'}}
                            thumbAnimateRange={[1, 70]}
                            activeLabelStyle={{ width:'35px' }}
                            inactiveLabelStyle={{ width:'55px' }}
                            value={true}
                            onToggle={(value) => {
                                this.setState({
                                    status:!value
                                })
                            }}
                        />
                ,
                moreinfo:<Button bsStyle='success'><Icon glyph='icon-fontello-search'/>ดูรายละเอียด</Button>
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
              Header: "แผนการจัดซื้อยาและเวชภัณฑ์",
              accessor:"planning"
            },
            {
              Header: "สถานะ",
              accessor: "status_bt",
              width:120
            },
            {
              Header: "",
              accessor: "moreinfo",
              width:150
            }
          ]}
          defaultPageSize={13}
          className="-striped -highlight"
          />
        );
    }
}

export default class AllPlanning extends React.Component {
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
                  <Row>
                    <Col xs={12}>
                      <br/>
                      <Buttonbar/>
                        <br/>
                      <AllPlanningtable />
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
