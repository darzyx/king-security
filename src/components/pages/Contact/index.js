import React, { Component } from "react";
import { Icon, Message, Transition } from "semantic-ui-react";

import Page from "./blocks";
import ContactForm from "./ContactForm";
import KingDivider from "../../misc/KingDivider";

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
        <KingDivider />
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
              Phone: (412) 682-4171
              <br />
              Email: deejgandy@gmail.com
            </p>
          </Message.Content>
        </Message>
        <ContactForm />
      </Page>
    );
  }
}
