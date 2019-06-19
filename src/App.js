import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particleOptions = {
particles: {
     number: {
      value: 50,
      density: {
        enable: true,
        value_area: 400
      }
    }
  }
 }

const app = new Clarifai.App({
 apiKey: '0a298fbb631e454d9b3f5593734b9a04'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

onInputChange = (event) => {
  console.log(event.target.value);
}

onButtonSubmit = () => {
  console.log('click');
  app.models.predict("0a298fbb631e454d9b3f5593734b9a04", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
}

	render() {
  return (
    <div className="App">
    	 <Particles className='particles'
        params={ particleOptions } 
        />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={ this.onInputChange }
      onButtonSubmit={ this.onButtonSubmit }
       />
      }
      {/* <FaceRecognition />*/}
    </div>
  	);
	}
}

export default App;
