import React, { Component } from "react";
import Card from "./components/Card";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import cars from "./cars.json";
import "./App.css";

let correctCar = 0;
let bestScore = 0;
let head = "Click on a movie poster to gain points! Click on the same one twice and you lose!";

class App extends Component {

  // Setting this.state.cars to the cars json array
  state = {
    cars,
    correctCar,
    bestScore,
    head
  };

  setClicked = id => {

    const cars = this.state.cars;

    // Filter for the clicked car
    const clickedCar = cars.filter(car => car.id === id);


    if (clickedCar[0].clicked) {

      console.log("Correct Guesses: " + correctCar);
      console.log("Best Score: " + bestScore);

      correctCar = 0;
      head = "Bummer! You already clicked on this one."

      for (let i = 0; i < cars.length; i++) {
        cars[i].clicked = false;
      }

      this.setState({ head });
      this.setState({ correctCar });
      this.setState({ cars });

    } else if (correctCar < 11) {

      clickedCar[0].clicked = true;

      correctCar++;

      head = "Great! You haven't click on that one yet! Keep going!";

      if (correctCar > bestScore) {
        bestScore = correctCar;
        this.setState({ bestScore });
      }

      cars.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ cars });
      this.setState({ correctCar });
      this.setState({ head });
    } else {

      clickedCar[0].clicked = true;

      correctCar = 0;

      head = "WOW!!! You got ALL of them!!! Now, let's see if you can do it again!";
      bestScore = 12;
      this.setState({ bestScore });

      for (let i = 0; i < cars.length; i++) {
        cars[i].clicked = false;
      }

      cars.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ cars });
      this.setState({ correctCar });
      this.setState({ head });

    }
  };

  render() {
    return (
      <Main>
        <Navbar>Clickity Clack Movie Game</Navbar>

        <h3 className="scoreSummary">{this.state.head}</h3>

        <h3 className="scoreSummary (card-header)">Correct Guesses: {this.state.correctCar}</h3>

        <h3 className="scoreSummary (card-header)">Best Score: {this.state.bestScore}</h3>

        <div className="container">
          <div className="row">
            {this.state.cars.map(car => (
              <Card
                setClicked={this.setClicked}
                id={car.id}
                key={car.id}
                image={car.image}
              />
            ))}
          </div>
        </div>

      </Main>
    );
  }
}

export default App;
