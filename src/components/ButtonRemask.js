import React , { Component } from 'react';
import ReactTable from "react-table";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Icon,
} from '@sketchpixy/rubix';


export default class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.fedit = this.props.edit.bind(this)
    this.finfo = this.props.info.bind(this)
    this.fdel = this.props.del.bind(this)
  }
  render(){
    let edit="";
    let info="";
    let del="";
    if(this.props.show.edit == true){
      edit = <Button bsStyle='warning' onClick={() => this.fedit(this.props.id)}>  <Icon glyph='icon-fontello-edit' /> แก้ไข </Button>
    }
    if(this.props.show.info == true){
      info = <Button bsStyle='info' onClick={() => this.finfo(this.props.id)}>  รายละเอียด</Button>
    }
    if(this.props.show.del == true){
      del = <Button bsStyle='danger' onClick={() => this.fdel(this.props.id)}> <Icon glyph='icon-fontello-trash' /> ลบ </Button>
    }
    return(
      <ButtonGroup>
        {edit}
        {del}
        {info}
      </ButtonGroup>
    );
  }
}
