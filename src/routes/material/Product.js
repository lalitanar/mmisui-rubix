import React , { Component } from 'react';
import ReactTable from "react-table";
import {
  Row,
  Col,
  PanelContainer,
  Panel,
  PanelBody,
  Grid,
  Button,
  Icon,
  ButtonGroup,
  PanelHeader,
} from '@sketchpixy/rubix';
import AddProduct from '../../components/AddProduct';
class Buttombar extends React.Component {
  render(){
      return (
          <div>
              <Button bsStyle='primary' onClick={this.props.showadd}>เพิ่มข้อมูลผลิตภัณฑ์</Button>
          </div>
      );
  }
}
class ProductTable extends Component {
  render(){
    var data = [
      {strProductID:"123" , strProductName:"product" , strGenericName:"aaaa" , strTMTcode:"1232132131",Remark:<ButtonGroup>
                        <Button bsStyle='info'>  รายละเอียด</Button>
                        <Button bsStyle='danger'><Icon glyph='icon-fontello-trash'/>  ลบ</Button>
                     </ButtonGroup>}
    ];
    return(
      <div>
        <ReactTable
          data={data}
          noDataText="ไม่พบข้อมูล"
          filterable
          columns={[
            {
              Header: "รหัสผลิตภัณฑ์",
              accessor: "strProductID"
            },
            {
              Header: "ชื่อผลิตภัณฑ์",
              accessor: "strProductName"
            },
            {
              Header: "รหัสชื่อสามัญ",
              accessor: "strGenericName"
            },
            {
              Header: "รหัส TMT",
              accessor: "strTMTcode"
            },
            {
              Header: "เพิ่มเติม",
              accessor: "Remark",
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
class Product extends Component {
  showadd(){
    this.setState({addshow:true});
  }
  submit(){
    this.setState({addshow:false});
  }
  constructor(props){
    super(props);

    this.state = {
      addshow: false
    };
    this.showadd = this.showadd.bind(this);
    this.submit = this.submit.bind(this);
  }
  render(){
    var show =<PanelContainer>
      <Panel>
        <PanelHeader className='bg-blue'>
           <Grid>
             <Row>
              <Col xs={12} className='fg-white'>
                <h4>ข้อมูลผลิตภัณฑ์</h4>
              </Col>
             </Row>
           </Grid>
          </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col xs={12}>
                <Buttombar showadd={this.showadd}/>
                <br/>
                <ProductTable/>
              </Col>
            </Row>
          </Grid>
        </PanelBody>
      </Panel>
    </PanelContainer>;

    if(this.state.addshow == true){
      show = <AddProduct submit={this.submit}/>;
    }
    return(
      <Row>
        <Col xs={12}>
          {show}
        </Col>
      </Row>
    );
  }
}
export default Product;
