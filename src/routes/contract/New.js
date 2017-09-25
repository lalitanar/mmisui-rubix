import React from "react";
import { render } from "react-dom";
import _ from 'lodash'
import ToggleButton from 'react-toggle-button'
import { makeData, Logo, Tips } from "./Utils.js";
import ReactTable from "react-table";
import BoardofDirectors from "../../components/BoardofDirectors"
import ContractTotalPrice from "../../components/ContractTotalPrice"
import Seller from "../../components/Seller"
import Buy from "../../components/Buy"
import ContractFine from "../../components/ContractFine"
import Project from "../../components/Project"
import {
    Row,
    Col,
    Grid,
    Panel,
    Table,
    PanelBody,
    BPanel,
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
    HelpBlock,
} from '@sketchpixy/rubix';


class Dform extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }
    render() {
        const { data } = this.state;
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
                            Header: "รายการยาและเวชภัณฑ์",
                            columns: [
                                {
                                    Header: "รหัสยาและเวชภัณฑ์",
                                    accessor: "ID"
                                },
                                {
                                    Header: "ชื่อยาและเวชภัณฑ์",
                                    accessor: "Name"
                                }
                            ]
                        },
                        {
                            Header: "ข้อมูลเพิ่มเติม",
                            columns: [
                                {
                                    Header: "ประเภท",
                                    accessor: "LocalType"
                                },
                                {
                                    Header: "เพิ่ม",
                                    accessor: "Add"
                                },
                            ]
                        }
                    ]}
                    defaultPageSize={5}
                    className="-striped -highlight"
                />


                <br />
            </div>
        );
    }
}

class BarAdd extends React.Component {
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
                <Button bsStyle='success' onClick={::this.open}>
                    <Icon glyph='icon-fontello-plus' /> เพิ่ม</Button>
            <Modal show={this.state.showModal} onHide={::this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>เพิ่มรายการ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Dform />
                </Modal.Body>
                <Modal.Footer>
                    <Col xs={12}>
                    <FormGroup>
                        <ControlLabel>จำนวน</ControlLabel>
                        <FormControl type="text" placeholder=" " />
                    </FormGroup>
                </Col>
                    <Button bsStyle='success' onClick={::this.close}>เพิ่ม</Button>
                <Button onClick={::this.close}>ยกเลิก</Button>
      </Modal.Footer>
    </Modal>
    </div>
        );
    }
}

class BarUP extends React.Component {
    render() {
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
        }
        return (
            <div>
                <Button bsStyle='success' href="#">
                    <Icon glyph='icon-fontello-plus' /> เพิ่ม
        </Button>


      </div>
        );
    }
}

class Bar extends React.Component {
    render() {
        return (
            <div>
                <ButtonToolbar>
                    <Button bsStyle="success" onClick={this.props.submit}>
                        <Icon glyph='icon-fontello-floppy' /> บันทึก
                    </Button>
                    <Button bsStyle="danger" onClick={this.props.submit}>
                        <Icon glyph='icon-fontello-cancel' /> ยกเลิก
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}

class TableD extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }
    render() {
        const { data } = this.state;
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
                            Header: "รายการยาและเวชภัณฑ์",
                            columns: [
                                {
                                    Header: "รหัสยาและเวชภัณฑ์",
                                    accessor: "ID"
                                },
                                {
                                    Header: "ชื่อยาและเวชภัณฑ์",
                                    accessor: "Name"
                                }
                            ]
                        },
                        {
                            Header: "ข้อมูลเพิ่มเติม",
                            columns: [
                                {
                                    Header: "ประเภท",
                                    accessor: "LocalType"
                                },
                                {
                                    Header: "เพิ่ม",
                                    accessor: "Add"
                                },
                            ]
                        }
                    ]}
                    defaultPageSize={1}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}


class TableDNoData extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData(0)
        };
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <BarAdd />
                <hr />
                <ReactTable
                    data={data}
                    noDataText="ไม่พบข้อมูล"
                    filterable
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value ||
                        row[filter.id].includes(filter.value)}
                    columns={[
                        {
                            Header: "รายการยาและเวชภัณฑ์",
                            columns: [
                                {
                                    Header: "รหัสยาและเวชภัณฑ์"
                                },
                                {
                                    Header: "ชื่อยาและเวชภัณฑ์    "
                                }
                            ]
                        },
                        {
                            Header: "ข้อมูลเพิ่มเติม",
                            columns: [
                                {
                                    Header: "ราคาต่อหน่วย"
                                },
                                {
                                    Header: "จำนวน"
                                },
                                {
                                    Header: "เพิ่มเติม"
                                },
                            ]
                        }
                    ]}
                    defaultPageSize={1}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}

