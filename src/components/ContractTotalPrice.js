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
            initial_price : this.props.objd.initial_price,
            vat : parseFloat(this.props.objd.initial_price*0.07).toFixed(2),
            totalprice: null
        };
    }

    render(){
    this.setState({
        totalprice :parseFloat(this.props.objd.initial_price + parseFloat(this.state.vat)).toFixed(2)
    });
    return(
    <Col xs={4}>
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
                        <FormControl type="text" placeholder="จำนวนยาและเวชภัณฑ์" value={this.state.initial_price} disabled active/>
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}>
                            บาท
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
      </Col>
    );
  }
}