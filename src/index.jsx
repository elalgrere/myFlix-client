import React from 'react';
import axios from 'axios';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null
    }
  }
  
    render() {
      return <div>Hello World</div>;
    }
  
    componentDidMount() {
      // code executed right after the component is added to the DOM
    }
  }
  

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);