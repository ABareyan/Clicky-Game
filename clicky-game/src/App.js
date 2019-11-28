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

  setClicked = id => {

    const cars = this.state.cars;

    const clikedCar = cars.filter(car => car.id === id);

    if (clikedCar[0].clicked) {

      console.log("Correct car: " + carGuessed);
      console.log("Best score: " + bestScore);

      carGuessed = 0;
      head = "You already clicked on this car"

      for (let i = 0; i < cars.length; i++) {
        cars[i].clicked = false
      }

      this.setState({ cars });
      this.setState({ carGuessed });
      this.setState({ head });

    } else if (carGuessed < 11) {

      clikedCar[0].clicked = true;
      carGuessed++;
      head = "You guessed correctly";

      if (carGuessed > bestScore) {
        bestScore = carGuessed;
        this.setState({ bestScore });
      }

      cars.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({ cars });
      this.setState({ carGuessed });
      this.setState({ head });
    } else {

      clikedCar[0].clicked = true;
      carGuessed = 0;

      head = "You guessed all cars!";
      bestScore = 12;
      this.setState({bestScore});

      for (let i =0; i < cars.length; i++) {
        clikedCar[i].clicked = false;
      }

      cars.sort(function(a, b){return 0.5 - Math.random()});

      this.setState({ cars });
      this.setState({ carGuessed });
      this.setState({ head });
    }
  };

  render() {
    return (
      <Main>
        <Navbar>Clicky Cars Game</Navbar>

    <h3 className="scoreSummary">{this.state.head}</h3>
      </Main>
    )
  }

}


export default App;
