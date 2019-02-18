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
        <Divider horizontal inverted>
          ♔
        </Divider>
        <Message color="yellow" icon>
          <Icon name="mail" />
          <Message.Content>
            <Message.Header>
              Get in touch to discuss details, get an estimate, or book an
              appointment.
            </Message.Header>
            <p>
              Phone: (###) ###-####
              <br />
              Email: myemail@example.com
            </p>
          </Message.Content>
        </Message>
        <ContactForm />
      </Page>
    );
  }
}
