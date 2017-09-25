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
  FormControl
} from '@sketchpixy/rubix';

export default class ContractFine extends Component {
    render(){
    return(
      <PanelContainer>
          <Panel>
              <h4>โครงการ</h4>
            <BPanel>
            <Grid>
                <Row>
                <Col xs={12}>
                    <Form horizontal>
                        <FormGroup controlId="projectNumber">
                        <Col componentClass={ControlLabel} xs={3}>
                            เลขโครงการ
                        </Col>
                        <Col sm={6}>
                        <FormControl type="text"/>
                        </Col>
                        </FormGroup>

                        <FormGroup controlId="projectName">
                        <Col componentClass={ControlLabel} xs={3}>
                            ชื่อโครงการ
                        </Col>
                        <Col sm={6}>
                        <FormControl type="text"/>
                        </Col>
                        </FormGroup>
                        <FormGroup controlId="egpNumber">
                        <Col componentClass={ControlLabel} xs={3}>
                            เลขที่คุมสัญญาในระบบ e-GP
                        </Col>
                        <Col sm={6}>
                        <FormControl type="text"/>
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
