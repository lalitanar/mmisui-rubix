import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
import Header from './common/header';
import Footer from './common/footer';

/* Pages */

import Home from './routes/Home';
import Home2 from './routes/Home2';
import Usermanagement from './routes/Usermanagement'
import Tableview from './components/Tableview'

// import createuser from './routes/createuser'
// import edituser from './routes/edituser'
// import rolesmanagement from './routes/rolesmanagement'
// import editroles from './routes/editroles'

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/usermanagement' component={Usermanagement} />
    <Route path='/table' component={Tableview} />
  </Route>
);

export default routes;