import React, { Component } from 'react';
import './description.css';


export default function Description(props) {
  const rules = [
    'I pick a random secret number between 1 to 100 and keep it hidden.',
    'You need to guess until you can find the hidden secret number.',
    'You will get feedback on how close ("hot") or far ("cold") your guess is.'
  ]
  return (
    <div>
      <h1>What do I do?</h1>
      <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p><br />
      <ol>
        { rules.map(li => <li>{li}</li>)}
      </ol>
      <p>So, Are you ready?</p>
      <button onClick={props.onClick}>Got It!</button>
    </div>
  )
}
