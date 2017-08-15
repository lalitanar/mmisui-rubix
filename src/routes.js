import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route ,Router} from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
import Siderbar1 from './common/sidebar/sidebar1';
import Header from './common/header';
import Footer from './common/footer';

/* Pages */

import Home from './routes/Home';
import Home2 from './routes/Home2';
import Usermanagement from './routes/Usermanagement'
import Tableview from './components/Tableview'
import SupplierIndex from './routes/supplier/Index'
import SupplierNew from './routes/supplier/New'
import SupplierDetail from './routes/supplier/Detail'

import ContactNew from './routes/contact/New'
// import createuser from './routes/createuser'
// import edituser from './routes/edituser'
// import rolesmanagement from './routes/rolesmanagement'
// import editroles from './routes/editroles'
class App extends React.Component {
  change(num){
    this.setState({sidebar:num});
  }
  mainsidebar(){
    this.setState({sidebar:'Sidemain'});
  }
  constructor(props){
    super(props);

    this.state = {
      sidebar :'Sidemain',
    };
    this.change = this.change.bind(this);
    this.mainsidebar = this.mainsidebar.bind(this);
  }
  render() {
    var showsidebar;
    switch(this.state.sidebar) {
    case "Sidemain":
        showsidebar = <Sidebar change={this.change}/>;
        break;
    case "Siderbar1":
        showsidebar = <Siderbar1 mainsidebar = {this.mainsidebar}/>;
        break;
    default:
        showsidebar = <Sidebar change={this.change}/>;
    }
    return (
      <MainContainer {...this.props}>
        {showsidebar}
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
    <Route path='/supplier/index' component={SupplierIndex} />
    <Route path='/supplier/new' component={SupplierNew} />
    <Route path='/supplier/detail' component={SupplierDetail} />
    <Route path='/contact/new' component={ContactNew} />
  </Route>
);

export default routes;
