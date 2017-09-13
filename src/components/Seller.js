import React , { Component } from 'react';
import ReactTable from "react-table";
import {
  Row,
  Col,
  PanelContainer,
  Panel,
  BPanel,
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
              company:"123",
              address:"12/78",
              contact:"00000",
              select:<Button bsStyle='success' onClick={::this.close}>เลือก</Button>
            }
        ];
        return (
    <div>

    <Button bsStyle='success' onClick={::this.open}>เลือกผู้ขาย</Button>
    <hr/>
    <Modal lg show={this.state.showModal} onHide={::this.close}>
      <Modal.Header closeButton>
      <Modal.Title>เลือกผู้ขาย</Modal.Title>
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
                Header: "บริษัท",
                accessor:"company"
              },
              {
                Header: "ที่อยู่",
                accessor:"address"
              },
              {
                Header: "ข้อมูลติดต่อ",
                accessor:"contact"
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
              <h4>ข้อมูลผู้ขาย</h4>
            <BPanel>
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

                        <FormGroup controlId="company">
                        <Col componentClass={ControlLabel} xs={2}>
                            บริษัท
                        </Col>
                        <Col sm={6}>
                        <FormControl type="text" placeholder="ชื่อ บริษัท" disabled active/>
                        </Col>
                        </FormGroup>

                        <FormGroup controlId="address">
                        <Col componentClass={ControlLabel} xs={2}>
                            ที่อยู่
                        </Col>
                        <Col sm={6}>
                        <FormControl type="text" placeholder="ที่อยู่" disabled active/>
                        </Col>
                        </FormGroup>

                        <FormGroup controlId="contact">
                        <Col componentClass={ControlLabel} xs={2}>
                            ข้อมูลต่อต่อ
                        </Col>
                        <Col sm={6}>
                        <FormControl type="text" placeholder="ที่อยู่" disabled active/>
                        </Col>
                        </FormGroup>
                    </Form>
                </Col>
                </Row>
            </Grid>
          </BPanel>
        </Panel>
      </PanelContainer>
    );
  }
}