class FormContact extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={4} >
                    <FormGroup>
                        <ControlLabel>เลขที่สัญญา</ControlLabel>
                        <FormControl type="text" placeholder=" " />
                    </FormGroup>
                </Col>
                <Col xs={4} >
                    <FormGroup>
                        <ControlLabel>วันที่เริ่มสัญญา</ControlLabel>
                        <FormControl type="text" placeholder=" " />
                    </FormGroup>
                </Col>
                <Col xs={4} >
                    <FormGroup>
                        <ControlLabel>วันที่สิ้นสุดสัญญา</ControlLabel>
                        <FormControl type="text" placeholder=" " />
                    </FormGroup>
                </Col>
            </Row>
        );
    }
}

class FormBuy extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <PanelContainer>
                        <Panel>
                            <PanelHeader className='bg-blue'>
                                <Grid>
                                    <Row>
                                        <Col xs={12} className='fg-white'>
                                            <h4>ข้อมูลผู้ขอซื้อ</h4>
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelHeader>
                            <PanelBody>
                                <Grid>
                                    <Row>
                                        <BarUP />
                                        <hr />
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

class FormSale extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <PanelContainer>
                        <Panel>
                            <PanelHeader className='bg-blue'>
                                <Grid>
                                    <Row>
                                        <Col xs={12} className='fg-white'>
                                            <h4>ข้อมูลผู้ขาย</h4>
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelHeader>
                            <PanelBody>
                                <Grid>
                                    <Row>
                                        <BarUP />
                                        <hr />
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

class FormMore extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <PanelContainer>
                        <Panel>
                            <h4>อื่นๆ</h4>
                            <BPanel>
                                <Grid>
                                    <Row>
                                        <FormGroup controlId="formControlsFile">
                                            <ControlLabel>เอกสารสัญญาเพิ่มเติม</ControlLabel>
                                            <FormControl type="file" />
                                            <HelpBlock>เลือกไฟล์เอกสารสัญญาเพิ่มเติม</HelpBlock>
                                        </FormGroup>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>หมายเหตุ</ControlLabel>
                                            <FormControl componentClass="textarea" placeholder="หมายเหตุ" />
                                        </FormGroup>
                                    </Row>
                                </Grid>
                            </BPanel>
                        </Panel>
                    </PanelContainer>
                </Col>
            </Row>
        );
    }
}

class FormNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: true};
    }
    render() {
        let val = this.state.value;
        let state = "";
        if(this.props.state == "0" || this.props.state == "0"){
          state = "รออนุมัติการจัดชื้้อ";
        }else if(this.props.state =="1"){
          state = "อนุมัติการจัดชื้้อ";
        }else if(this.props.state =="2" || this.props.state =="3"){
          state = "สัญญา";
        }else{
        }
        return (
            <Panel>
                <Form>
                    <Row>
                        <Col xs={4} >
                            <FormGroup>
                                <ControlLabel >สถานะ</ControlLabel>
                                <FormControl type="text" value={state} disabled/>
                            </FormGroup>
                        </Col>
                        <Col xs={4}>
                          <FormGroup>
                              <ControlLabel >ชนิดสัญญา</ControlLabel>
                                <FormControl componentClass="select" placeholder="1"  >
                                  <option value="0">ภายใน</option>
                                  <option value="1">เขต</option>
                                  <option value="2">จังหวัด</option>
                              </FormControl>
                          </FormGroup>
                        </Col>
                        <Col xs={4} >
                            <FormGroup>
                        <ControlLabel>สถานะการทำงาน</ControlLabel>
                          <ToggleButton
                          inactiveLabel={"ปิด"}
                          activeLabel={"เปิด"}
                          value={this.state.status}
                          onToggle={(value) => {
                            this.setState({status:!value})
                            }}
                            />

                    </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} >
                            <FormGroup>
                                <ControlLabel>เลขที่เตรียมสัญญา</ControlLabel>
                                <FormControl type="text" placeholder=" " disabled/>
                            </FormGroup>

                        </Col>
                        <Col xs={4} >
                            <FormGroup>
                                <ControlLabel>วันที่สร้าง</ControlLabel>
                                <FormControl type="text" placeholder=" " disabled/>
                            </FormGroup>
                        </Col>
                        <Col xs={4} >
                            <FormGroup>
                                <ControlLabel>วันที่แก้ไข</ControlLabel>
                                <FormControl type="text" placeholder=" " disabled/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Panel>
        );
    }
}

