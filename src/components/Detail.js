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

} from '@sketchpixy/rubix';


export default class Detail extends Component {

  render(){
    var title = this.props.objd.title
    var head = this.props.objd.head
    var nav = this.props.objd.nav
    var con = this.props.objd.content
    var edit = this.props.objd.edit
    /*var nav
    for(var i=0;i<=this.props.objd.nav.length;i++){
      nav=nav+<NavItem eventKey={((this.props.objd.nav)[i-1]).key}>
          {((this.props.objd.nav)[i-1]).title}
      </NavItem>;
    }*/
    var footer = <Bar submit={this.props.submit}/>
    if(edit == "false"){
      footer = <BarBackOnly submit={this.props.submit}/>
    }
    return(
      <PanelContainer  >
          <Panel>
              <PanelHeader className='bg-lightgreen fg-white'>
                  <Grid>
                      <Row>
                          <Col xs={12}>
                              <h3>{title}</h3>
                          </Col>
                      </Row>
                  </Grid>
            </PanelHeader>
            <PanelBody>
              <Grid>
                  <Row>
                      <Col xs={12}>
                              <Col xs={12}>
                                  <h4>
                                      {head}
                                  </h4>
                                  <hr />
                              </Col>
                                {con}
                      </Col>
                  </Row>
              </Grid>
          </PanelBody>
          <PanelFooter className='bg-lightgreen'>
              <Grid>
                  <Row>
                      <Col xs={12} className='fg-white'>
                          <br />
                          {footer}
                          <br />
                      </Col>
                  </Row>
              </Grid>
          </PanelFooter>
        </Panel>
      </PanelContainer>
    );
  }
}

class Bar extends React.Component {
    render() {
        return (
            <div>
                <ButtonToolbar>
                    <ButtonGroup className='pull-right'>
                        <Button bsStyle="warning" onClick={this.props.submit}>
                            <Icon glyph='icon-fontello-edit'/> แก้ไข
                    </Button>
                        <Button bsStyle="success" onClick={this.props.submit}>
                            <Icon glyph='icon-fontello-floppy' /> บันทึก
                    </Button>

                    </ButtonGroup>
                    <ButtonGroup >

                        <Button bsStyle='defalt'>
                            <Icon glyph='icon-fontello-print' /> พิมพ์
                    </Button>
                        <Button bsStyle='primary'>
                            <Icon glyph='icon-fontello-download' /> นำออก EXCEL
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}

class BarBackOnly extends React.Component {
    render() {
        return (
            <div>
                <ButtonToolbar>
                    <ButtonGroup className='pull-right'>
                        <Button onClick={this.props.submit}>
                            <Icon glyph='icon-fontello-back' /> ย้อนกลับ
                    </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}
