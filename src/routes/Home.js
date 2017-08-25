import React from 'react';
import { connect } from 'react-redux';
import Detail from '../components/Detail'
import actions from '../redux/actions';

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
    var obj ={title:"ข้อมูลผลิตภัณฑ์",head:"asfasdfadsf",nav:{key:"home",title:"รายละเอียด"},content:<div>
        <Row>
            <Col xs={6}>
                <address>
                    รหัสเวชภัณฑ์: 6447286249<br />
                  ชื่อสามัญ: test<br />
                ประเภทเวชภัณฑ์: A<br />
                </address>
            </Col>
            <Col xs={6}>
                <strong>ที่อยู่และข้อมูลติดต่อ</strong>
                <address>
                    Ave, Suite 600<br />
                    San Fra795 Folsomncisco, CA 94107<br />
                    ผู้ติดต่อ: Kudo Shinichi <br/>
                    Phone: (555) 539-1037<br />
                    E-mail: john.doe@example.com <br/>
                    URL: www.log.in.th<br />
                </address>
            </Col>
            <Col xs={6}>
                <strong>ข้อมูลเพิ่มเติม</strong>
                <address>
                    ทะเบียนนิติบุคคล: 8765433456<br />
                    เลขประตัวที่ออกโดย อย.: 123456823678<br />
                    ปีที่จดทะเบียน: 2555<br />
                    ปีที่ก่อตั้ง: 2554<br />
                    ประเทศที่จดทะเบียน: ราชอาณาจักรไทย<br />
                    พิกัด: 13°33'14.2"N 99°49'13.1"E<br />
                </address>
            </Col>
        </Row>
    </div>}
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Detail objd={obj}/>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
