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
        <Button bsStyle='success'  onClick={this.props.showadd}>
          <Icon glyph='icon-fontello-plus' /> เพิ่มสัญญา
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
      { PreContactID: "6447286249", ContactID: "สธ-6447286249", ExpDate: "30/06/2561" , Amount: "4,234.21" , LabelerName: "skillful-sleep-boat-search", Active: 1 , Status: "สัญญา", Phone: "716-453-3846", NIN: "8995313129", Address: "immense-tooth-bed-help", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "1175263402", ContactID: "สธ-1175263402", ExpDate: "30/06/2561" , Amount: "4,234.21" , LabelerName: "direful-foot-fly-arise", Active: 1 , Status: "สัญญา", Phone: "402-307-3157", NIN: "4533514365", Address: "electric-collar-record-suspect", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "7150887353", ContactID: " ", ExpDate: "30/06/2561" , Amount: "4,234.21" , LabelerName: "premium-monkey-investment-marry", Active: 0 , Status: "อนุมัติการจัดซื้อ", Phone: "820-363-6913", NIN: "5865855211", Address: "ripe-ball-jail-applied", Remark: <ButtonGroup> <Button bsStyle='warning' href="/contact/new">  <Icon glyph='icon-fontello-edit' /> แก้ไข </Button> <Button bsStyle='danger'> <Icon glyph='icon-fontello-trash' /> ลบ </Button> </ButtonGroup> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "9515712644", ContactID: "สธ-9515712644", ExpDate: "30/06/2561" , Amount: "4,234.21" , LabelerName: "guiltless-receipt-classroom-examine", Active: 1 , Status: "สัญญา", Phone: "575-559-1326", NIN: "6591953442", Address: "substantial-rock-marketing-wed", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "5359871986", ContactID: "สธ-5359871986", ExpDate: "30/06/2561" , Amount: "4,234.21" , LabelerName: "crowded-arrival-construction-induce", Active: 1 , Status: "สัญญา", Phone: "1-630-469-159", NIN: "7115462293", Address: "aspiring-anxiety-father-reign", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "3383735316", ContactID: "สธ-3383735316", ExpDate: "30/06/2561" , Amount: "164,342.21" , LabelerName: "slow-trees-cellar-market", Active: 1 , Status: "สัญญา", Phone: "425-046-6081", NIN: "9671260059", Address: "chilly-form-chair-say", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "7749582384", ContactID: " ", ExpDate: "30/06/2561" , Amount: "9,234.21" , LabelerName: "wellmade-grain-sun-trust", Active: 1 , Status: "รออนุมัติการจัดซื้อ", Phone: "275-580-6340", NIN: "9119053811", Address: "sable-revolution-side-restored", Remark: <ButtonGroup> <Button bsStyle='warning' href="/contact/new">  <Icon glyph='icon-fontello-edit' /> แก้ไข </Button> <Button bsStyle='danger'> <Icon glyph='icon-fontello-trash' /> ลบ </Button> </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "8015573222", ContactID: " ", ExpDate: "30/06/2561" , Amount: "164,234.21" , LabelerName: "grubby-effort-number-pinch", Active: 1 , Status: "รออนุมัติการจัดซื้อ", Phone: "713-329-8769", NIN: "6613235390", Address: "disgusting-record-tennis-fool", Remark: <ButtonGroup> <Button bsStyle='warning' href="/contact/new">  <Icon glyph='icon-fontello-edit' /> แก้ไข </Button> <Button bsStyle='danger'> <Icon glyph='icon-fontello-trash' /> ลบ </Button> </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "9766126177", ContactID: " ", ExpDate: "30/06/2561" , Amount: "164,234.21" , LabelerName: "obnoxious-noise-interaction-raise", Active: 1 , Status: "อนุมัติการจัดซื้อ", Phone: "429-018-2169", NIN: "6857563404", Address: "smelly-expert-mark-sting", Remark: <ButtonGroup> <Button bsStyle='warning' href="/contact/new">  <Icon glyph='icon-fontello-edit' /> แก้ไข </Button> <Button bsStyle='danger'> <Icon glyph='icon-fontello-trash' /> ลบ </Button> </ButtonGroup>, Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "8755455701", ContactID: "สธ-8755455701", ExpDate: "30/06/2561" , Amount: "4,234.21" , LabelerName: "agreeable-restaurant-shop-produce", Active: 1 , Status: "สัญญา", Phone: "293-556-8286", NIN: "6783675255", Address: "moaning-rock-border-warm", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "8220133805", ContactID: "สธ-8220133805", ExpDate: "30/06/2561" , Amount: "4,234.21" , LabelerName: "social-lumber-conclusion-acted", Active: 1 , Status: "สัญญา", Phone: "726-981-2595", NIN: "3216317291", Address: "hard-enthusiasm-drawing-choke", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "1660136781", ContactID: "สธ-1660136781", ExpDate: "30/06/2561" , Amount: "32,567.21" , LabelerName: "voracious-estate-interest-sort", Active: 0 , Status: "สัญญา", Phone: "519-826-9051", NIN: "2393129151", Address: "upset-quiver-turkey-pop", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "3016610334", ContactID: "สธ-3016610334", ExpDate: "30/06/2561" , Amount: "4,234.21" , LabelerName: "alluring-tiger-percentage-integrate", Active: 1 , Status: "สัญญา", Phone: "746-709-2234", NIN: "9153456890", Address: "alluring-ground-bear-engineer", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "1970733375", ContactID: "สธ-1970733375", ExpDate: "30/06/2561" , Amount: "8,234.21" , LabelerName: "insidious-chain-pail-direct", Active: 1 , Status: "สัญญา", Phone: "835-416-3630", NIN: "9587888921", Address: "spurious-preparation-run-wind", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "9652862062", ContactID: "สธ-9652862062", ExpDate: "30/06/2561" , Amount: "4,234.21" , LabelerName: "guttural-downtown-cars-land", Active: 1 , Status: "สัญญา", Phone: "382-969-7251", NIN: "1083619579", Address: "overt-plantation-level-break", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "3015197746", ContactID: "สธ-3015197746", ExpDate: "30/06/2561" , Amount: "365,123.21" , LabelerName: "broad-lift-stop-inform", Active: 1 , Status: "สัญญา", Phone: "593-328-1897", NIN: "1197950369", Address: "exotic-sugar-effect-intensify", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
      { PreContactID: "2995571781", ContactID: "สธ-2995571781", ExpDate: "30/06/2561" , Amount: "4,873.21" , LabelerName: "electronic-straw-heat-mend", Active: 1 , Status: "สัญญา", Phone: "811-255-1315", NIN: "8506619472", Address: "important-marketing-parcel-revise", Remark: <Button bsStyle='warning' href="/contact/new"> <Icon glyph='icon-fontello-edit' /> แก้ไข  </Button> , Add: <Radio inline name='inline' />, LabelerType: "นิติบุคคล", LocalType: "ยา" },
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
              Header: "รายละเอียด",
              columns: [
                {
                  Header: "สถานะ",
                  accessor: "Status"
                },
                {
                  Header: "ผู้ปะกอบการ",
                  accessor: "LabelerName"
                },
                {
                  Header: "เลขที่เตรียมสัญญา",
                  accessor: "PreContactID"
                },
                {
                  Header: "เลขที่สัญญา",
                  accessor: "ContactID"
                }
              ]
            },
            {
              Header: "ข้อมูลเพิ่มเติม",
              columns: [
                {
                  Header: "วันที่สิ้นสุด",
                  accessor: "ExpDate"
                },
                {
                  Header: "มูลค่า",
                  accessor: "Amount"
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
