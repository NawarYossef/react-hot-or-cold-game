import React, { Component } from 'react';
import Form from "./form"
import './main.css';
const _ = require("lodash")

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      computerChoice: _.shuffle(Array.from(new Array(100), (x, i) => i + 1))[0]
    }
  }

  render() {
    return (
      <main>
        <div className="h1-wrap">
        <h1>HOT or COLD</h1>
        </div>
        <Form computerChoice={this.state.computerChoice}/>
      </main>
    )
  }
}