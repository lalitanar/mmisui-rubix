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

export default class ContractFine extends Component {
    render(){
    return(
      <PanelContainer>
          <Panel>
              <PanelHeader className='bg-blue fg-white'>
                  <Grid>
                      <Row>
                          <Col xs={12}>
                              <h3>โครงการ</h3>
                          </Col>
                      </Row>
                  </Grid>
            </PanelHeader>
            <PanelBody>
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
