import React, { Component } from 'react';

export default function Results(props) {
  return (
    <p>{props.calcResults()}</p>
  )
}