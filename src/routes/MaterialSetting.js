import React from "react";
import { render } from "react-dom";
// Import React Table
import ReactTable from "react-table";
import {
    Row,
    Col,
    Grid,
    Panel,
    Table,
    PanelBody,
    PanelHeader,
    PanelFooter,
    FormControl,
    PanelContainer,
    DropdownButton,
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
} from '@sketchpixy/rubix';

class MaterialSetupform extends React.Component {
    render() {
        return (
            <Form>
                <Row>
                <Col xs={6} md={6}>
                    <FormGroup controlId="MeterialSetting">
                    <ControlLabel>TMT</ControlLabel>
                    <FormControl type="text" placeholder="TMT"/>
                    <ControlLabel>ประเภทยา</ControlLabel>
                    <FormControl type="text" placeholder="Generic Type"/>
                    <ControlLabel>ชื่อสามัญ</ControlLabel>
                    <FormControl type="text" placeholder="Generic"/>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
        );
    }
}

class Buttonbar extends React.Component {
    render() {
        return (
            <div>
                    <Button bsStyle='success'>ตกลง</Button>{' '}
                    <Button>ยกเลิก</Button>
             </div>
        );
    }
}

export default class MaterialSetup extends React.Component {
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
				  <h2>ตั้งค่าข้อมูลตาราง</h2>
				</Col>
			  </Row>
			</Grid>
		  </PanelHeader>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <MaterialSetupform/>
                    </Col>
                  </Row>
                  <Buttonbar/>
                <br/>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Col>
      </Row>
        );
    }
}