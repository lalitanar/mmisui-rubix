import React , { Component } from 'react';
import ReactTable from "react-table";
import {
  Row,
  Col,
  PanelContainer,
  Panel,
  PanelBody,
  PanelFooter,
  Grid,
  Button,
  Icon,
  ButtonGroup,
  PanelHeader,
  PanelTabContainer,
  Nav,
  NavItem,
  Tab,
  ButtonToolbar,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Modal
} from '@sketchpixy/rubix';

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

    <Button bsStyle='success' onClick={::this.open}>เลือกชุดกรรมการ</Button>
    <hr/>
    <Modal lg show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เลือกชุดกรรมการ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ReactTable
            data={this.state.data}
            noDataText="ไม่พบข้อมูล"
            filterable
            defualtFilterMethod={(filter, row)=>
                String(row[filter.id])===filter.value ||
                row[filter.id].includes(filter.value)}
            columns={[
              {
                Header: "ชุดที่",
                accessor: "group_no",
                width:60
              },
              {
                Header: "ประธานกรรมการตรวจรับ",
                accessor:"Director"
              },
              {
                Header: "กรรมการตรวจรับ",
                accessor:"member1"
              },
              {
                Header: "กรรมการตรวจรับ",
                accessor:"member2"
              },
              {
                Header: "",
                accessor:"select",
                width:100
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={::this.close}>ยกเลิก</Button>
      </Modal.Footer>
    </Modal>
    </div>
        );
    }
}

export default class ContractTotalValue extends Component {
    render(){
    return(
    <Col xs={12}>
      <PanelContainer>
          <Panel>
              <PanelHeader className='bg-lightblue fg-white'>
                  <Grid>
                      <Row>
                          <Col xs={12}>
                              <h3>คณะกรรมการตรวจรับ</h3>
                          </Col>
                      </Row>
                  </Grid>
            </PanelHeader>
            <PanelBody>
            <Grid>
            <Buttonbar />
                <Row>
                <Col xs={12}>
                    <Form horizontal innline>
                        <FormGroup controlId="Director">
                        <Col componentClass={ControlLabel} xs={2}>
                            ประธานกรรมการตรวจรับ
                        </Col>
                        <Col sm={4}>
                        <FormControl type="text" placeholder="ชื่อ-สกุล" disabled active/>
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}>
                            ตำแหน่ง
                        </Col>
                        <Col sm={4}>
                        <FormControl type="text" placeholder="ตำแหน่ง" disabled active/>
                        </Col>
                        </FormGroup>

                        <FormGroup controlId="member1">
                        <Col componentClass={ControlLabel} xs={2}>
                            กรรมการตรวจรับ
                        </Col>
                        <Col sm={4}>
                        <FormControl type="text" placeholder="ชื่อ-สกุล" disabled active/>
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}>
                            ตำแหน่ง
                        </Col>
                        <Col sm={4}>
                        <FormControl type="text" placeholder="ตำแหน่ง" disabled active/>
                        </Col>
                        </FormGroup>

                        <FormGroup controlId="member2">
                        <Col componentClass={ControlLabel} xs={2}>
                            กรรมการตรวจรับ
                        </Col>
                        <Col sm={4}>
                        <FormControl type="text" placeholder="ชื่อ-สกุล" disabled active/>
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}>
                            ตำแหน่ง
                        </Col>
                        <Col sm={4}>
                        <FormControl type="text" placeholder="ตำแหน่ง" disabled active/>
                        </Col>
                        </FormGroup>
                    </Form>
                </Col>
                </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    </Col>
    );
  }
}