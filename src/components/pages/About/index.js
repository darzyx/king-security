import React, { Component } from "react";

import Page from "./blocks";

export default class About extends Component {
  componentDidMount() {
    document.title = "King Security | About";
  }

  render() {
    return (
      <Page>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, nec elit dictum eleifend quis vitae
          vestibulum, vivamus sapiente ipsam molestie mollis urna vivamus,
          mauris nec sed urna eget, sit ornare consectetuer wisi, nonummy elit
          ut non at praesent. Vehicula adipiscing ac proin, dolor porta et urna
          diam morbi, eu est ut nulla elementum, ultrices ut. Nam rutrum ipsum,
          feugiat pretium vitae varius mauris, eu tellus suspendisse mauris qui,
          sapien nonummy et vivamus posuere, magna ac tortor a varius. Erat ut
          justo enim ac dignissim lobortis, faucibus arcu feugiat metus lorem
          varius lacinia, molestie vestibulum ac sit, vitae enim sed sed egestas
          duis. Eros justo dui pulvinar turpis laoreet, diam sed interdum libero
          quam non pede, dictumst interdum at nisl nam elit vivamus. Nec
          scelerisque sodales potenti, libero pretium ac consequat rhoncus
          iaculis arcu, sapien arcu, vestibulum sem, curabitur lacus est felis
          nibh.
        </p>
        <p>
          Sed mi maecenas nullam, aperiam mattis suspendisse orci integer, vel
          in et purus aliquam ultrices, lorem non quisque, morbi ullamcorper
          vulputate. Faucibus netus sit rhoncus quis rutrum sed, sint per
          porttitor ridiculus, eget in fames diam euismod eget, voluptatem eum
          fusce a ut eros mollis. Sapien cursus tortor mi tincidunt quam, tortor
          placerat elit, ante ligula dignissim suscipit, sit vel aliquam, ante
          ante nibh mauris a sodales. Amet quis faucibus, molestie vulputate et
          arcu etiam, nulla luctus sed. Neque ultricies. Consectetuer ipsum.
          Neque risus integer semper sed, morbi est vitae enim laoreet justo.
        </p>
      </Page>
    );
  }
}
