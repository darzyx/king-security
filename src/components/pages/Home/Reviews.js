import React from "react";
import { Table } from "semantic-ui-react";

const Reviews = () => (
  <Table celled inverted padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Client</Table.HeaderCell>
        <Table.HeaderCell>Comments</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell textAlign="right">Brian Forcier</Table.Cell>
        <Table.Cell>
          "King Security was great setting up my security cameras! They even
          provided support when the system went down! Very reliable, strongly
          recommend."
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell textAlign="right">Client Name</Table.Cell>
        <Table.Cell>Add another review here...</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default Reviews;
