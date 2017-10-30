import React from 'react';
import { connect } from 'react-redux';
import Detail from '../components/Detail'
import actions from '../redux/actions';
import Table  from '../components/Table'
import DashBorad from './contract/Dashboard/DashBoard'
import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
} from '@sketchpixy/rubix';
export default class Home extends React.Component {
  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <DashBorad/>
                  <Table/>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
