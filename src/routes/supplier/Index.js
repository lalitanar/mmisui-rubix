import React from "react";
import { render } from "react-dom";
import _ from 'lodash'
import ReactTable from "react-table";
import Addnew from "./New"
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
      console.log('The link was clicked.');
    }
    return (
      <div>
        <Button bsStyle='success' onClick={this.props.showadd}>
          <Icon glyph='icon-fontello-plus' /> เพิ่มผู้ประกอบการ
        </Button>
        <ButtonGroup className='pull-right'>
          <Button bsStyle='primary' onClick={handleClick}>
          <Icon glyph='icon-fontello-download' /> นำออก EXCEL
        </Button>
        <Button bsStyle='defalt' onClick={handleClick}>
          <Icon glyph='icon-fontello-print' /> พิมพ์
        </Button>
        </ButtonGroup>
      </div>
    );
  }
}



class DatatableComponent extends React.Component {
  render() {
    const data = [
      { LabelerID: "6447286249", LabelerName: "skillful-sleep-boat-search", Phone: "716-453-3846", NIN: "8995313129", Address: "immense-tooth-bed-help", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "1175263402", LabelerName: "direful-foot-fly-arise", Phone: "402-307-3157", NIN: "4533514365", Address: "electric-collar-record-suspect", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "7150887353", LabelerName: "premium-monkey-investment-marry", Phone: "820-363-6913", NIN: "5865855211", Address: "ripe-ball-jail-applied", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "9515712644", LabelerName: "guiltless-receipt-classroom-examine", Phone: "575-559-1326", NIN: "6591953442", Address: "substantial-rock-marketing-wed", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "5359871986", LabelerName: "crowded-arrival-construction-induce", Phone: "1-630-469-159", NIN: "7115462293", Address: "aspiring-anxiety-father-reign", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "3383735316", LabelerName: "slow-trees-cellar-market", Phone: "425-046-6081", NIN: "9671260059", Address: "chilly-form-chair-say", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "7749582384", LabelerName: "wellmade-grain-sun-trust", Phone: "275-580-6340", NIN: "9119053811", Address: "sable-revolution-side-restored", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "8015573222", LabelerName: "grubby-effort-number-pinch", Phone: "713-329-8769", NIN: "6613235390", Address: "disgusting-record-tennis-fool", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "9766126177", LabelerName: "obnoxious-noise-interaction-raise", Phone: "429-018-2169", NIN: "6857563404", Address: "smelly-expert-mark-sting", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "8755455701", LabelerName: "agreeable-restaurant-shop-produce", Phone: "293-556-8286", NIN: "6783675255", Address: "moaning-rock-border-warm", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "8220133805", LabelerName: "social-lumber-conclusion-acted", Phone: "726-981-2595", NIN: "3216317291", Address: "hard-enthusiasm-drawing-choke", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "1660136781", LabelerName: "voracious-estate-interest-sort", Phone: "519-826-9051", NIN: "2393129151", Address: "upset-quiver-turkey-pop", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "3016610334", LabelerName: "alluring-tiger-percentage-integrate", Phone: "746-709-2234", NIN: "9153456890", Address: "alluring-ground-bear-engineer", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "1970733375", LabelerName: "insidious-chain-pail-direct", Phone: "835-416-3630", NIN: "9587888921", Address: "spurious-preparation-run-wind", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "9652862062", LabelerName: "guttural-downtown-cars-land", Phone: "382-969-7251", NIN: "1083619579", Address: "overt-plantation-level-break", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "3015197746", LabelerName: "broad-lift-stop-inform", Phone: "593-328-1897", NIN: "1197950369", Address: "exotic-sugar-effect-intensify", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
      { LabelerID: "2995571781", LabelerName: "electronic-straw-heat-mend", Phone: "811-255-1315", NIN: "8506619472", Address: "important-marketing-parcel-revise", Remark:  <ButtonGroup>
                        <Button bsStyle='info' href="/supplier/detail">  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "บุคคล", LocalType: "ยา" , Email: "meaw@gmail.com" , NameContact: "Kudo Shinichi" },
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
                  Header: "ชื่อผู้ประกอบการ",
                  accessor: "LabelerName"
                },
                {
                  Header: "ชื่อผู้ติดต่อ",
                  accessor: "NameContact"
                },
                {
                  Header: "เบอร์โทรศัพท์",
                  accessor: "Phone"
                },
                {
                  Header: "E-mail",
                  accessor: "Email"
                },
                {
                  Header: "เพิ่มเติม",
                  accessor: "Remark",
                },

              ]
            }
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default class Tableview extends React.Component {
  showadd(){
    this.setState({addshow:true});
  }
  submit(){
    this.setState({addshow:false});
    this.setState({detail:false});
  }
  showdetail(){
    console.log("call")
    this.setState({detail:true});
  }
  constructor(props){
    super(props);

    this.state = {
      addshow: false,
      detail: false
    };
    this.showadd = this.showadd.bind(this);
    this.submit = this.submit.bind(this);
    this.showdetail = this.showdetail.bind(this);
  }
  render() {
    var table =<PanelContainer>
      <Panel>
        <PanelHeader className='bg-blue'>
           <Grid>
             <Row>
              <Col xs={12} className='fg-white'>
                <h4>ข้อมูลผู้ประกอบการ</h4>
              </Col>
             </Row>
           </Grid>
          </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col xs={12}>
                <Bar showadd={this.showadd}/>
                <hr />
                <DatatableComponent />
                <br />
              </Col>
            </Row>
          </Grid>
        </PanelBody>
      </Panel>
    </PanelContainer>;
    var show;
    if(this.state.addshow == true){
      show = <Addnew submit={this.submit}/>;
    }
    if(this.state.detail == true){
      show = <Detail objd={obj} submit={this.submit}/>;
    }
    if(this.state.addshow == false && this.state.detail == false){
      show= table;
    }
    return (
      <Row>
        <Col xs={12}>
          {show}
        </Col>
      </Row>
    );
  }
}
