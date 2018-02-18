import React, { Component } from 'react';


export default function RestartGame(props) {
  return (
    <div>
      <button onClick={props.onClick}>+New Game!</button>
    </div>
  )
}
