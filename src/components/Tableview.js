import React from "react";
import { render } from "react-dom";
import _ from 'lodash'
import { makeData, Logo, Tips } from "./Utils";
// Import React Table
import ReactTable from "react-table";
import {
    Row,
    Col,
    Grid,
    Panel,
    Table,
    PanelBody,
    PanelHeader,
    FormControl,
    PanelContainer,
} from '@sketchpixy/rubix';
class DatatableComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data:  makeData()
    };
    console.log(this.state);
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age",
                  aggregate: vals => _.round(_.mean(vals)),
                  Aggregated: row => {
                    return (
                      <span>
                        {row.value} (avg)
                      </span>
                    );
                  }
                },
                {
                  Header: "Visits",
                  accessor: "visits",
                  aggregate: vals => _.sum(vals)
                }
              ]
            }
          ]}
          pivotBy={["firstName", "lastName"]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}
export default class Tableview extends React.Component {
    render() {
        return (
            <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <DatatableComponent />
                      <br/>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Col>
      </Row>
        );
    }
}