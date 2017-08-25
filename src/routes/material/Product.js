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
import Detail from '../../components/Detail';
  class Buttombar extends React.Component {
    render(){
        return (
            <div>
              <Button bsStyle='success' onClick={this.props.showadd}>
                <Icon glyph='icon-fontello-plus' /> เพิ่มข้อมูลผลิตภัณฑ์
              </Button>
              <ButtonGroup className='pull-right'>
                <Button bsStyle='primary'>
                <Icon glyph='icon-fontello-download' /> นำออก EXCEL
              </Button>
              <Button bsStyle='defalt'>
                <Icon glyph='icon-fontello-print' /> พิมพ์
              </Button>
              </ButtonGroup>
            </div>
        );
    }
  }
class ProductTable extends Component {
  render(){
    const submit = this.props
    var data = [
      {strProductID:"123" , strProductName:"product" , strGenericName:"aaaa" , strTMTcode:"1232132131",Remark:<ButtonGroup>
                        <Button bsStyle='info' onClick={this.props.showdetail} submit={submit}>  รายละเอียด</Button>
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
    this.setState({detail:false});
  }
  showdetail(){
    console.log("call")
    this.setState({detail:true});
  }
  constructor(props){
    super(props);

    this.state = {
      addshow: false,
      detail: false
    };
    this.showadd = this.showadd.bind(this);
    this.showdetail = this.showdetail.bind(this);
    this.submit = this.submit.bind(this);
  }
  render(){
    var obj ={title:"ข้อมูลยา test",head:"",nav:{key:"home",title:"รายละเอียด"},content:<div>
        <Row>
            <Col xs={6}>
                <address>
                    รหัสเวชภัณฑ์: 6447286249<br />
                    ชื่อผลิตภัณฑ์: test<br />
                    รหัสชื่อสามัญ: A<br />
                  รหัส TMT: 123456<br />
                  GP: 123456<br />
                    ประเภทยา: A<br />
                </address>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
                <strong>รูปแบบบรรจุภัณฑ์</strong>
                <address>
                  แบบ1<br />
                แบบ2<br />
              แบบ3<br/>
            แบบ4<br />
                </address>
            </Col>
            <Col xs={4}>
                <strong>รายชื่อผู้ผลิต</strong>
                <address>
                    ผลิต1<br />
                    ผลิต2<br />
                    ผลิต3<br/>
                    ผลิต4<br />
                </address>
            </Col>
            <Col xs={4}>
                <strong>รายชื่อผู้จำหน่าย</strong>
                <address>
                  ผู้จำหน่าย1<br />
                  ผู้จำหน่าย2<br />
                  ผู้จำหน่าย3<br/>
                  ผู้จำหน่าย4<br />
                </address>
            </Col>
        </Row>
    </div>}
    var table =<PanelContainer>
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
                <ProductTable  showdetail={this.showdetail} submit={this.submit}/>
              </Col>
            </Row>
          </Grid>
        </PanelBody>
      </Panel>
    </PanelContainer>;
    var show;
    if(this.state.addshow == true){
      show = <AddProduct submit={this.submit}/>;
    }
    if(this.state.detail == true){
      show = <Detail objd={obj} submit={this.submit}/>;
    }
    if(this.state.addshow == false && this.state.detail == false){
      show= table;
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
