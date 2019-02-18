import React, { Component } from "react";
import { Divider, Icon, Message, Transition } from "semantic-ui-react";

import Page from "./blocks";
import ContactForm from "./ContactForm";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  componentDidMount() {
    document.title = "King Security | Contact";

    setInterval(() => {
      this.setState(state => ({ visible: !state.visible }));
    }, 5000);
  }

  render() {
    const { visible } = this.state;

    return (
      <Page>
        <h2 style={{ textAlign: "center" }}>Contact</h2>
        <Divider horizontal inverted>
          ♔
        </Divider>
        <Message color="yellow" icon>
          <Transition animation="tada" duration={1000} visible={visible}>
            <Icon name="mail" />
          </Transition>
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
