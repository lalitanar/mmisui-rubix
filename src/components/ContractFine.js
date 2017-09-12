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
        this.changefine = this.changefine.bind(this)
    }
    componentWillMount() {
      this.setState({fine: parseFloat(this.props.objd.fine_d).toFixed(2)});
    }
    changefine(event){
        let value = event.target.value;
        if(value=="0"){
          this.setState({fine: parseFloat(this.props.objd.fine_d).toFixed(2) });
        }else if(value=="1"){
          this.setState({fine: parseFloat(this.props.objd.fine_m).toFixed(2) });
        }else this.setState({fine: parseFloat(this.props.objd.fine_y).toFixed(2)});
    }

    render(){
    return(
      <PanelContainer>
          <Panel>
              <PanelHeader className='bg-blue fg-white'>
                  <Grid>
                      <Row>
                          <Col xs={12}>
                              <h3>ค่าปรับ</h3>
                          </Col>
                      </Row>
                  </Grid>
            </PanelHeader>
            <PanelBody>
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
                            จำนวนเงินค่าปรับ
                        </Col>
                        <Col sm={4}>
                        <FormControl type="text" placeholder="ยอดเงินการทำสัญญา" value={this.state.fine} disabled active/>
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}>
                            บาท&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ต่อ
                        </Col>
                        <Col componentClass={ControlLabel} xs={1}/>
                        <Col componentClass={ControlLabel} xs={2}>
                            <FormControl componentClass="select" placeholder="fineper" inline onChange={(e) => this.changefine(e)}>
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
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
