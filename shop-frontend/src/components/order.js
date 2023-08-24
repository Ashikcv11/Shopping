// order.js
import React, { Component } from "react";

// import React from "react";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "", // Initialize the userData state
    };
  }

  render() {
    // const { fname, email } = this.state.userData;
    return (
      <div>
        {/* // */}
        Name<h1>{this.state.userData.fname}</h1>
        Email <h1>{this.state.userData.email}</h1>
      </div>
    );
  }
}
