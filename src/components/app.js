import React, { Component } from 'react';
import './app.css';
import Description from './description';
import Game from './game';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     gameDescription: 'hide'
    }
  }

  handleDescriptionVisibility(val) {
   this.setState({gameDescription: val});
  }

  render() {
    if (this.state.gameDescription === 'hide') {
      return (
        <div>
          <header>
            <button onClick={() => this.handleDescriptionVisibility('show')}>+What</button>
          </header>
          <Game />
        </div>
      )
    }
    return (
      <Description onClick={() => this.handleDescriptionVisibility('hide')}/>
    )

  }
}
