import React from 'react';
import axios from 'axios';
import propTypes from 'prop-tyoes';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';


import './main-view.scss';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      registred: true
    };
  }
        
   componentDidMount(){
    axios.get('https://myflixmoviesapp.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  
    setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }
    onLoggedIn(user) {
    this.setState({
      user
    });
  }
    onRegister(registered, user) {
    this.setState({
      registred,
      user,
    });
  }

  logoutUser(uselessParam) {
    this.setState({
      user: false,
      selectedMovie: null,
    });
  }

  toRegistrationView(asdf) {
    this.setState({
      registred: false,
    });
  }
    render() {
      const { movies, selectedMovie, user, registred } = this.state;
  
      if (!registred) return <RegistrationView onRegister={(registred, username) => this.onRegister(registred, username)}/>;
      if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
      if (movies.length === 0) return <div className="main-view" />;
  
    
      return (
        <Row className="main-view justify-content-md-center">
          {selectedMovie
            ? (
              <Col md={8}>
                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
              </Col>
            )
            : movies.map(movie => (
              <Col md={3}>
                <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
              </Col>
            ))
          }
        </Row>
      );
    } 
   } 
   
