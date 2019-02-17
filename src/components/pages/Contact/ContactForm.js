import React from "react";
import { Button, Divider, Form, Segment } from "semantic-ui-react";

const ContactForm = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Input fluid label="Name" placeholder="Full Name" />
      <Form.Group widths="equal">
        <Form.Input fluid label="Phone" placeholder="Phone Number" />
        <Form.Input fluid label="Email" placeholder="Email Address" />
      </Form.Group>
      <Form.TextArea label="Message" placeholder="Enter your message here." />
      <Divider hidden />
      <Button type="submit">Submit</Button>
    </Form>
  </Segment>
);

export default ContactForm;