class TableDNoDataS extends React.Component {
  render(){
    return(
              <PanelContainer>
                  <Panel>
                      <h4>รายการยาและเวชภัณฑ์ที่จะทำสัญญา</h4>
                      <BPanel>
                          <Grid>
                              <Row>
                                  <Col xs={12}>
                                      <TableDNoData />
                                  </Col>
                              </Row>
                          </Grid>
                      </BPanel>
                  </Panel>
              </PanelContainer>
    );
  }
}


export default class PanelBodyHeaderAndFooter extends React.Component {
  constructor(props) {
      super(props);
      this.submit = this.props.submit.bind(this)
  }
    render() {
      let buy=<div/>;
      let seller=<div/>;
      let boardofdirectors=<div/>;
      let contracttotalprice=<div/>;
      let contractfine=<div/>;
      let project=<div/>;
      let formcontact=<div/>;
      switch ( parseInt(this.props.state)) {
        case 0:
            buy=<Buy objd={{selecting_phrase:true}} />
            project=<div/>;
            seller=<div/>;
            boardofdirectors=<div/>;
            contracttotalprice=<ContractTotalPrice objd={{initial_price:20}}/>
            contractfine=<div/>;
            formcontact=<div/>
            console.log("c0");
        break;
        case 1:
            buy=<Buy objd={{selecting_phrase:false}} />
            project=<Project/>
            seller=<Seller objd={{selecting_phrase:false}} />
            boardofdirectors=<BoardofDirectors objd={{selecting_phrase:true}}/>
            contracttotalprice=<ContractTotalPrice objd={{initial_price:20}}/>
            contractfine=<ContractFine objd={{fine_d:20,fine_m:30,fine_y:300}} />
            formcontact=<div/>
            console.log("c1");
        break;
        case 2:
            buy=<Buy objd={{selecting_phrase:false}} />
            project=<Project/>
            seller=<Seller objd={{selecting_phrase:false}} />
            boardofdirectors=<BoardofDirectors objd={{selecting_phrase:false}}/>
            contracttotalprice=<ContractTotalPrice objd={{initial_price:20}}/>
            contractfine=<ContractFine objd={{fine_d:20,fine_m:30,fine_y:300}} />
            formcontact=<div/>
            console.log("c2");
        break;
        case 3:
            buy=<Buy objd={{selecting_phrase:true}} />
            project=<Project/>
            seller=<Seller objd={{selecting_phrase:true}} />
            boardofdirectors=<BoardofDirectors objd={{selecting_phrase:true}}/>
            contracttotalprice=<ContractTotalPrice objd={{initial_price:20}}/>
            contractfine=<ContractFine objd={{fine_d:20,fine_m:30,fine_y:300}} />
            formcontact=<FormContact/>
            console.log("c3");
          break;
        default:

      }
        return (
            <Row>
                <Col xs={12}>
                    <PanelContainer>
                        <Panel>
                            <PanelHeader className='bg-blue'>
                                <Grid>
                                    <Row>
                                        <Col xs={12} className='fg-white'>
                                            <h3>รายละเอียดสัญญา</h3>
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelHeader>
                            <PanelBody>
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <FormNew state={this.props.state}/>
                                            {formcontact}
                                            <TableDNoDataS state={this.props.state}/>
                                            {contracttotalprice}
                                        </Col>
                                        <Col xs={12}>
                                            {project}
                                            {buy}
                                        </Col>
                                        <Col xs={12}>

                                            {seller}
                                        </Col>
                                        <Col xs={12}>
                                          {boardofdirectors}
                                        </Col>
                                        <Col xs={12}>

                                            {contractfine}
                                            <FormMore />
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelBody>
                            <PanelFooter className='bg-lightblue'>
                                <Grid>
                                    <Row>
                                        <Col xs={12} className='fg-white'>
                                            <br />
                                            <Bar submit={this.submit}/>
                                            <br />
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
