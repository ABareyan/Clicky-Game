import React, { Component } from "react";
import Card from "./components/Card";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import cars from "./cars.json";
import "./App.css";

let correctCar = 0;
let bestScore = 0;
let head = "Click on the image to guess the car, if you'll click on the same car, you'll lose the game.";

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

      console.log("Correct Car: " + correctCar);
      console.log("Best Score: " + bestScore);

      correctCar = 0;
      head = "You already clicked on this car";

      for (let i = 0; i < cars.length; i++) {
        cars[i].clicked = false;
      }

      this.setState({ head });
      this.setState({ correctCar });
      this.setState({ cars });

    } else if (correctCar < 11) {

      clickedCar[0].clicked = true;

      correctCar++;

      head = "You guessed correctly";

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

      head = "You guessed all cars!";
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
        <Navbar>
          Clicky Cars Game
        </Navbar>

        <h3 className="scoreSummary">{this.state.head}</h3>

        <h3 className="scoreSummary (card-header)">Correct Car: {this.state.correctCar}</h3>

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
