import React, { Component } from 'react';
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import cars from "./cars.json";
import './App.css';

let carGuessed = 0;
let bestScore = 0;
let head = "Click on the image to guess the car, if you'll click on the same car, you'll lose the game."


class App extends Component {

  state = {
    cars,
    carGuessed,
    bestScore,
    head
  };

}


export default App;
