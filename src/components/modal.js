import React, { Component } from 'react';
import './modal.css';

export default function Modal(props) {
    return (
      <div className="modal-wrap">
        <h1>What do I do?</h1>
        <div className="description-body">
          <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
          <ul>
            <li>I pick a random secret number between 1 to 100 and keep it hidden.</li>
            <li>You need to guess until you can find the hidden secret number.</li>
            <li>You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
          </ul>
        </div>
        <p className="ready-comment">your guess is. So, Are you ready?</p>
        <button onClick={() => props.hideModal(false)}>Got It!</button>
      </div>

    )
}