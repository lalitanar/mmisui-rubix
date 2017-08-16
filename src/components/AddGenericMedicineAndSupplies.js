import React , { Component } from 'react';
import {
  Row,
  Col,
  PanelContainer,
  Panel,
  PanelBody,
  Grid,
  Button,
} from '@sketchpixy/rubix';
class AddGenericMedicineAndSupplies extends Component {
  render(){
    return(
      <div>
        <Row>
          <Col xs={12}>
            <PanelContainer>
              <Panel>
                <PanelBody>
                  <Grid>
                    <Row>
                      <Col xs={12}>
                        <Button bsStyle='primary' onClick={this.props.submit}>submit</Button>
                      </Col>
                    </Row>
                  </Grid>
                </PanelBody>
              </Panel>
            </PanelContainer>
          </Col>
        </Row>
      </div>
    );
  }
}
export default AddGenericMedicineAndSupplies;
