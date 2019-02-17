import React, { Fragment } from "react";
import { Label, Table } from "semantic-ui-react";

const Reviews = () => (
  <Fragment>
    <h2>Reviews</h2>
    <Table celled inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Client</Table.HeaderCell>
          <Table.HeaderCell>Comments</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label color="yellow" ribbon>
              Brian Forcier
            </Label>
          </Table.Cell>
          <Table.Cell>
            "King Security was great setting up my security cameras! They even
            provided support when the system went down! Very reliable, strongly
            recommend."
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Label color="yellow" ribbon>
              Client Name
            </Label>
          </Table.Cell>
          <Table.Cell>Add another review here...</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Fragment>
);

export default Reviews;
