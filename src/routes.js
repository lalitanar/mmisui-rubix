import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route ,Router} from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
import SidebarMaterial from './common/sidebar/SidebarMaterial';
import Header from './common/header';
import Footer from './common/footer';

/* Pages */

import Home from './routes/Home';
import Home2 from './routes/Home2';
import Usermanagement from './routes/admin/Usermanagement'
import Rolemanagement from './routes/admin/Rolemanagement'
import Tableview from './components/Tableview'
import tbPackage from './routes/tbPackage'
import PackageTable from './routes/tbPackage'
import SupplierIndex from './routes/supplier/Index'
import SupplierNew from './routes/supplier/New'
import SupplierDetail from './routes/supplier/Detail'
import ContactNew from './routes/contact/New'
import ContactIndex from './routes/contact/Index'
import MedicalAndSupplies from './routes/material/GenericMedicineAndSupplies'
import Product from './routes/material/Product'
import GenericType from './routes/GenericType'
import GenMedSupType from './routes/GenericMedSupType'
import TitleTable from './routes/TitleTable'
import OrganizationPosition from './routes/OrganizationPosition'
import Organization from './routes/Organization'
import OrganizationEmployees from './routes/OrganizationEmployees'
import Position from './routes/Position'
import MaterialSetting from './routes/MaterialSetting'
import History from './routes/History'
import ViewHistory from './routes/ViewHistory'
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
    case "SidebarMaterial":
        showsidebar = <SidebarMaterial mainsidebar = {this.mainsidebar}/>;
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
    <Route path='usermanagement' component={Usermanagement} />
    <Route path='table' component={Tableview} />
    <Route path='supplier/index' component={SupplierIndex} />
    <Route path='supplier/new' component={SupplierNew} />
    <Route path='supplier/detail' component={SupplierDetail} />
    <Route path='contact/new' component={ContactNew} />
    <Route path='contact/index' component={ContactIndex} />
    <Route path='material/addmedsup' component={MedicalAndSupplies} />
    <Route path='material/product' component={Product} />
    <Route path='rolemanagement' component={Rolemanagement} />
    <Route path='packagetable' component={PackageTable} />
    <Route path='generictype' component={GenericType} />
    <Route path='genmedsuptype' component={GenMedSupType} />
    <Route path='titletable' component={TitleTable} />
    <Route path='position' component={Position} />
    <Route path='organizationposition' component={OrganizationPosition} />
    <Route path='organization' component={Organization} />
    <Route path='employees' component={OrganizationEmployees} />
    <Route path='materialsetting' component={MaterialSetting} />
    <Route path='history' component={History} />
    <Route path='viewhistory' component={ViewHistory} />
  </Route>
);

export default routes;
