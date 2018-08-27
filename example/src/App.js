import React, { Component } from 'react';

import Cube from 'react-3d-cube';

import front from './images/front.png';
import right from './images/right.png';
import back from './images/back.png';
import left from './images/left.png';
import top from './images/top.png';
import bottom from './images/bottom.png';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>react-3d-cube</h1>
        <h2>no children</h2>
        <div
          style={{
            width: 300,
            height: 300
          }}
        >
          <Cube size={300} index="front" />
        </div>
        <h2>set children</h2>
        <div
          style={{
            width: 300,
            height: 300
          }}
        >
          <Cube size={300} index="front">
            <img src={front} alt="front" />
            <img src={right} alt="right" />
            <img src={back} alt="back" />
            <img src={left} alt="left" />
            <img src={top} alt="top" />
            <img src={bottom} alt="bottom" />
          </Cube>
        </div>
      </div>
    );
  }
}
