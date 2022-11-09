import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import {MainView} from './components/main-view/main-view';


import './index.scss';

// Main component (will eventually use all the others)

class MyFlixApplication extends React.Component {
 
  render() {  
    return (
      <Container>
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          ))
        }
      </div>
    </Container>
  );
 }
}
 
    
// Finds the root of your app
const container = document.getElementById('app-container')
//console.log ('cot: ', container)
//const rootElement =ReactDOM.createRoot(container)

// Tells React to render your app in the root DOM element
//rootElement.render(<MyFlixApplication/>)
ReactDOM.render(React.createElement(MyFlixApplication), container);
