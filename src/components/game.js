import React, { Component } from 'react';
import './game.css';
import ResultDisplay from './result-display'
// import UserInput from './user-input'
import GuessButton from './guess-button'
import NumberOfGuesses from './number-of-guesses'
import ShowAllGuesses from './show-all-guesses'
import RestartGame from './restart-game'


export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: 0,
      userChoices: [],
      choiceCounter: 0,
      hotOrColdMessage: 'Make your Guess!',
      computerChoice: Math.floor(Math.random() * (100 - 1 + 1)) + 1
    }
  }

  submitChoice(e) {
    e.preventDefault();
    const userInput = this.textInput.value;
    if (this.UserIsValid(userInput)) {
      this.analyzeChoice(userInput);
    }

    // reset input value
    this.refs.form.reset();
  }

  newGame() {
    this.setState({
      userInput: 0,
      userChoices: [],
      choiceCounter: 0,
      hotOrColdMessage: 'Make your Guess!',
      computerChoice: Math.floor(Math.random() * (100 - 1 + 1)) + 1
    });
  }

  UserIsValid(userInput) {
    // console.log(this.state.userChoices)
    if (isNaN(userInput)) {
      alert("Invalid Input. Please Enter a number");
      return false;

    } else if (userInput === '') {
      alert("Please Choose A Number");
      return false;

    } else if (this.state.userChoices.includes(userInput)) {
      alert("You already made that guessed that number");
      return false;
    }
    return true;
  }

  analyzeChoice(userInput) {
    console.log(this.state.computerChoice)
    const updatedUserChoices = this.state.userChoices.concat(userInput);

    this.setState({
      userChoices: updatedUserChoices,
      choiceCounter: this.state.choiceCounter + 1,
      hotOrColdMessage: this.showResultsMessage(userInput)
    })
  }

  showResultsMessage(userInput) {
    if(Number(userInput) + 10 === this.state.computerChoice) {
      return 'Kinda Hot';

    } else if(Number(userInput) === this.state.computerChoice) {
      return 'Hot'

    } else if(Number(userInput) !== this.state.computerChoice) {
      return 'Cold'
    }
  }
  
  render() {
    return (
      <div>
        <form onSubmit={e => this.submitChoice(e)} ref="form">
          <h1>HOT or COLD</h1>
          <ResultDisplay hotOrColdMessage={this.state.hotOrColdMessage}/>
          <input ref={input => this.textInput = input}/>
          <GuessButton />
          <NumberOfGuesses choiceCounter={this.state.choiceCounter}/>
          <ShowAllGuesses userChoices={this.state.userChoices}/>
        </form>
        <RestartGame onClick={this.newGame.bind(this)}/>
      </div>
    )
  }
}


