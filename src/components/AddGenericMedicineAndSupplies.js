import React , { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Radio,
  Row,
  Col,
  PanelHeader,
  Grid,
  PanelBody,
  Panel,
  PanelContainer,
  PanelFooter,
} from '@sketchpixy/rubix';
class Medicine extends Component {
  submitmed(){
    this.props.submit();
    console.log("med")
  }
  constructor(props){
    super(props);

    this.state = {};
    this.submitmed = this.submitmed.bind(this);
  }
  render(){
    return(
    <PanelContainer>
      <Panel>
      <PanelHeader className='bg-purple'>
         <Grid>
           <Row>
            <Col xs={12} className='fg-white'>
              <h4>เพิ่มข้อมูลยา</h4>
            </Col>
           </Row>
         </Grid>
        </PanelHeader>
      <PanelBody style={{padding: 0}}>
           <Grid>
             <Row>
              <Col xs={12}>
            <Form>
              <Row>
                <Col xs={6}>
                <FormGroup>
                  <ControlLabel>รหัสเวชภัณฑ์</ControlLabel>
                   <FormControl type="text" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>ชื่อสามัญ</ControlLabel>
                   <FormControl type="text" />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>ส่วนประกอบ/ความแรง</ControlLabel>
                   <FormControl type="text" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>รูปแบบยา</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">เลือกรูปแบบยา</option>
                        <option value="other">Gastro-intestinal system</option>
                        <option value="other">Cardiovascular system</option>
                        <option value="other">Respiratory system</option>
                        <option value="other">Central nervous system</option>
                        <option value="other">Infections</option>
                        <option value="other">Endocrine system</option>
                        <option value="other">Obstetrics, gynaecology and urinary-tract disorders</option>
                        <option value="other">Malignant disease and immunosuppression</option>
                        <option value="other">Nutrition and blood</option>
                        <option value="other">Musculoskeletal and joint diseases</option>
                        <option value="other">Eye</option>
                        <option value="other">Ear, nose, oropharynx  and oral cavity</option>
                        <option value="other">Skin</option>
                        <option value="other">Immunological products and vaccines</option>
                        <option value="other">Anaesthesia</option>
                        <option value="other">Antidotes</option>
                        <option value="other">Contrast media and Radiopharmaceuticals</option>
                        <option value="other">ยาสมุนไพร</option>
                        <option value="other">เวชภัณฑ์ที่มิใช่ยา</option>
                    </FormControl>
                </FormGroup>
                </Col>
                <Col xs={6}>
                <FormGroup>
                    <ControlLabel>ชื่อย่อ</ControlLabel>
                     <FormControl type="text" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>รหัสกลุ่มยา</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">ฟหก</option>
                        <option value="other">ฟหก</option>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>คำค้นหา</ControlLabel>
                   <FormControl type="text" />
                </FormGroup>
                </Col>
              </Row>

            </Form>
              </Col>
             </Row>
           </Grid>
          </PanelBody>
          <PanelFooter className='bg-lightblue'>
            <Grid>
              <Row>
                <Col xs={12}>
                    <br/>
                    <Button className='pull-right' bsStyle="danger" onClick={this.props.submit}>ยกเลิก</Button>
                    <Button className='pull-right' bsStyle="success" onClick={this.submitmed}>บันทึกข้อมูล</Button>
                    <br/>
                </Col>
              </Row>
            </Grid>

          </PanelFooter>
        </Panel>
      </PanelContainer>);
    }
  }
  class Supplies extends Component {
    submitsup(){
      this.props.submit();
    }
    constructor(props){
      super(props);

      this.state = {};
      this.submitsup = this.submitsup.bind(this);
    }
    render(){
      return(
        <PanelContainer>
          <Panel>
          <PanelHeader className='bg-palepink'>
             <Grid>
               <Row>
                <Col xs={12} className='fg-white'>
                  <h4>เพิ่มข้อมูลเวชภัณฑ์</h4>
                </Col>
               </Row>
             </Grid>
            </PanelHeader>
          <PanelBody>
            <Grid>
            <Row>
              <Col xs={6}>
              <FormGroup>
                <ControlLabel>รหัสเวชภัณฑ์</ControlLabel>
                 <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>ชื่อสามัญ</ControlLabel>
                 <FormControl type="text" />
              </FormGroup>
              </Col>

              <Col xs={6}>
              <FormGroup>
                  <ControlLabel>ชื่อย่อ</ControlLabel>
                   <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                  <ControlLabel>ประเภทของเวชภัณฑ</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                      <option value="select">ฟหก</option>
                      <option value="other">หกด</option>
                  </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>คำค้นหา</ControlLabel>
                 <FormControl type="text" />
              </FormGroup>
              </Col>
            </Row>
          </Grid>
              </PanelBody>
              <PanelFooter>
                <Grid>
              <Row>
                <Col xs={12} className='fg-white'>
                  <Button className='pull-right' bsStyle="danger" onClick={this.props.submit}>ยกเลิก</Button>

                  <Button className='pull-right' bsStyle="success" onClick={this.submitsup}>บันทึกข้อมูล</Button>


                </Col>
              </Row>
            </Grid>

              </PanelFooter>
            </Panel>
          </PanelContainer>
    );
  }
}
class SelectType extends Component {
  render(){
    return(
      <PanelContainer>
        <Panel>
        <PanelHeader className='bg-blue'>
           <Grid>
             <Row>
              <Col xs={12} className='fg-white'>
                <h4>เพิ่มข้อมูล</h4>
              </Col>
             </Row>
           </Grid>
          </PanelHeader>
        <PanelBody>
          <Grid>
              <Row>
                <Col xs={12}>
                  <Form>
                    <FormGroup >
                      <ControlLabel>เพิ่ม</ControlLabel>
                        <Radio onClick={this.props.showmed} name="type" defaultChecked inline>
                              ยา
                         </Radio>
                        <Radio onClick={this.props.showsup} name="type" inline>
                             เวชภัณฑ์
                         </Radio>
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
class AddGenericMedicineAndSupplies extends Component {
  showmed(){
    this.setState({medicine: true});
    console.log("call")
  }
  showsup(){
    this.setState({medicine: false});
  }
  constructor(props){
    super(props);

    this.state = {
      medicine: true
    };
    this.showmed = this.showmed.bind(this);
    this.showsup = this.showsup.bind(this);
  }
  render(){
    var show;
    if(this.state.medicine==true){
      show = <Medicine submit={this.props.submit}/>;
    }else{
      show = <Supplies submit={this.props.submit}/>;
    }
    return(
      <div>
        <Row>
          <Col sm={12}>
          <SelectType showmed={this.showmed} showsup={this.showsup} />
          {show}
          </Col>
        </Row>
      </div>
    );
  }
}
export default AddGenericMedicineAndSupplies;
