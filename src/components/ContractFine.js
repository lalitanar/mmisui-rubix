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
  BPanel,
  NavItem,
  Tab,
  ButtonToolbar,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from '@sketchpixy/rubix';

export default class ContractFine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fine : 0
        };
    }
    render(){
    return(
      <PanelContainer>
          <Panel>
            <h4>ค่าปรับ</h4>
            <BPanel>
            <Grid>
                <Row>
                <Col xs={12}>
                    <Form horizontal>
                        <FormGroup controlId="finetype">
                        <Col componentClass={ControlLabel} xs={3}>
                            ประเภทการปรับ
                        </Col>
                        <Col sm={6}>
                        <FormControl componentClass="select" placeholder="finetype" inline>
                            <option value="0">ปรับเฉพาะที่ยังไม่ส่งมอบ</option>
                            <option value="1">ปรับเฉพาะที่ส่งมอบแล้ว</option>
                            <option value="2">ปรับที่ยังไม่ส่งมอบและส่งมอบแล้ว</option>
                        </FormControl>
                        </Col>
                        </FormGroup>

                        <FormGroup controlId="fine">
                        <Col componentClass={ControlLabel} xs={3}>
                            ค่าปรับ
                        </Col>
                        <Col sm={4}>
                        <FormControl type="text" />
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}>
                            %&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ต่อ
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}/>
                        <Col componentClass={ControlLabel} xs={2}>
                            <FormControl componentClass="select" placeholder="fineper" inline>
                                <option value="0">วัน</option>
                                <option value="1">เดือน</option>
                                <option value="2">ปี</option>
                            </FormControl>
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
