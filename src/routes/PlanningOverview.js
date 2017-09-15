import React from "react";
import { render } from "react-dom";

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

class Buttonbar extends React.Component {
    render() {
        return (
    <div>
    <Row>
    <Col xs={12}>
    <ButtonGroup className='pull-right'>
          <Button bsStyle='primary' bsSize='lg'>ปรับแผน</Button>
          <Button bsStyle='success' bsSize='lg'>สรุป</Button>
    </ButtonGroup>
    </Col>
    </Row>
    </div>
        );
    }
}

class UpperTab extends React.Component {
    render() {
        var year=this.props.year
        var status=this.props.status
        return (
            <h4>
                <b>ปีงบประมาณ</b> &nbsp;{year}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>สถานะ</b> &nbsp;{status}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button bsStyle='primary'><Icon glyph='icon-fontello-edit'/>  แก้ไข</Button>
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

class PlanningOverviewtable extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {
                planninglist:"แผนการจัดซือยาและเวชภัณฑ์",
                lastupdate:"12/12/59",
                status:"อนุมัติ",
                budget:25000000,
                budgetfrom1:"งบ ก",
                budgettotal1:150000000,
                budgetfrom2:"งบ ข",
                budgettotal2:10000000,
                budgetfrom3:"งบ ค",
                budgettotal3:90000000
              },
              {
                planninglist:"แผนการจัดซือยาและเวชภัณฑ์ย่อย 1",
                lastupdate:"11/11/59",
                status:"ยังไม่อนุมัติ",
                budget:12000000,
                budgetfrom1:"งบ จ",
                budgettotal1:10000000,
                budgetfrom2:"งบ ฉ",
                budgettotal2:10000000,
                budgetfrom3:"งบ ช",
                budgettotal3:100000000
              }
          ]
        };
      }

    render() {
        var i=0
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
              Header: "รายการ",
              accessor:"planninglist"
            },
            {
              Header: "แก้ไขล่าสุด",
              accessor: "lastupdate"
            },
            {
              Header: "สถานะ",
              accessor: "status"
            },
            {
              Header: "งบประมาณ(บาท)",
              accessor: "budget"
            },
            {
                expander: true,
                Header: () => <span>รายละเอียด</span>,
                width: 100,
                Expander: ({ isExpanded, ...rest }) =>
                    <div>
                      {isExpanded
                        ? <span><Icon glyph='icon-feather-circle-minus'/></span>
                        : <span><Icon glyph='icon-dripicons-information'/></span>}
                    </div>,
                style: {
                    cursor: "pointer",
                    fontSize: 25,
                    padding: "0",
                    textAlign: "center",
                    userSelect: "none"
                },
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
          SubComponent={() => <div>
                                <Grid>
                                <span><b>รายละเอียดงบ</b></span>
                                    <Row>
                                    <Col xs={1}>
                                        <Icon glyph='icon-ikons-play'/>{this.state.data[i].budgetfrom1}
                                    </Col>
                                    <Col xs={1}>
                                        {this.state.data[i].budgettotal1}
                                        &nbsp;&nbsp;บาท
                                    </Col>
                                    </Row>

                                    <Row>
                                    <Col xs={1}>
                                        <Icon glyph='icon-ikons-play'/>{this.state.data[i].budgetfrom2}
                                    </Col>
                                    <Col xs={1}>
                                        {this.state.data[i].budgettotal2}
                                        &nbsp;&nbsp;บาท
                                    </Col>
                                    </Row>

                                    <Row>
                                    <Col xs={1}>
                                        <Icon glyph='icon-ikons-play'/>{this.state.data[i].budgetfrom3}
                                    </Col>
                                    <Col xs={1}>
                                        {this.state.data[i].budgettotal3}
                                        &nbsp;&nbsp;บาท
                                    </Col>
                                    </Row>
                                </Grid>
                              </div>
                        }
        />
        );
    }
}
class PlanningOverviewBox extends React.Component {
    render() {
        return (
            <Col xs={12}>
            <PanelContainer>
            <BPanel>
                <PanelHeader className='bg-blue fg-white'>
                    <Grid>
                    <h4>แผนการจัดซือยาและเวชภัณฑ์</h4>
                    </Grid>
                </PanelHeader>
                <PanelBody>
                <Grid>
                <Row>
                <Col xs={12}>
                    <PlanningOverviewtable/>
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
export default class PlanningOverview extends React.Component {
    render() {
        var approve={
            header:"งบประมาณอนุมัติแล้ว",
            word1:"งบประมาณ",
            budget1:12000000,
            word2:"งบบำรุง",
            budget2:13000000
      }
      var disapprove={
            header:"งบประมาณยังไม่อนุมัติ",
            word1:"งบพิเศษ",
            budget1:11000000,
            word2:"งบบริจาค",
            budget2:1000000
      }
        return (
            <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelHeader className='bg-blue fg-white'>
                  <Grid>
                      <h3>แผนการจัดซือยาและเวชภัณฑ์</h3>
                  </Grid>
              </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <UpperTab year="2560" status="ไม่ทำงาน"/>
                      <br/>
                        <BudgetBox obj={approve}/>
                        <BudgetBox obj={disapprove}/>
                      <br/>
                      <PlanningOverviewBox />
                      <hr/>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
              <PanelFooter>
                <Grid>
                <Row>
                <Col xs={12}>
                    <Buttonbar/>
                    <br/>
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