import React, { Component } from "react";

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
        <ContactForm />
      </Page>
    );
  }
}
