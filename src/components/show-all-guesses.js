import React, { Component } from 'react';

export default function ShowAllGuesses(props) {
  const userChoices  = props.userChoices.map(choice => choice + ' ')
  return (
    <div>
      <p>{userChoices}</p>
    </div>
  )
}
