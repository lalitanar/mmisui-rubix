import React from "react";
import { render } from "react-dom";
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
      console.log('The link was clicked.');
    }
    return (
      <div>
        <Button bsStyle='success' href="/supplier/new">
          <Icon glyph='icon-fontello-plus' /> เพิ่มผู้ใช้งาน
        </Button>
        
        <Button className='pull-right' bsStyle='primary' onClick={handleClick}>
          <Icon glyph='icon-fontello-download' /> นำออก EXAL
        </Button>
        
      </div >
    );
  }
}

class DatatableComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    //const { data } = this.state;
    //console.log(this.state);
    const data = [
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
{LabelerID: "3545283190", LocalID: "3546928490", LocalName: "gaping-pin-curtain-pioneer", LabelerName: "depressed-pets-nail-peel", Phone: "869-326-0301",Remark: <a href="/supplier/detail"> รายละเอียด</a>},
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
              Header: "ผู้ประกอบการ",
              columns: [
                {
                  Header: "รหัสผู้ประกอบการ",
                  accessor: "LabelerID"
                },
                {
                  Header: "ชื่อผู้ประกอบการ",
                  accessor: "LabelerName"
                }
              ]
            },
            {
              Header: "ข้อมูลเพิ่มเติม",
              columns: [
                {
                  Header: "เบอร์โทรศัพท์",
                  accessor: "Phone"
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
          <PanelContainer>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <Bar />
                      <hr/>
                      <DatatableComponent />
                      <br />
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