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

export default class PlanningDashboard extends React.Component {
  componentDidMount() {
    var Chart1 = Rubix.Donut('#chart1', {
      title: 'งบประมาณทั้งหมด',
      titleColor: '#000000',
      hideLegend: false,
      height: 300,
      tooltip: {
        color: '#FFFFFF'
      }
    });
    Chart1.addData([
      {
        name: 'งบคงเหลือ',
        value: 500000000,
        color: '#3BC474'
      },
      {
        name: 'งบที่ถูกใช้ไปแล้ว',
        value: 370000000,
        color: '#BEC0C1'
      }
    ]);
    var Chart2 = Rubix.Donut('#chart2', {
      title: 'สถานะงบประมาณ',
      titleColor: '#000000',
      hideLegend: false,
      height: 300,
      tooltip: {
        color: '#FFFFFF'
      }
    });
    Chart2.addData([
      {
        name: 'งบที่อนุมัติแล้ว',
        value: 500000000,
        color: '#3BC474'
      },
      {
        name: 'งบที่รออนุมัติ',
        value: 370000000,
        color: '#FFB533'
      },
      {
        name: 'งบที่ไม่อนุมัติ',
        value: 370000000,
        color: '#E52F2F'
      }
    ]);
  }
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
                  <SelectYear cur_year={2560} />
                  <br/>
                    <Col xs={12}>
                        <Col xs={6}>
                          <div id='chart1'/>
                        </Col>
                        <Col xs={6}>
                          <div id='chart2'/>
                        </Col>
                    </Col>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Col>
      </Row>
        );
    }
}

class SelectYear extends React.Component {
  render() {
      var current_y=this.props.cur_year
      return (
              <Row>
              <Col xs={8}>
              <FormGroup controlId="planningyear">
                  <Col componentClass={ControlLabel} xs={4}>
                      <h4>แผนการจัดซือยาและเวชภัณฑ์ประจำปี</h4>
                  </Col>
                  <Col xs={2} md={2}>
                  <FormControl componentClass="select" placeholder="year">
                      <option value="0">{current_y}</option>
                      <option value="1">{current_y-1}</option>
                      <option value="2">{current_y-2}</option>
                      <option value="3">{current_y-3}</option>
                      <option value="4">{current_y-4}</option>
                  </FormControl>
                  </Col>
                  <Col componentClass={ControlLabel} xs={1}>
                      <h4>ประเภท</h4>
                  </Col>
                  <Col xs={2} md={2}>
                  <FormControl componentClass="select" placeholder="type">
                      <option value="0">ยา</option>
                      <option value="1">เวชภัณฑ์</option>
                  </FormControl>
                  </Col>
            </FormGroup>
            </Col>
            </Row>
      );
  }
}