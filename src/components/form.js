import React, { Component } from 'react'; 
import Results from "./results"
import './form.css';



export default class Form extends React.Component {
  constructor(props) {
    super(props);
   
  }

  onSubmit(e) {
    e.preventDefault();
     // is there a problem with using setState's callback function to run other functions? 
    if (this.userInputIsValid(this.userInput.value)) {
      this.setState({
        userInput: this.userInput.value,
        counter: this.state.counter + 1,
        allUserInputs: [...this.state.allUserInputs, this.userInput.value]
      })
      
    } else {
      alert("Please Enter A Number");
    }

    // // reset value for new input
    this.userInput.value = ''
  }

  userInputIsValid(val) {
    return Number(val) == val && val !== '';
  }

  displayUserInputs() {
    return this.state.userInput
  }

  calcCounter() {
    
  }

  handleClick() {
    
  }

  calculateResult() {
    
    // if user input is within 10 digits from AI choice (userinput is not less than pc 10) then "hot"
    // else "cold"
    // if user guess is right then "You Won. Click new game to play again"
  }

  render() {
    let i = [].push(this.state.userInput)
    return (
      <div className="form-wrapper">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <div className="h2-wrapper">
            <h2>Make your Guess!</h2>
          </div>
          
          <input type="text" placeholder="Enter Your Guess"  ref={input => this.userInput = input} />
          <input type="submit" onClick={() => this.handleClick()}/>
          <p>User Input: {this.displayUserInputs()}</p>
          <p>Guess #{this.state.counter}</p>
          <p >{this.state.allUserInputs.join(' ')}</p>
          <Results calcResults={this.calculateResult}/>
        </form>
      </div>
    )
  }
}