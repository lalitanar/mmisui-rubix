import React , { Component } from 'react';
import ReactTable from "react-table";
import {
  Button,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Radio,
  Row,
  Col,
  PanelHeader,
  Grid,
  PanelBody,
  Panel,
  PanelContainer,
  PanelFooter,
  Icon,
  InputGroup,
  Modal,
} from '@sketchpixy/rubix';
class Addtmt extends Component {
  constructor(props) {
      super(props);
      this.state = { showModal: false,data:[]};
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
        <Button bsStyle='success' onClick={::this.open}><Icon glyph='icon-ikons-magnifying-glass-add'/> เพิ่ม TMT</Button>
        <Modal show={this.state.showModal} onHide={::this.close}>
          <Modal.Header closeButton>
          <Modal.Title>เพิ่ม TMT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReactTable
              data={this.state.data}
              noDataText="ไม่พบ"
              showPageJump='false'
              filterable
              columns={[
                {
                  Header: "TPU",
                  accessor: "TPU"
                },
                {
                  Header: "เพิ่มเติม",
                  accessor: "Remark",
                  width: 150,
                }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </Modal.Body>
          <Modal.Footer>
          <Button bsStyle='danger' onClick={::this.close}>ยกเลิก</Button>
          </Modal.Footer>
        </Modal>
        </div>
      );
  }
}

class Addiitem extends Component {
  componentWillMount(){
    let type = this.props.type;
    let pdata = [{Name:"1 กล่อง 100 เม็ด",Remark:<Button bsStyle='success'><Icon glyph='icon-simple-line-icons-plus'/></Button>}];
    let odata = [{Name:"โรงงานผลิต 1",Remark:<Button bsStyle='success'><Icon glyph='icon-simple-line-icons-plus'/></Button>}];
    let ldata = [{Name:"ผู้จำหน่าย 1",Remark:<Button bsStyle='success'><Icon glyph='icon-simple-line-icons-plus'/></Button>}];
    switch (type) {
      case "package":
        this.setState({title:"บรรจจุภัณฑ์"});
        this.setState({data:pdata});
        break;
      case "organization":
      this.setState({title:"ผู้ผลิต"});
      this.setState({data:odata});
        break;
      case "productlaberler":
      this.setState({title:"ผู้จำหน่าย"});
      this.setState({data:ldata});
        break;
      default:
    }
  }
  constructor(props) {
      super(props);
      this.state = { showModal: false,title:"",data:[] };
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
        <Button bsStyle='success' onClick={::this.open}><Icon bundle='fontello' glyph='search' /> เพิ่ม {this.state.title}</Button>
        <Modal show={this.state.showModal} onHide={::this.close}>
          <Modal.Header closeButton>
          <Modal.Title>เพิ่ม {this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReactTable
              data={this.state.data}
              noDataText={"ไม่พบ"+this.state.title}
              showPageJump='false'
              filterable
              columns={[
                {
                  Header: "ชื่อ",
                  accessor: "Name"
                },
                {
                  Header: "เพิ่มเติม",
                  accessor: "Remark",
                  width: 150,
                }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </Modal.Body>
          <Modal.Footer>
          <Button bsStyle='success' onClick={::this.close}>เสร็จสิ้น</Button>
          </Modal.Footer>
        </Modal>
        </div>
      );
  }
}
class AddProduct extends Component {
  addtolist(type,add){
    switch (type) {
      case "package":
      this.setState({ Package: this.state.Package.concat([add])})
        break;
      case "organization":
      this.setState({ Organiz: this.state.Organiz.concat([add])})
        break;
      case "productlaberler":
      this.setState({ Product: this.state.Product.concat([add])})
        break;
      default:
    }
  }
  submitpro(){
    this.props.submit();
  }
  constructor(props){
    super(props);

    this.state = {
      Organiz:[{Organization:"OrganizationA",Remark:<Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>}],
      Product:[{ProductLabeler:"ProductLabelerA",Remark:<Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>}],
      Package:[{Package:"ProductLabelerA",Remark:<Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>}]
    };
    this.submitpro = this.submitpro.bind(this);
    this.addtolist = this.addtolist.bind(this);
  }
  render(){
    return(
      <div>
        <Row>
          <Col sm={12}>
            <PanelContainer>
              <Panel>
              <PanelHeader className='bg-blue'>
                 <Grid>
                   <Row>
                    <Col xs={12} className='fg-white'>
                      <h4>เพิ่มข้อมูลผลิตภัณฑ์</h4>
                    </Col>
                   </Row>
                 </Grid>
                </PanelHeader>
              <PanelBody>
                <Grid>
                    <Row>
                      <Col xs={6}>
                        <FormGroup>
                          <ControlLabel>รหัสผลิตภัณฑ์</ControlLabel>
                           <FormControl type="text" />
                        </FormGroup>
                      </Col>
                      <Col xs={6}>
                        <FormGroup>
                          <ControlLabel>ชื่อผลิตภัณฑ์</ControlLabel>
                           <FormControl type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <FormGroup>
                          <ControlLabel>รหัสชื่อสามัญ</ControlLabel>
                           <FormControl type="text" />
                        </FormGroup>
                      </Col>
                      <Col xs={6}>
                      <FormGroup>
                        <ControlLabel>รหัส TMT</ControlLabel>
                        <InputGroup>
                          <FormControl disabled type='text'/>
                          <InputGroup.Addon className='plain'>
                            <Addtmt/>
                          </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <FormGroup>
                          <ControlLabel>GP</ControlLabel>
                           <FormControl disabled type="text" />
                        </FormGroup>
                      </Col>
                      <Col xs={6}>
                        <FormGroup>
                          <ControlLabel>ประเภทยา</ControlLabel>
                           <FormControl disabled type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                      <Addiitem additem={this.addtolist} type="package"/>
                        <ReactTable
                          data={this.state.Package}
                          noDataText="ไม่มีรูปแบบบรรจจุภัณฑ์"
                          showPaginationBottom = {false}
                          columns={[
                            {
                              Header: "รูปแบบบรรจจุภัณฑ์",
                              accessor: "Package"
                            },
                            {
                              Header: "เพิ่มเติม",
                              accessor: "Remark",
                              width: 150,
                            }
                          ]}
                          defaultPageSize={5}
                          className="-striped -highlight"
                        />
                      </Col>
                      <Col xs={4}>
                        <Addiitem additem={this.addtolist} type="organization"/>
                        <ReactTable
                          data={this.state.Organiz}
                          noDataText="ไม่มีผู้ผลิต"
                          showPaginationBottom = {false}

                          columns={[
                            {
                              Header: "ผู้ผลิต",
                              accessor: "Organization"
                            },
                            {
                              Header: "เพิ่มเติม",
                              accessor: "Remark",
                              width: 150,
                            }
                          ]}
                          defaultPageSize={5}
                          className="-striped -highlight"
                        />
                      </Col>
                      <Col xs={4}>
                        <Addiitem additem={this.addtolist} type="productlaberler"/>
                        <ReactTable
                          data={this.state.Product}
                          noDataText="ไม่มีผู้ผลิต"
                          showPaginationBottom = {false}

                          columns={[
                            {
                              Header: "ผู้จำหน่าย",
                              accessor: "ProductLabeler"
                            },
                            {
                              Header: "เพิ่มเติม",
                              accessor: "Remark",
                              width: 150,
                            }
                          ]}
                          defaultPageSize={5}
                          className="-striped -highlight"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className='fg-white'>
                        <hr/>
                        <Button className='pull-right' bsStyle="danger" onClick={this.props.submit}>ยกเลิก</Button>
                        <Button className='pull-right' bsStyle="success" onClick={this.submitpro}>บันทึกข้อมูล</Button>
                      </Col>
                    </Row>
                  </Grid>
                  </PanelBody>
                  <PanelFooter>
                    <Grid>
                      <br/>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
          </Col>
        </Row>
      </div>
    );
  }
}
export default AddProduct;
