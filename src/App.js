import React, { Component } from 'react';
import puppyOne from './images/puppy-one.jpeg';
import puppyTwo from './images/puppy-two.jpeg';
import puppyThree from './images/puppy-three.jpeg';
import puppyFour from './images/puppy-four.jpeg';
import puppyFive from './images/puppy-five.jpeg';
import puppySix from './images/puppy-six.jpeg';
import puppySeven from './images/puppy-seven.jpeg';
import puppyEight from './images/puppy-eight.jpeg';
import puppyNine from './images/puppy-nine.jpeg';
import puppyTen from './images/puppy-ten.jpeg';
import puppyEleven from './images/puppy-eleven.jpeg';
import puppyTwelve from './images/puppy-twelve.jpeg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      images: [(<img src={puppyOne} data-item="one" onClick={this.handleImageClick} />),
         (<img src={puppyTwo} data-item="two" onClick={this.handleImageClick} />),
         (<img src={puppyThree} data-item="three" onClick={this.handleImageClick} />),
         (<img src={puppyFour} data-item="four" onClick={this.handleImageClick} />),
         (<img src={puppyFive} data-item="five" onClick={this.handleImageClick} />),
         (<img src={puppySix} data-item="six" onClick={this.handleImageClick} />),
         (<img src={puppySeven} data-item="seven" onClick={this.handleImageClick} />),
         (<img src={puppyEight} data-item="eight" onClick={this.handleImageClick} />),
         (<img src={puppyNine} data-item="nine" onClick={this.handleImageClick} />),
         (<img src={puppyTen} data-item="ten" onClick={this.handleImageClick} />),
         (<img src={puppyEleven} data-item="eleven" onClick={this.handleImageClick} />),
         (<img src={puppyTwelve} data-item="twelve" onClick={this.handleImageClick} />)],
      clickedImage: []
    }
      
  }
  handleImageClick = (event) => {
    console.log(event.currentTarget.getAttribute("data-item"));
    var clicked = event.currentTarget.getAttribute("data-item");
    if (this.state.clickedImage.includes(clicked)) {
      this.setState({
          score: 0,
          clickedImage: []
        });
    }else {
      this.setState({
          score: this.state.score+1, 
          clickedImage: [clicked, ...this.state.clickedImage]
        });

    }
    this.setState({images: shuffle(this.state.images)})
  
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Clicky Game</h1><p>Score: {this.state.score}</p>

        </header>
        <div>
            {this.state.images}

        </div>
      </div>
    );
  }
}

export default App;


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

