import React , { Component } from 'react';
import {
  Button,
} from '@sketchpixy/rubix';
class AddGenericMedicineAndSupplies extends Component {
  render(){
    return(
      <div>
        <Button bsStyle='primary' onClick={this.props.submit}>submit</Button>
        <br/>
        test
      </div>
    );
  }
}
export default AddGenericMedicineAndSupplies;
