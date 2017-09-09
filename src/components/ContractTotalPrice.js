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
  FormControl
} from '@sketchpixy/rubix';

export default class ContractTotalValue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial_price : null,
            quantity : null,
            price : this.props.objd.price,
            vat : null,
            totalprice : null
        };
        this.changedata = this.changedata.bind(this)
    }

    changedata(e) {
        this.setState({
            quantity: e.target.value,
            initial_price : (this.state.quantity)*(this.state.price),
            vat: this.state.initial_price*0.07,
            totalprice: this.state.initial_price + this.state.vat
        });
        console.log('success!');
    }

    render(){
    return(
      <PanelContainer>
          <Panel>
              <PanelHeader className='bg-blue fg-white'>
                  <Grid>
                      <Row>
                          <Col xs={12}>
                              <h3>ยอดการทำสัญญา</h3>
                          </Col>
                      </Row>
                  </Grid>
            </PanelHeader>
            <PanelBody>
            <Grid>
                <Row>
                <Col xs={12}>
                    <Form horizontal>
                        <FormGroup controlId="Quantity">
                        <Col componentClass={ControlLabel} xs={4}>
                            จำนวน
                        </Col>
                        <Col sm={6}>
                        {/*<div>{this.state.quantity}x{this.state.price}={this.state.initial_price}</div>*/}
                        <FormControl type="text" placeholder="จำนวนยาและเวชภัณฑ์" value={this.state.quantity} onChange={this.changedata}/>
                        </Col>
                        </FormGroup>

                        <FormGroup controlId="Vat">
                        <Col componentClass={ControlLabel} xs={4}>
                            VAT
                        </Col>
                        <Col sm={6}>
                        <FormControl type="text" placeholder="ภาษี" value={this.state.vat} disabled active/>
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}>
                            บาท
                        </Col>
                        </FormGroup>

                        <FormGroup controlId="TotalContractPrice">
                        <Col componentClass={ControlLabel} xs={4}>
                            ยอดการทำสัญญา
                        </Col>
                        <Col sm={6}>
                        <FormControl type="text" placeholder="ยอดเงินการทำสัญญา" value={this.state.totalprice} disabled active/>
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}>
                            บาท
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
