import React from "react";
import { render } from "react-dom";
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
    Checkbox
} from '@sketchpixy/rubix';

class Buttonbar extends React.Component {
  render() {
      return (
  <Button bsStyle='success' onClick={this.props.showadd}><Icon glyph='icon-fontello-plus'/>  เพิ่มหน่วยงาน</Button>
      );
  }
}

class PositionSelectionform extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {
                selection:<Checkbox/>,
                ppl_position:"พยาบาล"
              },
              {
                selection:<Checkbox/>,
                ppl_position:"หมอ"
              },
              {
                selection:<Checkbox/>,
                ppl_position:"ผู้ช่วยพยาบาล"
              }
          ]
        };
      }

    render() {
        return (
        <Form>
            <ReactTable
            data={this.state.data}
            noDataText="ไม่พบข้อมูล"
            filterable
            defualtFilterMethod={(filter, row)=>
                String(row[filter.id])===filter.value ||
                row[filter.id].includes(filter.value)}
            columns={[
              {
                Header: "ตัวเลือก",
                accessor: "selection",
                width:65
              },
              {
                Header: "ตำแหน่ง",
                accessor:"ppl_position"
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </Form>
        );
    }
}

class Organizationform extends React.Component {
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  submitform(){
    this.props.submit();
  }
  constructor(props){
    super(props);
    this.state = {showModal:false};
    this.submitform = this.submitform.bind(this);
  }
    render() {
        return (
          <PanelContainer>
          <Panel>
          <PanelHeader className='bg-blue'>
              <Grid>
              <Row>
              <Col xs={12} className='fg-white'>
                  <h3>เพิ่มหน่วยงาน</h3>
              </Col>
              </Row>
              </Grid>
          </PanelHeader>
            <PanelBody>
            <Col xs={12}>
            <Form>
            <Row>
            <Col xs={6} md={6}>
            <FormGroup controlId="organization">
                <ControlLabel>ชื่อหน่วยงาน</ControlLabel>
                <FormControl type="text" placeholder="Organization"/>
            </FormGroup>
            </Col>
            </Row>
            </Form>
            <Button bsStyle='success' onClick={::this.open}><Icon glyph='icon-fontello-plus'/>  เพิ่มตำแหน่งในหน่วยงาน</Button>
            <Modal show={this.state.showModal} onHide={::this.close}>
            <Modal.Header closeButton>
            <Modal.Title>เพิ่มตำแหน่งในหน่วยงาน</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <PositionSelectionform/>
            </Modal.Body>
            <Modal.Footer>
            <Button bsStyle='success' onClick={::this.close}>ตกลง</Button>
            <Button onClick={::this.close}>ยกเลิก</Button>
            </Modal.Footer>
            </Modal>
            <hr/>
        <ReactTable
            data={[{org_position:"พนักงานต้อนรับ",delete:<Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>}]}
            noDataText="ไม่มีตำแหน่ง"
            showPaginationBottom = {false}
            columns={[
              {
                Header: "ตำแหน่ง",
                accessor: "org_position"
              },
              {
                Header: "",
                accessor: "delete",
                width: 150,
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
          <br/>
          <Button bsStyle='success' onClick={this.props.submit}>ตกลง</Button>{' '}
          <Button onClick={this.submitform}>ยกเลิก</Button>
          <br/>
          </Col>
          </PanelBody>
          </Panel> 
        </PanelContainer>
        );
    }
}

class Organizationtable extends React.Component {
    constructor() {
        super();
        this.state = {
          data: [
              {
                organization:"Mahidol",
                moreinfo:<Button bsStyle='success' href='/organizationposition'><Icon glyph='icon-fontello-search'/>   ดูรายละเอียด</Button>
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
                Header: "หน่วยงาน",
                accessor: "organization"
              },
              {
                Header: "ดูรายละเอียดเพิ่มเติม",
                accessor:"moreinfo"
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        );
    }
}
class OrganizationPage extends React.Component {
  showadd(){
    this.setState({addshow:true});
  }
  submit(){
    this.setState({addshow:false});
  }
  constructor(props){
    super(props);

    this.state = {
      addshow: false
    };
    this.showadd = this.showadd.bind(this);
    this.submit = this.submit.bind(this);
  }
    render() {
          var show=<PanelContainer>
            <Panel>
            <PanelHeader className='bg-blue'>
                <Grid>
                <Row>
                <Col xs={12} className='fg-white'>
                    <h3>ข้อมูลหน่วยงาน</h3>
                </Col>
                </Row>
                </Grid>
            </PanelHeader>
              <PanelBody>
                <br/>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <Buttonbar showadd={this.showadd}/>
                      <hr/>
                      <Organizationtable />
                      <br/>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>;

      if(this.state.addshow == true){
        show = <Organizationform submit={this.submit}/>;
      }
    return(
      <Row>
        <Col xs={12}>
          {show}
        </Col>
      </Row>
    );
  }
}
export default OrganizationPage;