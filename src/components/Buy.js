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
        var data = [
            {
              name:"นายโดนัลดั๊ก เดซี่",
              position:"A",
              select:<Button bsStyle='success' onClick={::this.close}>เลือก</Button>
            }
        ];
        return (
    <div>

    <Button bsStyle='success' onClick={::this.open}>เลือกผู้ซื้อ</Button>
    <hr/>
    <Modal lg show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เลือกผู้ซื้อ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ReactTable
            data={data}
            noDataText="ไม่พบข้อมูล"
            filterable
            defualtFilterMethod={(filter, row)=>
                String(row[filter.id])===filter.value ||
                row[filter.id].includes(filter.value)}
            columns={[
              {
                Header: "ชื่อ-สกุล",
                accessor:"name"
              },
              {
                Header: "ตำแหน่ง",
                accessor:"position"
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
    var selecting_phrase = this.props.objd.selecting_phrase
    var showbutton = null
    if(selecting_phrase === true){
        showbutton = <Buttonbar/>
    }
    return(
      <PanelContainer>
          <Panel>
              <PanelHeader className='bg-blue fg-white'>
                  <Grid>
                      <Row>
                          <Col xs={12}>
                              <h3>ข้อมูลผู้ซื้อ</h3>
                          </Col>
                      </Row>
                  </Grid>
            </PanelHeader>
            <PanelBody>
            <Grid>
            {showbutton}
                <Row>
                <Col xs={12}>
                    <Form horizontal >
                        <FormGroup controlId="name">
                        <Col componentClass={ControlLabel} xs={2}>
                            ชื่อ-สกุล
                        </Col>
                        <Col sm={4}>
                        <FormControl type="text" placeholder="ชื่อ-สกุล" disabled active/>
                        </Col>
                        </FormGroup>

                        <FormGroup controlId="position">
                        <Col componentClass={ControlLabel} xs={2}>
                            ตำแหน่ง
                        </Col>
                        <Col sm={6}>
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
    );
  }
}
