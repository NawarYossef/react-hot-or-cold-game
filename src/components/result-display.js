import React, { Component } from 'react';
import './result-display.css';

export default function ResultDisplay(props) {
  return (
    <div>
      <h2>{props.hotOrColdMessage}</h2>
    </div>
  )
}
