import React from 'react';
import { connect } from 'react-redux';
import Detail from '../components/Detail'
import actions from '../redux/actions';
import Table  from '../components/Table'
import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class Home extends React.Component {
  static fetchData(store) {
    return store.dispatch(actions.getGreeting('Hello, World!'));
  }

  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
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
