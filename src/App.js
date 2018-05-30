import React, { Component } from 'react';
import './App.css';
//imports trash.js file
import Trash from './components/Trash.js';

class App extends Component {
  // the constructor sets the intital state
  constructor() {
    super();
    this.state = {
      bins: this.getBinsState(),
      points: 0
    };

    this.startGame();
    console.log(this.state.bins);
  }

//sets interval to to every 1.5 seconds
  startGame() {
    setInterval(() => {
      this.setState( {
        bins: this.getBinsState()
      });
    }, 1500);
  }

// gives random value of 1 or 0 for every bin on board
  getBinsState() {
    let bins = [];
    for (let i = 0; i < 9; i++){
      bins.push({ isTrashVisible: (Math.round(Math.random()) ? true : false )});
    }

    return bins;
  }

//add points when full bin is clicked, maybe clear bin as well
  onTrashClicked = () => {
    // Fill this in!
  }

  render() {
    const bins = this.state.bins.map((bin, index) => {
      return (
        <Trash
          key={`trash-${index}`}
          binFilled={bin.isTrashVisible}/>
      );
    });

    return (
      <div className="App">
        <section className="overall-data">
          <h1>Litter Patrol</h1>
          <h2>Points: { this.state.points }</h2>
        </section>

        <section className="bins">
          { bins }
        </section>
      </div>
    );
  }
}

export default App;
