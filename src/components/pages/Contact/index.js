import React, { Component } from "react";
import { Divider, Icon, Message } from "semantic-ui-react";

import Page from "./blocks";
import ContactForm from "./ContactForm";

export default class Contact extends Component {
  componentDidMount() {
    document.title = "King Security | Contact";
  }

  render() {
    return (
      <Page>
        <h1>Contact</h1>
        <Divider inverted />
        <Message color="yellow" icon>
          <Icon name="mail" />
          <Message.Content>
            <Message.Header>Get in touch</Message.Header>
            Contact me by using this form, or by call/text at (###) ###-####, or
            by directly emailing me at myemail@example.com
          </Message.Content>
        </Message>
        <ContactForm />
      </Page>
    );
  }
}
