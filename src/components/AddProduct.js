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
} from '@sketchpixy/rubix';

class AddProduct extends Component {
  constructor(props){
    super(props);

    this.state = {
    };
  }
  render(){
    var Organiz= [{Organization:"OrganizationA",Remark:<Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>}]
    var Product= [{ProductLabeler:"ProductLabelerA",Remark:<Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>}]
    var Package= [{Package:"ProductLabelerA",Remark:<Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>}]
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
                      <h4>เพิ่มข้อมูล</h4>
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

                      <FormGroup controlId='searchbtnicon'>
                        <InputGroup>
                          <FormControl type='text' placeholder='Enter keywords here ...' />
                          <InputGroup.Addon className='plain'>
                            <Button>
                              <span>Search </span>
                              <Icon bundle='fontello' glyph='search' />
                            </Button>
                          </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <Button bsStyle='success'><Icon glyph='icon-ikons-magnifying-glass-add'/> เพิ่มรูปแบบบรรจจุภัณฑ์</Button>
                        <ReactTable
                          data={Package}
                          noDataText="ไม่มีรูปแบบบรรจจุภัณฑ์"
                          showPageJump='false'
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
                        <Button bsStyle='success'><Icon glyph='icon-ikons-magnifying-glass-add'/> เพิ่มผู้ผลิต</Button>
                        <ReactTable
                          data={Organiz}
                          noDataText="ไม่มีผู้ผลิต"
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
                        <Button bsStyle='success'><Icon glyph='icon-ikons-magnifying-glass-add'/> เพิ่มผู้จำหน่าย</Button>
                        <ReactTable
                          data={Product}
                          noDataText="ไม่มีผู้ผลิต"
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
                        <Button className='pull-right' bsStyle="success" onClick={this.submitsup}>บันทึกข้อมูล</Button>
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
